// import { ISO3166_1_Alpha3 } from "@locale-tools/countries";
import { NameSchema } from "./nameSchema";
import { ISO639_3 } from "./iso-639-3";
import { BCP47 } from "./bcp47";
import { ISO15924 } from "./iso-15924";

export type Language = {
  name: NameSchema;
  iso639_3: ISO639_3;
  bcp47: BCP47;
  iso15924: ISO15924;
  iana: string[];
  countries?: string
  isExtinct: boolean;
  isSpurious: boolean;
};
