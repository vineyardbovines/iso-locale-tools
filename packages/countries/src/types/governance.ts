import { ISO3166_1_Alpha3 } from "./iso-3166-1";

export type Governance = {
  isSovereign: boolean;
  isUNMember: boolean;
  governingCountry?: ISO3166_1_Alpha3;
  isEU?: boolean;
  isSchengen?: boolean;
  isEurozone?: boolean;
};
