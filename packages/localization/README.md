# @iso-locale-tools/localization

Localization and internationalization tools.

## Installation

Install a given package with npm or yarn.

```bash
npm install @iso-locale-tools/countries

yarn add @iso-locale-tools/countries
```

## Usage

### Types

```ts
type Locale = {
  ietf: IETF[];
  drivingSide: DrivingSide | DrivingSides;
  measurementSystem: MeasurementSystem | MeasurementSystems;
  hourClock: HourClock | HourClocks;
  timezones: Timezone[] | TZTimezones[];
  dateFormats: {
    [key in IETF]: string;
  };
  weekStartsOn: WeekStartDay | WeekStartDays;
  distanceUnit: DistanceUnit | DistanceUnits;
  temperatureUnit: TemperatureUnit | TemperatureUnit;
};

// distance unit -- both strings and enum valid
enum DistanceUnits {
  KM = "kilometer",
  MI = "mile",
}
type DistanceUnit = `${DistanceUnits}` | DistanceUnits

// temp unit -- both strings and enum valid
enum TemperatureUnits {
  C = "celsius",
  F = "fahrenheit"
}
type TemperatureUnit = `${TemperatureUnits}` | TemperatureUnits

// driving side -- both strings and enum valid
enum DrivingSides {
  LEFT = "left",
  RIGHT = "right"
}
type DrivingSide = `${DrivingSides}` | DrivingSides

// measurement system -- both strings and enum valid
enum MeasurementSystems {
  METRIC = "metric",
  IMPERIAL = "imperial"
}
type MeasurementSystem = `${MeasurementSystems}` | MeasurementSystems

// supported locales
export type SupportedLocale = {
  code: string
  name: string
  translationFile: JsonObject
}
```

### Methods

#### `buildI18n({ supportedLanguages, namespaces, defaultNamespace, fallbackLanguage, languageStorageKey, errorCallback }): I18nInstance`

Builds an instance of [i18next]() to use in an application for translations.

| Parameters | Type | Description | Default |
| -- |
| supportedLanguages | `SupportedLocale[]` | An array of supported languages | **Required** |
| namespaces | `string[]`| An array of namespace keys in your translation file | **Required** |
| defaultNamespace | `string` | A default namespace key | `common` |
| fallbackLanguage | `string` | A fallback IETF language code | `en-US` |
| languageStorageKey | `string` | Key for storing user's chosen language (localStorage for web, AsyncStorage for React Native) | `language` |
| errorCallback | `void` | Function to handle any errors | `undefined` |

To use, you will need to install `i18next` and `react-i18next` into your application. You'll then need to do some configuration:

**i18n.ts** - this file can be anywhere in your app

```ts
import { buildI18n } from "@iso-locale-tools/localization";
import { IETF } from "@iso-locale-tools/languages";
import enTranslation from "./en.json"; // your local translation file

const supportedLanguages = [
  {
    code: IETF.en_US,
    name: "English (US)",
    translationFile: en
  }
]

export const i18n = buildI18n({
  supportedLanguages,
  namespaces: ["common", "validation", "a11y"],
})
```

Ensure that you have JSON translation files stored somewhere in your app for your i18n instance to reference. This file should be keyed with the namespaces you specify.

Then, you'll need to import your i18n instance in your app entry file.

```ts
import { i18n } from "./i18n";

.. // rest of the file
```

For more instructions, see the [i18next docs](https://www.i18next.com).
