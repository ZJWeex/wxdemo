//
//  WXViewController.m
//  WeexDemo
//
//  Created by ZZJ on 2018/8/13.
//  Copyright © 2018年 taobao. All rights reserved.
//

#import "WXViewController.h"
#import <objc/runtime.h>
#import "WXRootViewController.h"
#import "WXSDKInstance.h"
#import "WXSDKEngine.h"
#import "WXSDKManager.h"
#import "WXUtility.h"
#import "WXPrerenderManager.h"
#import "WXMonitor.h"

//状态栏高
#define statusBarH    CGRectGetHeight([UIApplication sharedApplication].statusBarFrame)
#define safeAreaBottomH (statusBarH > 20 ? 34 : 0)

@interface WXViewController (Private)
@property (nonatomic, strong) WXSDKInstance *instance;
@property (nonatomic, strong) NSURL *sourceURL;
@property (nonatomic, strong) UIView *weexView;

- (void)_updateInstanceState:(WXState)state;

@end
@interface WXViewController ()<SRWebSocketDelegate>
@property (nonatomic, strong) SRWebSocket *hotReloadSocket;

@end

@implementation WXViewController

- (void)dealloc {
#if DEBUG
    [self.hotReloadSocket close];
#endif
}
- (void)viewDidLoad {
    void (*viewDidLoad)(id, SEL) = (void (*)(id, SEL))class_getMethodImplementation([UIViewController class], @selector(viewDidLoad));
    viewDidLoad(self, @selector(viewDidLoad));
    
    self.view.backgroundColor = [UIColor whiteColor];
    self.automaticallyAdjustsScrollViewInsets = NO;
    
    [self _renderWithURL:self.sourceURL];
    
#if DEBUG
    NSString * hotReloadURL =  [[NSBundle mainBundle] objectForInfoDictionaryKey:@"WXSocketConnectionURL"];
    if (hotReloadURL){
        _hotReloadSocket = [[SRWebSocket alloc] initWithURL:[NSURL URLWithString:hotReloadURL]];
        _hotReloadSocket.delegate = self;
        [_hotReloadSocket open];
    }
#endif
}
- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
    self.navigationController.navigationBarHidden = _hideNavBar;
}
- (void)viewWillLayoutSubviews
{
    [super viewWillLayoutSubviews];
    
}

- (void)_renderWithURL:(NSURL *)sourceURL
{
    if (!sourceURL) {
        return;
    }
    
    [self.instance destroyInstance];
    if([WXPrerenderManager isTaskReady:[self.sourceURL absoluteString]]){
        self.instance = [WXPrerenderManager instanceFromUrl:self.sourceURL.absoluteString];
    }
    
    self.instance = [[WXSDKInstance alloc] init];
    self.instance.pageObject = self;
    self.instance.pageName = sourceURL.absoluteString;
    self.instance.viewController = self;
    CGFloat navBarH = _hideNavBar? 0.0f:44+statusBarH;
    self.instance.frame = CGRectMake(0.0f, navBarH, self.view.bounds.size.width, self.view.bounds.size.height-navBarH);
    
    NSString *newURL = nil;
    
    if ([sourceURL.absoluteString rangeOfString:@"?"].location != NSNotFound) {
        newURL = [NSString stringWithFormat:@"%@&random=%d", sourceURL.absoluteString, arc4random()];
    } else {
        newURL = [NSString stringWithFormat:@"%@?random=%d", sourceURL.absoluteString, arc4random()];
    }
    [self.instance renderWithURL:[NSURL URLWithString:newURL] options:@{@"bundleUrl":sourceURL.absoluteString} data:nil];
    
    __weak typeof(self) weakSelf = self;
    self.instance.onCreate = ^(UIView *view) {
        [weakSelf.weexView removeFromSuperview];
        weakSelf.weexView = view;
        [weakSelf.view addSubview:weakSelf.weexView];
    };
    
    self.instance.onFailed = ^(NSError *error) {
        
    };
    
    self.instance.renderFinish = ^(UIView *view) {
        [weakSelf _updateInstanceState:WeexInstanceAppear];
    };
    
    if([WXPrerenderManager isTaskReady:[self.sourceURL absoluteString]]){
        WX_MONITOR_INSTANCE_PERF_START(WXPTJSDownload, self.instance);
        WX_MONITOR_INSTANCE_PERF_END(WXPTJSDownload, self.instance);
        WX_MONITOR_INSTANCE_PERF_START(WXPTFirstScreenRender, self.instance);
        WX_MONITOR_INSTANCE_PERF_START(WXPTAllRender, self.instance);
        [WXPrerenderManager renderFromCache:[self.sourceURL absoluteString]];
        return;
    }
}


- (void)webSocket:(SRWebSocket *)webSocket didReceiveMessage:(id)message {
    if ([@"refresh" isEqualToString:message]) {
        [self refreshWeex];
    }
}
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
