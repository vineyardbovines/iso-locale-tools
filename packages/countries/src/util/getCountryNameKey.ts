import { removeDiacritics } from "./removeDiacritics";
import { CountryKey } from "../types/countryKeys";

/**
 * getCountryNameKey - gets a country key for a given country by it's 'common' name (in English)
 *
 * @param name - the name of the country (refer to `name.common` field in the countries.json files)
 */
export function getCountryNameKey(name: string): CountryKey {
  const replacedName = removeDiacritics(name)
    .replace("'", "")
    .replace(/[\W_]+/g, " ");
  return replacedName
    .toLowerCase()
    .replace(/ /g, "_")
    .replace("_and", "")
    .replace("_the", "") as CountryKey;
}
