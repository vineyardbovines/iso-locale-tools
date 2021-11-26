import { Locale } from "date-fns";
import {
  af,
  arDZ,
  arMA,
  arSA,
  arTN,
  ar,
  az,
  be,
  bg,
  bn,
  bs,
  ca,
  cs,
  cy,
  da,
  deAT,
  de,
  el,
  enAU,
  enCA,
  enGB,
  enIN,
  enNZ,
  enUS,
  enZA,
  eo,
  es,
  et,
  eu,
  faIR,
  fi,
  fil,
  frCA,
  frCH,
  fr,
  gd,
  gl,
  gu,
  he,
  hi,
  hr,
  ht,
  hu,
  hy,
  id,
  is,
  it,
  jaHira,
  ja,
  ka,
  kk,
  kn,
  ko,
  lb,
  lt,
  lv,
  mk,
  mn,
  ms,
  mt,
  nb,
  nlBE,
  nl,
  nn,
  pl,
  pt,
  ptBR,
  ro,
  ru,
  sk,
  sl,
  sq,
  srLatn,
  sr,
  sv,
  ta,
  te,
  th,
  tr,
  ug,
  uk,
  uz,
  vi,
  zhCN,
  zhTW
} from "date-fns/locale";
import { IETF } from "@locale-tools/languages";
import { DateFnsLocale } from "../types/dateFnsLocale";

const dateFnsLocales: { [key in DateFnsLocale]: Locale } = {
  af: af,
  "ar-DZ": arDZ,
  "ar-MA": arMA,
  "ar-SA": arSA,
  "ar-TN": arTN,
  ar: ar,
  az: az,
  be: be,
  bg: bg,
  bn: bn,
  bs: bs,
  ca: ca,
  cs: cs,
  cy: cy,
  da: da,
  "de-AT": deAT,
  de: de,
  el: el,
  "en-AU": enAU,
  "en-CA": enCA,
  "en-GB": enGB,
  "en-IN": enIN,
  "en-NZ": enNZ,
  "en-US": enUS,
  "en-ZA": enZA,
  eo: eo,
  es: es,
  et: et,
  eu: eu,
  "fa-IR": faIR,
  fi: fi,
  fil: fil,
  "fr-CA": frCA,
  "fr-CH": frCH,
  fr: fr,
  gd: gd,
  gl: gl,
  gu: gu,
  he: he,
  hi: hi,
  hr: hr,
  ht: ht,
  hu: hu,
  hy: hy,
  id: id,
  is: is,
  it: it,
  "ja-Hira": jaHira,
  ja: ja,
  ka: ka,
  kk: kk,
  kn: kn,
  ko: ko,
  lb: lb,
  lt: lt,
  lv: lv,
  mk: mk,
  mn: mn,
  ms: ms,
  mt: mt,
  nb: nb,
  "nl-BE": nlBE,
  nl: nl,
  nn: nn,
  pl: pl,
  pt: pt,
  "pt-BR": ptBR,
  ro: ro,
  ru: ru,
  sk: sk,
  sl: sl,
  sq: sq,
  "sr-Latn": srLatn,
  sr: sr,
  sv: sv,
  ta: ta,
  te: te,
  th: th,
  tr: tr,
  ug: ug,
  uk: uk,
  uz: uz,
  vi: vi,
  "zh-CN": zhCN,
  "zh-TW": zhTW
};

/**
 * getDateFnsLocale - gets a date-fns locale object for a given IETF locale code
 *
 * @param locale - IETF locale code
 * @param fallbackLocale - a date-fns locale object to fallback to if no locale object is found for the locale argument
 */
export function getDateFnsLocale(
  locale: IETF,
  { fallbackLocale }: { fallbackLocale?: DateFnsLocale }
): Locale {
  const foundLocale = dateFnsLocales[locale as DateFnsLocale];

  if (foundLocale) {
    return foundLocale;
  }

  const genericLocale = locale.split("-")[0];

  const foundGenericLocale = dateFnsLocales[genericLocale as DateFnsLocale];

  if (foundGenericLocale) {
    return foundGenericLocale;
  }

  if (fallbackLocale) {
    const validFallbackLocale = dateFnsLocales[fallbackLocale as DateFnsLocale];

    return validFallbackLocale ?? dateFnsLocales["en-US"];
  } else {
    return dateFnsLocales["en-US"];
  }
}
