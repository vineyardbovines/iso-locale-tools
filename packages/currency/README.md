# @iso-locale-tools/currency

List of all currencies and a currency conversion tool.

## Usage

A full list of all circulated currencies can be found in `src/data/currencies.json`.

```ts
import { currencies } from "iso-locale-tools";
```

### Types

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

### Methods

#### `getConversionRate({ from, to }): number | Error`

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
