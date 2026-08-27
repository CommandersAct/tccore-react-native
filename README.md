# tccore-react-native

CommandersAct's TCCore mobile library bridge to react-native.

This bridge is mainly used to bridge the TCCore module.
You will need to add this dependency to your app if you wanna use the other [TCServerSide](https://www.npmjs.com/package/@commandersact/tcserverside-react-native) and [TCConsent](https://www.npmjs.com/package/@commandersact/tcconsent-react-native) bridges.

## Table of Contents

- [Installation](#installation)
- [TCUser](#tcuser)
  - [Identifying a user](#identifying-a-user)
  - [Additional properties](#additional-properties)
  - [External consent](#external-consent)
  - [Deprecated consent fields](#deprecated-consent-fields)
- [Versions compatibility](#versions-compatibility)
- [Support & Contact](#support--contact)

## Installation

```bash
npm install @commandersact/tccore-react-native
```

or

```bash
yarn add @commandersact/tccore-react-native
```

### iOS

```bash
cd ios && pod install
```

### Android

No extra step is needed, the module is autolinked.

## TCUser

`TCUser` holds information about your app's current user. It's sent with every event if you are using TCServerSide, and some fields are used for the Consent hit if you are using our TCConsent.

The bridge exposes a single, ready-to-use instance:

```tsx
import { TCUserInstance } from '@commandersact/tccore-react-native';
```

### Identifying a user

```tsx
TCUserInstance.ID = 'my-user-id';
TCUserInstance.email = 'user@example.com';
TCUserInstance.email_md5 = '...';
TCUserInstance.email_sha256 = '...';
TCUserInstance.consentID = 'my-consent-id';
TCUserInstance.phoneNumber = '+33612345678';
TCUserInstance.firstName = 'Jean';
TCUserInstance.lastName = 'Dupont';
TCUserInstance.gender = 'm';
TCUserInstance.birthdate = '1970-01-01';
TCUserInstance.city = 'Paris';
TCUserInstance.state = 'state';
TCUserInstance.zipcode = '75014';
TCUserInstance.country = 'France';
TCUserInstance.anonymous_id = 'my-anonymous-id';
```

Every field has a matching getter (e.g. `TCUserInstance.ID`).

### Additional properties

You can attach arbitrary custom properties to `TCUser`, in addition to its predefined fields.

```tsx
TCUserInstance.addAdditionalProperty('key', 'value');
TCUserInstance.addAdditionalPropertyWithMapValue('key', { nested: 'value' });
TCUserInstance.addAdditionalPropertyWithBooleanValue('key', true);
TCUserInstance.addAdditionalPropertyWithNumberValue('key', 42);

TCUserInstance.getAdditionalProperties(); // Map<string, any>

TCUserInstance.removeAdditionalProperty('key');
TCUserInstance.clearAdditionalProperties();
```

### External consent

If you manage consent through a system we don't natively support, you can forward it as-is through `external_consent`. Since it's external and CommandersAct doesn't interpret it, any string/string key-value pairs are accepted and forwarded unchanged.

```tsx
TCUserInstance.external_consent = {
  key01: '1',
  key02: '1',
  '312': '0',
};

TCUserInstance.getExternalConsent; // read back the value you set (property accessor, no parentheses)
```

## Versions compatibility

TCServerSide and TCConsent both depend on TCCore. Each release pins a specific TCCore version as a peer dependency — npm will warn you if there's a mismatch.

When upgrading, update all packages together:
```bash
npm install @commandersact/tccore-react-native@latest
npm install @commandersact/tcserverside-react-native@latest
npm install @commandersact/tcconsent-react-native@latest
```

> [!NOTE]
> Native iOS dependencies use fixed versions in the podspec to prevent unwanted auto-upgrades. Mixing versions across packages may cause linking failures.

## Support & Contact

Support : support@commandersact.com

http://www.commandersact.com

Commanders Act | 25 rue tolbiac - 75013 PARIS - France

![Commanders Act logo](res/ca_logo.png)
