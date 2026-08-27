import React
import Foundation
import TCCore

@objc(TccoreReactNative)
class TccoreReactNative: NSObject {


    @objc(addAdditionalProperty:value:className:)
    func addAdditionalProperty(key: String, value: String, className: String)
    {
        if (className == "TCUser")
        {
            TCUser.sharedInstance().addAdditionalProperty(key, withStringValue: value)
        }
    }

    @objc(addAdditionalPropertyWithMapValue:value:className:)
    func addAdditionalPropertyWithMapValue(key: String, value: Dictionary<String, Any>, className: String)
    {
        if (className == "TCUser")
        {
            TCUser.sharedInstance().addAdditionalProperty(key, withDictValue: value)
        }
    }

    @objc(addAdditionalPropertyWithBooleanValue:value:className:)
    func addAdditionalPropertyWithBooleanValue(key: String, value: Bool, className: String)
    {
        if (className == "TCUser")
        {
            TCUser.sharedInstance().addAdditionalProperty(key, withBoolValue: value)
        }
    }

    @objc(addAdditionalPropertyWithNumberValue:value:className:)
    func addAdditionalPropertyWithNumberValue(key: String, value: Double, className: String)
    {
        if (className == "TCUser")
        {
            TCUser.sharedInstance().addAdditionalProperty(key, withNumberValue: NSDecimalNumber(value:value))
        }
    }

    @objc(removeAdditionalProperty:className:)
    func removeAdditionalProperty(key: String, className: String)
    {
        if (className == "TCUser")
        {
            TCUser.sharedInstance().removeAdditionalProperty(key)
        }
    }

    @objc(clearAdditionalProperties:)
    func clearAdditionalProperties(className: String) -> Void
    {
        if (className == "TCUser")
        {
            TCUser.sharedInstance().clearAdditionalProperties()
        }
    }

    @objc(setStringValue:value:className:)
    func setStringValue(key: String, value: String, className: String) -> Void
    {
        if (className == "TCUser")
        {
            TCUser.sharedInstance().setValue(value, forKey: key)
        }
    }

    @objc(setExternalConsent:)
    func setExternalConsent(value: Dictionary<String, Any>) -> Void
    {
        TCUser.sharedInstance().setExternalConsent(value)
    }

    // @deprecated You shouldn't set consent directly into TCUser. Use the TCConsent module APIs, or setExternalConsent() instead. This method will be removed in a future release.
    @objc(setConsentVendors:)
    func setConsentVendors(value: Dictionary<String, Any>) -> Void
    {
        TCUser.sharedInstance().setConsentVendors(value)
    }

    // @deprecated You shouldn't set consent directly into TCUser. Use the TCConsent module APIs, or setExternalConsent() instead. This method will be removed in a future release.
    @objc(setConsentCategories:)
    func setConsentCategories(value: Dictionary<String, Any>) -> Void
    {
        TCUser.sharedInstance().setConsentCategories(value)
    }

    @objc(enableNativeDebug)
    func enableNativeDebug() -> Void
    {
        TCDebug.setDebugLevel(TCLogLevel_Verbose)
    }

    @objc(disableNativeDebug)
    func disableNativeDebug() -> Void
    {
        TCDebug.setDebugLevel(TCLogLevel_None)
    }
}
