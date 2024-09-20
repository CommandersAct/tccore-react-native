import { TCCoreBridge } from "./TCCore";

export class TCUser
{
    private additionalProperties = new Map();

    private _ID: string;
    private _email: string;
    private _email_md5: string;
    private _email_sha256: string;
    private _consentID: string;
    private _phoneNumber: string;
    private _firstName: string;
    private _lastName: string;
    private _gender: string;
    private _birthdate: string;
    private _city: string;
    private _state: string;
    private _zipcode: string;
    private _country: string;
    private _anonymous_id: string;
    private _consent_categories: Object;
    private _external_consent: Object;
    private _consent_vendors: Object;


    constructor() { }

    public set ID(val: string) 
    {
        if (this._ID !== val) 
        {
            this._ID = val;
            TCCoreBridge.setStringValue("ID", val, TCUser.name);
        }
    }

    public set email(val: string) 
    {
        if (this._email !== val) 
        {
            this._email = val;
            TCCoreBridge.setStringValue("email", val, TCUser.name);
        }
    }

    public set email_md5(val: string) 
    {
        if (this._email_md5 !== val) 
        {
            this._email_md5 = val;
            TCCoreBridge.setStringValue("email_md5", val, TCUser.name);
        }
    }

    public set email_sha256(val: string) 
    {
        if (this._email_sha256 !== val)
        {
            this._email_sha256 = val;
            TCCoreBridge.setStringValue("email_sha256", val, TCUser.name);
        }
    }

    public set consentID(val: string) 
    {
        if (this._consentID !== val) 
        {
            this._consentID = val;
            TCCoreBridge.setStringValue("consentID", val, TCUser.name);
        }
    }

    public set phoneNumber(val: string) 
    {
        if (this._phoneNumber !== val) 
        {
            this._phoneNumber = val;
            TCCoreBridge.setStringValue("phoneNumber", val, TCUser.name);
        }
    }

    public set firstName(val: string) 
    {
        if (this._firstName !== val) 
        {
            this._firstName = val;
            TCCoreBridge.setStringValue("firstName", val, TCUser.name);
        }
    }

    public set lastName(val: string) 
    {
        if (this._lastName !== val) 
        {
            this._lastName = val;
            TCCoreBridge.setStringValue("lastName", val, TCUser.name);
        }
    }

    public set gender(val: string) 
    {
        if (this._gender !== val) 
        {
            this._gender = val;
            TCCoreBridge.setStringValue("gender", val, TCUser.name);
        }
    }

    public set birthdate(val: string) 
    {
        if (this._birthdate !== val) 
        {
            this._birthdate = val;
            TCCoreBridge.setStringValue("birthdate", val, TCUser.name);
        }
    }

    public set city(val: string) 
    {
        if (this._city !== val) 
        {
            this._city = val;
            TCCoreBridge.setStringValue("city", val, TCUser.name);
        }
    }

    public set state(val: string) 
    {
        if (this._state !== val) 
        {
            this._state = val;
            TCCoreBridge.setStringValue("state", val, TCUser.name);
        }
    }

    public set zipcode(val: string)
     {
        if (this._zipcode !== val) 
        {
            this._zipcode = val;
            TCCoreBridge.setStringValue("zipcode", val, TCUser.name);
        }
    }

    public set country(val: string) 
    {
        if (this._country !== val) 
        {
            this._country = val;
            TCCoreBridge.setStringValue("country", val, TCUser.name);
        }
    }

    public set anonymous_id(val: string)
     {
        if (this._anonymous_id !== val) 
        {
            this._anonymous_id = val;
            TCCoreBridge.setStringValue("anonymous_id", val, TCUser.name);
        }
    }

    public set consent_categories(val: Object) 
    {
        if (this._consent_categories !== val) 
        {
            this._consent_categories = val;
            TCCoreBridge.setConsentCategories("consent_categories", val, TCUser.name);
        }
    }

    public set external_consent(val: Object) 
    {
        if (this._external_consent !== val) 
        {
            this._external_consent = val;
            TCCoreBridge.setExternalConsent(val);
        }
    }

    public set consent_vendors(val: Object) 
    {
        if (this._consent_vendors !== val) 
        {
            this._consent_vendors = val;
            TCCoreBridge.setConsentVendors(val);
        }
    }

    public get ID()
    {
        return this._ID;
    }

    public get email()
    {
        return this._email;
    }

    public get email_md5()
    {
        return this._email_md5;
    }

    public get email_sha256()
    {
        return this._email_sha256;
    }

    public get consentID()
    {
        return this._consentID;
    }

    public get phoneNumber()
    {
        return this._phoneNumber;
    }

    public get firstName()
    {
        return this._firstName;
    }

    public get lastName()
    {
        return this._lastName;
    }

    public get gender()
    {
        return this._gender;
    }

    public get birthdate()
    {
        return this._birthdate;
    }

    public get city()
    {
        return this._city;
    }

    public get state()
    {
        return this._state;
    }

    public get zipcode()
    {
        return this._zipcode;
    }

    public get country()
    {
        return this._country;
    }

    public get anonymous_id()
    {
        return this._anonymous_id;
    }

    public get getConsentCategories()
    {
        return this._consent_categories;
    }

    public get getExternalConsent()
    {
        return this._external_consent;
    }

    public get getConsentVendors()
    {
        return this._consent_vendors;
    }

    initValues(properties: any)
    {
       this._ID = properties["ID"] as string
       this._email = properties["email"] as string;
       this._email_md5 = properties["email_md5"] as string;
       this._email_sha256 = properties["email_sha256"] as string;
       this._consentID = properties["consentID"] as string;
       this._phoneNumber = properties["phoneNumber"] as string;
       this._firstName = properties["firstName"] as string;
       this._lastName = properties["lastName"] as string;
       this._gender = properties["gender"] as string;
       this._birthdate = properties["birthdate"] as string;
       this._city = properties["city"] as string;
       this._state = properties["state"] as string;
       this._zipcode = properties["zipcode"] as string;
       this._country = properties["country"] as string;
       this._anonymous_id = properties["consistent_anonymous_id"] as string;

       this._consent_categories = properties["consent_categories"] as Object;
       this._consent_vendors = properties["consent_vendors"] as Object;
       this._external_consent = properties["external_consent"] as Object;
    }

    addAdditionalProperty(key: string, value: string)
    {
        this.additionalProperties.set(key, value);
        TCCoreBridge.addAdditionalProperty(key, value, TCUser.name);
    }

    addAdditionalPropertyWithMapValue(key: string, value: Object)
    {
        this.additionalProperties.set(key, value);
        TCCoreBridge.addAdditionalPropertyWithMapValue(key, value, TCUser.name);
    }

    addAdditionalPropertyWithBooleanValue(key: string, value: boolean)
    {
        this.additionalProperties.set(key, value);
        TCCoreBridge.addAdditionalPropertyWithBooleanValue(key, value, TCUser.name);
    }

    addAdditionalPropertyWithNumberValue(key: string, value: number)
    {
        this.additionalProperties.set(key, value);
        TCCoreBridge.addAdditionalPropertyWithNumberValue(key, value, TCUser.name);
    }

    getAdditionalProperties(): Map<string, any>
    {
      return this.additionalProperties;
    }

    removeAdditionalProperty(key: string)
    {
        this.additionalProperties.delete(key);
        TCCoreBridge.removeAdditionalProperty(key, TCUser.name);
    }

    clearAdditionalProperties()
    {
        this.additionalProperties.clear();
        TCCoreBridge.clearAdditionalProperties(TCUser.name)
    }  
}