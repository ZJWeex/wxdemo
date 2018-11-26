//
//  WXGlobalEventModule+FireEvent.m
//  WeexDemo
//
//  Created by ZZJ on 2018/11/21.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "WXGlobalEventModule+FireEvent.h"

@implementation WXGlobalEventModule (FireEvent)

WX_EXPORT_METHOD(@selector(fireEvent:))

-(void)fireEvent:(NSString*)eventName{
    [self.weexInstance fireGlobalEvent:eventName params:@{}];
}

@end

