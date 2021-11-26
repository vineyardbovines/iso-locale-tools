# @iso-locale-tools/countries

World countries

## Installation

Install a given package with npm or yarn.

```bash
npm install @iso-locale-tools/countries

yarn add @iso-locale-tools/countries
```

## Usage

There are 2 exports of the countries list, full and truncated (see above).

```ts
import {
  countriesExpanded, // full list
  countries // truncated list
} from "iso-locale-tools";
```

The full JSON array of all world countries and information about them lives in the [`countries-expanded`](./src/data/countries-expanded.json).

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

### Types

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

// regions
enum Regions {}
Regions.oceania; // "oceania"

// subregions
enum Subregions {}
Subregions.australia_new_zealand; // "Australia and New Zealand"
```

### Methods

#### `getCountryNameKey(name: string): CountryKey`**

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
