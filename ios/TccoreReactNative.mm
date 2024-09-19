#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(TccoreReactNative, NSObject)

RCT_EXTERN_METHOD(setStringValue: (NSString *) key value: (NSString *) value className: (NSString *) className)
RCT_EXTERN_METHOD(setNumValue: (NSString *) key value: (double) value className: (NSString *) className)
RCT_EXTERN_METHOD(clearAdditionalProperties: (NSString *) className)
RCT_EXTERN_METHOD(addAdditionalProperty: (NSString *) key value: (NSString*) value className: (NSString*) className)
RCT_EXTERN_METHOD(addAdditionalPropertyWithMapValue: (NSString *) key value: (NSDictionary*) value className: (NSString*) className)
RCT_EXTERN_METHOD(addAdditionalPropertyWithBooleanValue: (NSString *) key value: (BOOL) value className: (NSString*) className)
RCT_EXTERN_METHOD(addAdditionalPropertyWithNumberValue: (NSString *) key value: (double) value className: (NSString*) className)
RCT_EXTERN_METHOD(removeAdditionalProperty: (NSString *) key className: (NSString*) className)
RCT_EXTERN_METHOD(setExternalConsent: (NSDictionary*) value)
RCT_EXTERN_METHOD(setConsentVendors: (NSDictionary*) value)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
