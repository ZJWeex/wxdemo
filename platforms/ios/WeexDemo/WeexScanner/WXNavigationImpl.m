//
//  WXNavigationImpl.m
//  WeexDemo
//
//  Created by ZZJ on 2018/8/13.
//  Copyright © 2018年 taobao. All rights reserved.
//

#import "WXNavigationImpl.h"
#import "WXViewController.h"

@interface WXNavigationImpl (Private)

- (void)callback:(WXNavigationResultBlock)block code:(NSString *)code data:(NSDictionary *)reposonData;
- (UIView *)barButton:(NSDictionary *)param position:(WXNavigationItemPosition)position withContainer:(UIViewController *)container;

@end
@implementation WXNavigationImpl

- (void)pushViewControllerWithParam:(NSDictionary *)param completion:(WXNavigationResultBlock)block withContainer:(UIViewController *)container {
    if (0 == [param count] || !param[@"url"] || !container) {
        [self callback:block code:MSG_PARAM_ERR data:nil];
        return;
    }
    
    BOOL animated = YES;
    NSString *obj = [[param objectForKey:@"animated"] lowercaseString];
    if (obj && [obj isEqualToString:@"false"]) {
        animated = NO;
    }
    
    BOOL hidden = YES;
    NSString *hiddenStr = [[param objectForKey:@"hidden"] lowercaseString];
    if (hiddenStr && [hiddenStr isEqualToString:@"false"]) {
        hidden = NO;
    }
    
    NSString *backgroundcolor = [[param objectForKey:@"backgroundcolor"] lowercaseString];
    if (backgroundcolor) {
        
    }
    NSString *tintColor = [[param objectForKey:@"color"] lowercaseString];
    if (tintColor) {
        
    }
    NSString *title = [[param objectForKey:@"title"] lowercaseString];
    
    NSString *titlecolor = [[param objectForKey:@"titlecolor"] lowercaseString];
    if (titlecolor) {
        
    }
    //仅支持.js文件
    NSString *url = param[@"url"];
    if ([url hasSuffix:@"html"]) {
        url = [param[@"url"] stringByReplacingOccurrencesOfString:@".html" withString:@".js"];
    }
    
    WXViewController *vc = [[WXViewController alloc]initWithSourceURL:[NSURL URLWithString:url]];
    if (title) {
        vc.title = title;
    }
    vc.hideNavBar = hidden;
    vc.hidesBottomBarWhenPushed = YES;
    [container.navigationController pushViewController:vc animated:animated];
    [self callback:block code:MSG_SUCCESS data:nil];
    
}
- (void)openURL:(NSDictionary *)option callback:(WXModuleKeepAliveCallback)callback {
    NSString *newURL = [option valueForKey:@"url"];
    if ([newURL hasPrefix:@"//"]) {
        newURL = [NSString stringWithFormat:@"http:%@", newURL];
        
    } else if (![newURL hasPrefix:@"http"]) {
        
    }
    NSDictionary *renderInfo = [option valueForKey:@"navigationBarInfo"];
    NSLog(@"%@",renderInfo);
    callback(@{@"result":@"success"},false);
    
}


- (void)setNaviBarLeftItem:(NSDictionary *)param completion:(WXNavigationResultBlock)block
             withContainer:(UIViewController *)container
{
    if (0 == [param count]) {
        [self callback:block code:MSG_PARAM_ERR data:nil];
        return;
    }
    
    UIView *view = [self barButton:param position:WXNavigationItemPositionLeft withContainer:container];
    
    if (!view) {
        [self callback:block code:MSG_FAILED data:nil];
        return;
    }
    
    container.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithCustomView:view];
    
    [self callback:block code:MSG_SUCCESS data:nil];
}

@end
