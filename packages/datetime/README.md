# @locale-tools/datetime

List of all currencies and a currency conversion tool.

## Installation

Install a given package with npm or yarn.

```bash
npm install @locale-tools/datetime

yarn add @locale-tools/datetime
```

## Usage

A full list of tz database timezones can be found in `src/data/timezones.json`

```ts
import { timezones } from "@locale-tools/datetime";
```

### Types

```ts
// week start day -- both strings and enum valid
enum WeekStartDays {
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
  MONDAY = "monday"
}
type WeekStartDay = `${WeekStartDays}` | WeekStartDays

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

// tz database timezone names
enum TZTimezones {}
TZTimezones.windhoek; // "Africa/Windhoek"
```

### Methods

#### `getDateFnsLocale(locale: IETF, { fallbackLocale }): DateFnsLocale`

Returns a [date-fns locale object](https://date-fns.org/v2.25.0/docs/Locale) to use with date-fns. If a direct match is not found, it'll try to detect the closest locale, otherwise it uses a fallback. The default fallback is `en-US`.

| Parameter      | Type   | Description                                     | Default      |
| -------------- | ------ | ----------------------------------------------- | ------------ |
| locale         | `IETF` | IETF locale to match                            | **Required** |
| fallbackLocale | `IETF` | Fallback IETF locale if no date-fns match found | `en-US`      |

```ts
import { getDateFnsLocale } from "@locale-tools/datetime";

const dateFnsLocaleDirect = getDateFnsLocale("en-AU"); // en-AU locale object

const dateFnsLocaleClosest = getDateFnsLocale("es-PY"); // es locale object (no es-PY date-fns locale object)

const dateFnsLocaleFallback = getDateFnsLocale("aay"); // there is no 'aay' locale or a closest match, so this will returns en-US locale object as a fallback

const dateFnsLocaleFallbackCustom = getDateFnsLocale("aay", {
  fallbackLocale: "en-CA"
}); // will return en-CA as a fallback
```

#### `getDatePatternForLocale(locale: IETF)`

Returns the date format pattern (e.g. 'dd-MM-yyyy') for a given IETF locale.

| Parameter | Type   | Description                        | Default      |
| --------- | ------ | ---------------------------------- | ------------ |
| locale    | `IETF` | IETF locale to get the pattern for | **Required** |

```ts
import { getDatePatternForLocale } from "@locale-tools/datetime";

const datePattern = getDatePatternForLocale("nl-AW"); // returns "dd-MM-yyyy"
```

#### `getDateTimeForTimezone({ date, dateTimeFormat, timezone, serverTimezone }): Date`

Returns a date formatted and converted to a given timezone.

| Parameter      | Type                   | Description                 | Default      |
| -------------- | ---------------------- | --------------------------- | ------------ |
| date           | `Date, string, number` | The date to format          | `Date.now()` |
| dateTimeFormat | `string`               | Date format pattern         | **Required** |
| timezone       | `TZTimezone`           | Timezone to format to       | **Required** |
| serverTimezone | `TZTimezone`           | Timezone to compare against | `UTC`        |

```ts
import { getDateTimeForTimezone } from "@locale-tools/datetime";

const dateTimeInTimezone = getDateTimeForTimezone({
  date: 1636911831222,
  dateTimeFormat: "dd-MM-yyyy HH:mm",
  timezone: "Africa/Windhoek"
});
// returns "14-11-2021 19:44"
```
