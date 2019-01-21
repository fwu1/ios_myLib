//
//  MyObjcClass.m
//  MyApp
//
//  Created by Samuel Wu on 1/13/19.
//  Copyright © 2019 Facebook. All rights reserved.
//  from https://www.youtube.com/watch?v=hWJaAdWisiw&t=155s

#import "MyObjcClass.h"
#import <React/RCTLog.h>
#include "myMathLib/myMathLib/cfuncs.h"

@implementation MyObjcClass

RCT_EXPORT_MODULE()

- (NSDictionary*) constantsToExport {
  return @{@"greeting": @"Welcome "};
}

static int count=1;
RCT_EXPORT_METHOD(squareMe:(NSString*)number:(RCTResponseSenderBlock)callback) {
  NSString * value = @"WRONG";
  @try {
    float fnum = [number floatValue];
//    fnum=fnum*fnum;
    fnum=cmul(fnum,fnum);
    char * date=getDate();
    value=[NSString stringWithFormat:@"%.4fC%d %s", fnum,count++,date]	;
  }
  @catch (NSException *exception) {
    NSLog(@"Caught an exception");
  }
  NSArray *someData = @[value];
  callback(@[[NSNull null], someData]);
}

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}
@end
