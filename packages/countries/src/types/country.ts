import { ISO639_3, Language } from "@locale-tools/languages";
import { Currency, ISO4217 } from "@locale-tools/currency";
import { Locale } from "@locale-tools/localization";
import { ISO3166_1_Alpha2, ISO3166_1_Alpha3 } from "./iso-3166-1";
import { NameSchema } from "./nameSchema";
import { IOC } from "./ioc";
import { TLD } from "./tld";
import { Governance } from "./governance";
import { Subdivision } from "./subdivision";
import { Geography } from "./geography";

export type Country = {
  name: NameSchema;
  flag: string;
  cca2: ISO3166_1_Alpha2;
  cca3: ISO3166_1_Alpha3;
  ccn3: string;
  ioc: IOC | null;
  governance: Governance;
  geography: Geography;
  locale: Locale;
  languages: {
    official: Language[] | ISO639_3[];
    spoken: ISO639_3[];
  };
  currencies: Currency[] | ISO4217[];
  tld: TLD[];
  idd: {
    prefix: string;
    suffixes: string[];
    callingCodes: string[];
  };
  subdivisions?: Subdivision[];
};
