import { CurrencyNames, CurrencyShortNames } from "./currencyNames";
import { CurrencySymbols } from "./currencySymbols";
import { ISO4217 } from "./iso-4217";

export type Currency = {
  name: CurrencyNames;
  shortName: CurrencyShortNames;
  iso4217: ISO4217;
  symbol: CurrencySymbols;
  subunit: string | null;
  subunitToUnit: number | null;
  prefix: string | null;
  suffix: string | null;
  decimalMark: string | null;
  decimalPlaces: number | null;
  thousandsSeparator: string | null;
};
