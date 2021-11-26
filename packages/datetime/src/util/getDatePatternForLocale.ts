import { IETF } from "@iso-locale-tools/languages";

/**
 * getDateFormatPatternForLocale - gets a date format pattern (e.g. 'dd-MM-yyyy') for a given locale
 *
 * @param locale - IETF locale code
 */
export function getDateFormatPatternForLocale(locale: IETF): string {
  const parts = new Intl.DateTimeFormat(locale).formatToParts();

  return parts
    .map((part): string => {
      let char: string;

      switch (part.type) {
        case "era":
          char = "G";
          break;
        case "year":
          char = "y";
          break;
        case "month":
          char = "M";
          break;
        case "day":
          char = "d";
          break;
        default:
          char = part.value;
          break;
      }

      return Array.from({ length: part.value.length }, () => char).join("");
    })
    .join("");
}
