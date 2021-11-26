# iso-locale-tools

All world countries, ISO- codes and data points about them, as well as tools for interfacing with that data.

| Package | Description |
| -- | -- |
| [`@iso-locale-tools/countries`](./src/packages/countries) | All world countries |
| [`@iso-locale-tools/`currency`](./src/packages/currency) | Currencies list and conversion tool |
| [`@iso-locale-tools/`currency`](./src/packages/datetime) | World timezones and datetime tools |
| [`@iso-locale-tools/`languages`](./src/packages/languages) | Languages list |
| [`@iso-locale-tools/`languages`](./src/packages/localization) | Localization and i18n tools |
| [`@iso-locale-tools/`languages`](./src/packages/navigation) | Navigational tools |

## Installation

Install a given package with npm or yarn.

```bash
npm install @iso-locale-tools/countries

yarn add @iso-locale-tools/countries
```

## Usage

The full JSON array of all world countries and information about them lives in the [countries package](./src/packages/countries/data/countries-expanded.json).

Each country is represented as an object.

- `name`
  - `common`: common name (in English)
  - `official`: officially recognized name (in English)
  - `native`: list of names in the country's recognized languages
    - `[key: ISO_639_3]`: ISO 639-3 language code
      - `common`: common name (in native language)
      - `official`: officially recognized name (in native language)
  - `alternates`: array of alternate name spellings
- `flag`: unicode string flag
- `cca2`: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code
- `cca3`: [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code
- `ccn3`: [ISO 3166-1 numeric](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) code
- `ioc`: [International Olympic Committee](https://en.wikipedia.org/wiki/International_Olympic_Committee) code
- `governance`
  - `isSovereign`: whether or not the country is independent (i.e. is self-governing)
  - `governingBody`: the country that governs the dependency (`undefined` if `isSovereign` is true)
  - `isUNMember`: whether or not the country is a member of the UN (`undefined` if `isSovereign` is false)
  - `isEU`: (european countries only) whether or not the country is a member of the EU
  - `isSchengen`: (european countries only) whether or not the country is a member of the [Schengen Area](https://en.wikipedia.org/wiki/Schengen_Area)
  - `isEurozone`: (european countries only) whether or not the country is a part of the [Eurozone](https://en.wikipedia.org/wiki/Eurozone), i.e. whether or not they use the Euro currency
- `languages`
  - `official`: an array of officially recognized languages
    - `name`:
      - `common`: the name of the language in English
      - `native`: the name of the language in that language
    - `iso639_3`: [ISO639-3](https://en.wikipedia.org/wiki/ISO_639-3) language code
    - `bcp47`: [BCP47](https://en.wikipedia.org/wiki/IETF_language_tag) tag
    - `iso14924`: [ISO15924](https://en.wikipedia.org/wiki/ISO_15924) script tag
    - `iana`: array of assigned [IANA](https://en.wikipedia.org/wiki/IETF_language_tag) tags
    - `isExtinct`: whether or not the language is no longer spoken
    - `isSpurious`: whether or not the language is [spurious](https://en.wikipedia.org/wiki/Spurious_languages), i.e. questioned if it ever existed
  - `spoken`: list of [ISO639-3](https://en.wikipedia.org/wiki/ISO_639-3) language tags of languages spoken in the country, but are not recognized as 'official' languages
- `geography`
  - `coordinates`: numeric coordinates of the center of the country
    - `latitude`
    - `longitude`
  - `isLandlocked`: whether or not the country is landlocked (not bordering the ocean)
  - `capitalCity`: a list of capital cities
  - `landArea`: size of the country in km<sup>2</sup>
  - `region`: the region the country is in (e.g. 'americas', 'europe')
  - `subregion`: the subregion of the country (e.g. `carribbean`)
  - `borderCountries`: list of countries by their [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) codes that border the country
- `locale`
  - `ietf`: a list of [IETF](https://en.wikipedia.org/wiki/IETF_language_tag) locale codes (e.g. `en-US`)
  - `measurementSystem`: system of measurement in use
  - `drivingSide`: driving side
  - `hourClock`: type of clock used
  - `timezones`: list of [tz database timezones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
    - `name`: name of timezone
    - `type`: the type of timezone (primary or alias)
    - `linkedTo`: (if alias) the primary timezone this timezone links to
    - `utcOffset`: hours offset from UTC
    - `dstOffset`: hours offset from UTC during DST (if country doesn't observe DST, this is the same value as UTC offset)
  - `dateFormats`: date formats for each IETF locale
    - key is the IETF locale name
    - value is the date format, where:
      - `G` = era
      - `y` = year
      - `M` = month
      - `d` = day
  - `weekStartsOn`: which day is the first day of the week on the calendar
  - `distanceUnit`: the unit of distance used (kilometer or mile)
  - `temperatureMeasurement`: the unit of temperature (celsius or fahrenheit)
- `currencies`: list of accepted currencies
  - `name`: official currency name (in English)
  - `shortName`: the name of the currency itself (e.g. 'dollar' as opposed to 'US Dollar')
  - `iso4217`: [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code
  - `isoNumeric`: [ISO 4217 numeric](https://en.wikipedia.org/wiki/ISO_4217) code
  - `symbol`: unicode symbol (e.g. '\$')
  - `subunit`: subunit to whole value (e.g. 'cent')
  - `subunitToUnit`: number of subunits to reach a whole unit value (e.g. 100 cents = 1 dollar)
  - `prefix`: symbol that prefixes a currency amount (e.g. '\$1')
  - `suffix`: symbol that suffixes a currency amonut (e.g. '1€')
  - `decimalMark`: symbol that denotes a decimal place
  - `decimalPlaces`: number of decimal places rounded to
  - `thousansSeparator`: symbol to denote thousands separation
- `tld`: list of [top-level domains](https://en.wikipedia.org/wiki/Top-level_domain) used
- `idd`: [international dialing direct](https://en.wikipedia.org/wiki/List_of_country_calling_codes) info
  - `prefix`: geographical code prefix (e.g. +1 for US)
  - `suffixes`: list of suffixes assigned (e.g. 201 in US)
  - `callingCodes`: list of calling codes (combinations of the prefix and each suffix - e.g. +1201)
- `subdivisions`: list of [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) subdivisions of each country
  - `name`: name of the subdivision in the country's recognized languages
    - `[key: ISO_639_3]`: ISO 639-3 language code
      - `official`: official subdivison name
      - `common`: locally used name variant
      - `native`: official name in non-alphanumeric script language (e.g. arabic, cyrillic)

There is also a truncated list (`src/data/countries.json`) that abbreviates and filters out certain data to reduce file size.

**Full country list vs. truncated country list**

| Object               | `countries-expanded.json`       | `countries.json`                                                                                     |
| -------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `languages.official` | A list of full language objects | A list of [ISO639-3](https://en.wikipedia.org/wiki/ISO_639-3) language codes                         |
| `currencies`         | A list of full currency objects | A list of [ISO4217](https://en.wikipedia.org/wiki/ISO_4217) currency codes                           |
| `locale.timezones`   | A list of full timezone objects | A list of [tz database timezone names](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) |
| `subdivisions`       | A list of subdivision objects   | `undefined`                                                                                          |

**Note:** `subdivisions` is removed from `countries.json` because for most countries, it's a huge list and many times isn't needed.

## API

All datasets can be found in [src/data/](./src/data).

### Countries

There are 2 exports of the countries list, full and truncated (see above).

```ts
import {
  countriesExpanded, // full list
  countries // truncated list
} from "iso-locale-tools";
```

**Types**

```ts
type Country = {
  name: {
    common: string;
    official: string;
    native: {
      [key in ISO639_3]: {
        official: string;
        common: string;
      };
    };
    alternates?: string[];
  };
  flag: string;
  cca2: ISO3166_1_Alpha2;
  cca3: ISO3166_1_Alpha3;
  ccn3: ISO3166_1_Numeric; // enum is keyed by country name
  ioc: IOC | null;
  governance: {
    isSovereign: boolean;
    isUNMember?: boolean;
    governingCountry?: ISO3166_1_Alpha3 | string; // Antarctica is the 'string' exception
    isEU?: boolean;
    isSchengen?: boolean;
    isEurozone?: boolean;
  };
  languages: {
    official: Language[] | ISO639_3[]; // language objects for full, iso639-3 codes for truncated
    spoken: ISO639_3[];
  };
  geography: {
    coordinates: {
      latitude: number;
      longitude: number;
    };
    isLandlocked: boolean;
    capitalCity: string[];
    landArea: number;
    region: Region;
    subregion: Subregion;
    borderCountries: ISO3166_1_Alpha3[];
  };
  locale: {
    ietf: IETF[];
    measurementSystem: "metric" | "imperial"; // also available as an enum (MeasurementSystem)
    drivingSide: "left" | "right"; // also available as an enum (DrivingSide)
    hourClock: "12hr" | "24hr" | "mixed"; // also available as an enum (HourClock)
    weekStartsOn: "friday" | "saturday" | "sunday" | "monday"; // also available as an enum (WeekStartsOn)
    distanceUnit: "kilometer" | "mile"; // also available as an enum (DistanceUnit)
    temperatureUnit: "celsius" | "fahrenheit"; // also available as an enum (TemperatureUnit)
    timezones: Timezones[] | TZTimezone[]; // timezone objects on full, tz names for truncated
    dateFormats: {
      [key in ISO639_3]: string;
    };
  };
  currencies: Currency[] | ISO4217[]; // currency objects on full, iso4217 strings for truncated
  tld: TLD[];
  idd: {
    prefix: string;
    suffixes: string[];
    callingCodes: string[];
  };
  subdivisions: Subdivision[] | undefined; // only available on full list
};

// subdivision object
type Subdivision = {
  isoCode: ISO3166_2;
  type?: SubdivisionTypes;
  name: {
    [key in ISO639_3]: {
      official: string;
      common: string | null;
      native: string | null;
    };
  };
};

// ISO3166-1 alpha2 (cca2) codes
enum ISO3166_1_Alpha2 {}
ISO3166_1_Alpha2.AX; // "AX"

// ISO3166-1 alpha2 codes keyed by country name
enum ISO3166_1_Alpha2ByCountry {}
ISO3166_1_Alpha2ByCountry.denmark; // "DK"

// ISO3166-1 alpha3 (cca3) codes
enum ISO3166_1_Alpha3 {}
ISO3166_1_Alpha3.ALA; // "ALA"

// ISO3166-1 alpha3 codes keyed by country name
enum ISO3166_1_Alpha3ByCountry {}
ISO3166_1_Alpha3ByCountry.denmark; // "DNK"

// ISO3166 numeric (ccn3) codes
// this enum is keyed by country name
enum ISO3166_1_Numeric {}
ISO3166_1_Numeric.british_virgin_islands; // "092"

// ISO3166-2 subdivision codes
enum ISO3166_2 {} // ISO3166-2 subdivision codes
ISO3166_2.BT_42; // "BT-42"
```

**`getCountryNameKey(name: string): CountryKey`**

Country enum keys are 'simplified' versions of country names, e.g. 'Saint Vincent and the Grenadines' becomes 'st_vincent_grenadines'.

| Parameter | Type     | Description                         | Default      |
| --------- | -------- | ----------------------------------- | ------------ |
| name      | `string` | The country name to get the key for | **Required** |

```ts
import { getCountryKey, ISO3166_1_Alpha2ByCountry } from "iso-locale-tools";

const countryKey1 = getCountryKey("Aruba"); // aruba

// name does not have to be case sensitive
const countryKey2 = getCountryKey("new zealand"); // new_zealand

// partial country names will work too, if found
// in this case, the country name is technically 'Saint Helena, Ascension and Tristan da Cunha"
const countryKey3 = getCountryKey("St Helena"); // st_helena_ascension_tristan_da_cunha

// you can use the country key to read from the ISO3166 enums
ISO3166_1_Alpha2ByCountry[countryKey1]; // AW
ISO3166_1_Alpha2ByCountry[countryKey2]; // NZ
ISO3166_1_Alpha2ByCountry[countryKey3]; // SH
```

#### Currencies

A full list of all circulated currencies can be found in `src/data/currencies.json`.

```ts
import { currencies } from "iso-locale-tools";
```

**Types**

```ts
// currency object type
type Currency = {
  name: CurrencyNamesByISO4217 | string;
  shortName: CurrencyNamesByISO4217;
  iso_4217: ISO4217;
  symbol: CurrencySymbolsByISO4217 | string;
  subunit: string | null;
  subunitToUnit: number | null;
  prefix: string | null;
  suffix: string | null;
  decimalMark: string | null;
  decimalPlaces: number | null;
  thousandsSeparator: string | null;
};

// ISO4217 currency codes
enum ISO4217 {}
ISO4217.USD; // "USD"

// currency names by ISO4217 codes
enum CurrencyNamesByISO4217 {}
CurrencyNamesByISO4217.USD; // "United States Dollar"

// currency 'short' names by ISO4217
enum CurrencyShortNamesByISO4217 {}
CurrencyShortNamesByISO4217.USD; // "dollar"

// currency symbols by ISO4217
enum CurrencySymbolsByISO4217 {}
CurrencySymbolsByISO4217.USD; // "$"
```

**`getConversionRate({ from, to }): number | Error`**

Returns the conversion rate between 2 currencies. Returns an error if one is encountered, this function utilizes the free version of the [currconv api](https://www.currencyconverterapi.com/).

| Parameter | Type      | Description                               | Default      |
| --------- | --------- | ----------------------------------------- | ------------ |
| from      | `ISO4217` | The ISO4217 currency code to convert from | **Required** |
| to        | `ISO4217` | The ISO4217 currency code to convert to   | **Required** |

```ts
import { getConversionRate, ISO4217 } from "iso-locale-tools";

// returns the conversion rate from us dollar to euro
const conversionRate = getConversionRate({
  from: ISO4217.USD, // you can also pass the string code if you prefer
  to: ISO4217.EUR
});
```

#### Languages

A full list of all documented languages can be found in `src/data/languages.json`.

```ts
import { languages } from "iso-locale-tools";
```

**Types**

```ts
type Language = {
  name: {
    common: string;
    native: string | null;
    alternates?: string[];
  };
  iso639_3: ISO639_3;
  bcp47: BCP47;
  iso15924: ISO15924;
  iana: string[];
  countries?: ISO3166_1_Alpha2;
  isExtinct: boolean;
  isSpurious: boolean;
};

// ISO639-3 language codes
enum ISO639_3 {}
ISO639_3.eng; // "eng"

// BCP47 language tags
enum BCP47 {}
BCP47.abq_Cyrl; // "abq-Cyrl"

// ISO15924 codes
enum ISO15924 {}
ISO15924.cyrl; // "Cyrl"
```

#### Locale

A full list of tz database timezones can be found in `src/data/timezones.json`

```ts
import { timezones } from "iso-locale-tools";
```

**Types**

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

// week start day -- both strings and enum valid
enum WeekStartDays {
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
  MONDAY = "monday"
}
type WeekStartDay = `${WeekStartDays}` | WeekStartDays

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

// hour clock -- both strings and enum valid
enum HourClocks {
  AM_PM = "12hr",
  MILITARY = "24hr",
  MIXED = "mixed"
}
type HourClock = `${HourClocks}` | HourClocks

// timezone object
type Timezone = {
  name: Timezones;
  type: "canonical" | "link";
  linkedTo: string | null;
  utcOffset: string;
  dstOffset: string;
};

// IETF locale codes
enum IETF {}
IETF.en_CA; // "en-CA"

// tz database timezone names
enum TZTimezones {}
TZTimezones.windhoek; // "Africa/Windhoek"
```

**`convertDistance(distance: number, fromUnit: DistanceUnit): number`**

Returns a converted distance from a given unit to the 'opposite' unit (e.g. kilometer to mile or vice-versa).

| Parameter  | Type           | Description             | Default      |
| ---------- | -------------- | ----------------------- | ------------ |
| `distance` | `number`       | The distance to convert | **Required** |
| `fromUnit` | `DistanceUnit` | The distance unit       | **Required** |

```ts
import { convertDistance } from "iso-locale-tools";

const distance = convertDistance(2, "kilometer");
// returns 1.242742 (miles)
```

**`getDateFnsLocale(locale: IETF, { fallbackLocale }): DateFnsLocale`**

Returns a [date-fns locale object](https://date-fns.org/v2.25.0/docs/Locale) to use with date-fns. If a direct match is not found, it'll try to detect the closest locale, otherwise it uses a fallback. The default fallback is `en-US`.

| Parameter      | Type   | Description                                     | Default      |
| -------------- | ------ | ----------------------------------------------- | ------------ |
| locale         | `IETF` | IETF locale to match                            | **Required** |
| fallbackLocale | `IETF` | Fallback IETF locale if no date-fns match found | `en-US`      |

```ts
import { getDateFnsLocale } from "iso-locale-tools";

const dateFnsLocaleDirect = getDateFnsLocale("en-AU"); // en-AU locale object

const dateFnsLocaleClosest = getDateFnsLocale("es-PY"); // es locale object (no es-PY date-fns locale object)

const dateFnsLocaleFallback = getDateFnsLocale("aay"); // there is no 'aay' locale or a closest match, so this will returns en-US locale object as a fallback

const dateFnsLocaleFallbackCustom = getDateFnsLocale("aay", {
  fallbackLocale: "en-CA"
}); // will return en-CA as a fallback
```

**`getDatePatternForLocale(locale: IETF)`**

Returns the date format pattern (e.g. 'dd-MM-yyyy') for a given IETF locale.

| Parameter | Type   | Description                        | Default      |
| --------- | ------ | ---------------------------------- | ------------ |
| locale    | `IETF` | IETF locale to get the pattern for | **Required** |

```ts
import { getDatePatternForLocale } from "iso-locale-tools";

const datePattern = getDatePatternForLocale("nl-AW"); // returns "dd-MM-yyyy"
```

**`getDateTimeForTimezone({ date, dateTimeFormat, timezone, serverTimezone }): Date`**

Returns a date formatted and converted to a given timezone.

| Parameter      | Type                   | Description                 | Default      |
| -------------- | ---------------------- | --------------------------- | ------------ |
| date           | `Date, string, number` | The date to format          | `Date.now()` |
| dateTimeFormat | `string`               | Date format pattern         | **Required** |
| timezone       | `TZTimezone`           | Timezone to format to       | **Required** |
| serverTimezone | `TZTimezone`           | Timezone to compare against | `UTC`        |

```ts
import { getDateTimeForTimezone } from "iso-locale-tools";

const dateTimeInTimezone = getDateTimeForTimezone({
  date: 1636911831222,
  dateTimeFormat: "dd-MM-yyyy HH:mm",
  timezone: "Africa/Windhoek"
});
// returns "14-11-2021 19:44"
```

```ts
import {
  countriesExpanded, // full countries list
  countries, // truncated country list
  currencies, // world currencies list
  languages, // world languages list
  timezones // tz database timezones list
} from "iso-locale-tools";
```

#### Location

**Types**

```ts
type Location = {
  coordinates: Coordinates;
  isLandlocked: boolean;
  borderCountries: ISO3166_1_Alpha3;
  capitalCity: string[];
  landArea: number;
  region: Regions;
  subregion: Subregions;
};

// coordinates object
type Coordinates = {
  latitude: number;
  longitude: number;
};

// regions
enum Regions {}
Regions.oceania; // "oceania"

// subregions
enum Subregions {}
Subregions.australia_new_zealand; // "Australia and New Zealand"

enum CompassRose {}
CompassRose.CARDINAL; // "cardinal"

enum CardinalDirections {}
CardinalDirections.W; // "W"

enum CelestialDirections {}
CelstialDirections.SEBS; // "SEbS"

enum ClassicalDirections {}
ClassicalDirections.WNW; // "WNW"

enum MarinerDirections {}
MarinerDirections.SE; // "SE"

enum CompassPoints {
  CARDINAL = 4,
  MARINER = 8,
  CLASSICAL = 12,
  CELESTIAL = 32
}
```

**`bearingToDirection(bearing: number): Windrose`**

Converts a bearing to a given compass direction. Throws an error if bearing is not between 0 and 360.

| Parameter     | Type          | Description                     | Default                 |
| ------------- | ------------- | ------------------------------- | ----------------------- |
| bearing       | `number`      | Bearing to convert              | **Required**            |
| compassPoints | `CompassRose` | Number of compass points to use | `CompassRose.CLASSICAL` |

```ts
import { bearingToDirection, CompassRose } from "iso-locale-tools";

const bearing = 243.62;

const windrose4Direction = bearingToDirection(bearing); // W

const windrose8Direction = bearingToDirection(bearing, CompassRose.MARINER); // SW

const windrose16Direction = bearingToDirection(bearing, CompassRose.CLASSICAL); // WSW

const windrose32Direction = bearingToDirection(bearing, CompassRose.CELESTIAL); // SWbW
```

**`getCenterOfCoordinates(coordinates: Coordinates[]): Coordinates`**

Returns the coordinate center of a list of coordinates.

| Parameters  | Type            | Description               | Default      |
| ----------- | --------------- | ------------------------- | ------------ |
| coordinates | `Coordinates[]` | List of coordinate objets | **Required** |

```ts
import { getCenterOfCoordinates } from "iso-locale-tools";

const center = getCenterOfCoordinates([
  { latitude: 12.5, longitude: -69.9 },
  { latitude: 52.5, longitude: 5.75 }
]);
// returns { latitude: 38.44160133305245, longitude: -42.280221828555504 }
```

**`getRhumbLine({ from, to }): number`**

Returns a [rhumb line](https://en.wikipedia.org/wiki/Rhumb_line) between 2 longitudes (meridians).

| Parameters | Type     | Description        | Default      |
| ---------- | -------- | ------------------ | ------------ |
| from       | `number` | starting longitude | **Required** |
| to         | `number` | ending longitude   | **Required** |

```ts
import { getRhumbLine } from "iso-locale-tools";

const rhumbLine = getRhumbLine({from: -69.9, to: 5.75});
// returns 1.3203415791337105
```

**`geographicDistanceTo({ from, to, unit, useRhumbLine }): number`**

Returns the [great-circle distance](https://en.wikipedia.org/wiki/Great-circle_distance) between 2 points using the [haversine formula](https://en.wikipedia.org/wiki/Versine#hav).

| Parameters   | Type           | Description                            | Default      |
| ------------ | -------------- | -------------------------------------- | ------------ |
| from         | `Coordinates`  | starting coordinates                   | **Required** |
| to           | `Coordinates`  | destination coordinates                | **Required** |
| unit         | `DistanceUnit` | unit of measurement to get distance in | `kilometer`  |
| useRhumbLine | `boolean`      | whether or not to use a rhumb line     | `false`      |

```ts
import { geographicDistanceTo } from "iso-locale-tools";

const distance = geographicDistanceTo({
  from: location1,
  to: location2,
  unit: "mile"
});
// returns 12792.535602738117

const distanceUsingRhumbLine = geographicDistanceTo({
  from: location1,
  to: location2,
  unit: "kilometer",
  useRhumbLine: true
});
// returns 8156.327629644782
```

**`bearingDistanceTo({ from, to, useRhumbLine }): { initialBearing: number, finalBearing: number})`**

Returns the initial bearing from start point to the destination point and the final bearing which differs by varying degrees according to the latitude/longitude.

| Parameters   | Type          | Description                        | Default      |
| ------------ | ------------- | ---------------------------------- | ------------ |
| from         | `Coordinates` | starting coordinates               | **Required** |
| to           | `Coordinates` | destination coordinates            | **Required** |
| useRhumbLine | `boolean`     | whether or not to use a rhumb line | `false`      |

```ts
import { bearingDistanceTo } from "iso-locale-tools";

const bearing = bearingDistanceTo({ from: location1, to: location2 });
// returns { initialBearing: 51.51700060782139, finalBearing: 231.5170006078214 }

const bearingUsingRhumbLine = bearingDistanceTo({
  from: location1,
  to: location2,
  useRhumbLine: true
});
// returns { initialBearing: 56.90674499795489, finalBearing: 236.9067449979549 }
```

## Acknowledgements

- [https://github.com/mledoze/countries](https://github.com/mledoze/countries)
- [https://github.com/countries/countries](https://github.com/countries/countries)
