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
}
