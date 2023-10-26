package com.tccorereactnative;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.module.annotations.ReactModule;
import com.tagcommander.lib.core.TCAdditionalProperties;
import com.tagcommander.lib.core.TCLogger;
import com.tagcommander.lib.core.TCUser;

import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

@ReactModule(name = TccoreReactNativeModule.NAME)
public class TccoreReactNativeModule extends ReactContextBaseJavaModule {
  public static final String NAME = "TccoreReactNative";

  public TccoreReactNativeModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void removeAdditionalProperty(String key, String className)
  {
    if (key != null)
    {
      if (className.equals("TCUser"))
      {
        TCUser.getInstance().removeAdditionalProperty(key);
      }
    }
  }

  @ReactMethod
  public void addAdditionalProperty(String key, String value, String className)
  {
    if (value != null)
    {
      if (className.equals("TCUser"))
      {
        TCUser.getInstance().addAdditionalProperty(key, value);
      }
    }
  }

  @ReactMethod
  public void addAdditionalPropertyWithArrayValue(String key, ReadableArray value, String className)
  {
    if (value != null)
    {
      if (className.equals("TCUser"))
      {
        TCUser.getInstance().addAdditionalProperty(key, value.toArrayList());
      }
    }
  }

  @ReactMethod
  public void setStringValue(String key, String value, String className)
  {
    Object obj = null;

    if (value != null)
    {
      Class<?> clazz = null;

      if (className.equals("TCUser"))
      {
        clazz = TCUser.getInstance().getClass();
        obj = TCUser.getInstance();
      }

      while (clazz != null)
      {
        try
        {
          Field field = clazz.getDeclaredField(key);
          field.setAccessible(true);
          field.set(obj, value);
          return;
        }
        catch (NoSuchFieldException e)
        {
          clazz = clazz.getSuperclass();
        }
        catch (Exception e)
        {
          TCLogger.getInstance().logMessage("Error while setting field for property {"+ key + "} with value {" + value +"}, :" + e.getMessage(), Log.ERROR);
          return;
        }
      }
    }
  }

  @ReactMethod
  public void setConsentCategories(ReadableMap value)
  {
    TCUser.getInstance().setConsentCategories(convertReadableMapToHashMap(value));
  }

  @ReactMethod
  public void setConsentVendors(ReadableMap value)
  {
    TCUser.getInstance().setConsentVendors(convertReadableMapToHashMap(value));
  }

  @ReactMethod
  public void setExternalConsent(ReadableMap value)
  {
    TCUser.getInstance().setExternalConsent(convertReadableMapToHashMap(value));
  }

  HashMap<String, String> convertReadableMapToHashMap(ReadableMap readableMap)
  {
    HashMap<String, String> hashMap = new HashMap<>();

    ReadableMapKeySetIterator iterator = readableMap.keySetIterator();
    while (iterator.hasNextKey())
    {
      String key = iterator.nextKey();
      String value = readableMap.getString(key);

      hashMap.put(key, value);
    }

    return hashMap;
  }

  @ReactMethod
  public void addAdditionalPropertyWithMapValue(String key, ReadableMap value, String className)
  {
    if (value != null)
    {
      if (className.equals("TCUser"))
      {
        TCUser.getInstance().addAdditionalProperty(key, new JSONObject(value.toHashMap()));
      }
    }
  }

  @ReactMethod
  public void addAdditionalPropertyWithBooleanValue(String key, boolean value, String className)
  {
    if (className.equals("TCUser"))
    {
      TCUser.getInstance().addAdditionalProperty(key, value);
    }
  }


  @ReactMethod
  public void addAdditionalPropertyWithNumberValue(String key, double value, String className)
  {
    TCAdditionalProperties obj = null;

    if (className.equals("TCUser"))
    {
      TCUser.getInstance().addAdditionalProperty(key, Double.valueOf(value).floatValue());
    }
  }

  @ReactMethod
  public void clearAdditionalProperties(String className)
  {
    TCAdditionalProperties obj = null;

    if (className.equals("TCUser"))
    {
      TCUser.getInstance().clearAdditionalProperties();
    }
  }

  @ReactMethod
  private String getTCUserJson()
  {
    try
    {
      return TCUser.getInstance().getJsonObject().put("consentID", TCUser.getInstance().consentID).toString();
    }
    catch (JSONException e)
    {
      e.printStackTrace();
    }
    return "";
  }
}