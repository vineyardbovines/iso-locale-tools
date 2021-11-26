import { ISO639_3 } from "./iso-639-3"

export type ShortNameSchema = {
  common: string;
  official: string;
};

export type LanguageKeyedName = {
  [key in ISO639_3]: ShortNameSchema;
};

export type NameSchema = ShortNameSchema & {
  native?: LanguageKeyedName | string | null;
  alternates?: string[];
};
