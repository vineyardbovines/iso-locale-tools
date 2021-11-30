import i18next, { BackendModule, LanguageDetectorAsyncModule, ReadCallback, TFunction } from "i18next";
import { initReactI18next } from "react-i18next";
import { getDateFnsLocale, getDateFormatPatternForLocale, DateFnsLocale } from "@locale-tools/datetime";
import { IETF } from "@locale-tools/languages";
import * as Localization from 'expo-localization'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format as dateTimeFormat } from 'date-fns-tz'
import type { JsonObject } from "type-fest";
import { SupportedLocales, NamespaceTranslation, SupportedLocale, I18nParams } from '../types/i18n'

function buildLocales(locales: SupportedLocale[], fallbackLocale?: DateFnsLocale): SupportedLocales {
  const obj = {}

  locales.forEach(locale => {
    const dateFnsLocale = getDateFnsLocale(locale.code as IETF, { fallbackLocale: fallbackLocale ?? "en-US" })

    /// @ts-ignore
    return obj[locale.code] = {
      name: locale.name,
      translationLoader: (): JsonObject => locale.translationFile,
      localeLoader: (): Promise<unknown> => dateFnsLocale
    }
  })

  return obj
}

function getFallbackLanguage(supportedLanguages: SupportedLocales, userLocale: string, fallbackLanguage?: string): string {
  const supportedLangs: string[] = Object.keys(supportedLanguages)

  if (supportedLangs.includes(userLocale)) {
    return userLocale
  } else if (supportedLangs.includes(Localization.locale)) {
    return Localization.locale
  } else {
    return fallbackLanguage ?? "en-US"
  }
}

export function buildI18n({ supportedLanguages, namespaces, defaultNamespace, fallbackLanguage, languageStorageKey, errorCallback }: I18nParams): Promise<TFunction> {
  const isRN = navigator?.product == "ReactNative"

  const userLocale: string = Localization.region ? `${Localization.locale}-${Localization.region}` : Localization.locale

  const supportedLocales: SupportedLocales = buildLocales(supportedLanguages)

  const languageKey: string = languageStorageKey ?? "language"

  const config = {
    fallback: getFallbackLanguage(supportedLocales, userLocale, fallbackLanguage),
    namespaces,
    defaultNamespace: defaultNamespace ?? "common"
  }

  const translationLoader: BackendModule = {
    type: "backend",
    init: (): void => {
      // do nothing
    },
    read: (
      language: string,
      namespace: string,
      callback: ReadCallback
    ): void => {
      try {
        const lang = supportedLocales[language] ?? config.fallback
        const namespaceTranslation = lang.translationLoader()

        return callback(null, namespaceTranslation[namespace] as NamespaceTranslation)
      } catch (err: unknown) {
        errorCallback && errorCallback(err)

        return callback(err as Error, (supportedLocales[config.fallback].translationLoader()[namespace]) as NamespaceTranslation)
      }
    },
    create: (): void => {
      // do nothing
    }
  }

  const languageDetector: LanguageDetectorAsyncModule = {
    type: "languageDetector",
    async: true,
    detect: async (callback: (e: string) => void): Promise<void> => {
      try {
        const lang = isRN ? await AsyncStorage.getItem(languageKey) : localStorage.getItem(languageKey)

        if (lang) return callback(lang)

        return callback(supportedLocales[userLocale] ? userLocale : config.fallback)
      } catch (err: unknown) {
        errorCallback && errorCallback(err)

        return callback(config.fallback)
      }
    },
    init: (): void => {
      // do nothing
    },
    cacheUserLanguage: async (lang: string): Promise<void> => {
      try {
        if (isRN) {
          await AsyncStorage.setItem(languageKey, lang)
        } else {
          localStorage.setItem(languageKey, lang)
        }
      } catch (err: unknown) {
        errorCallback && errorCallback(err)

        return
      }
    }
  }

  return i18next
    .use(languageDetector)
    .use(translationLoader)
    .use(initReactI18next)
    .init({
      fallbackLng: config.fallback,
      ns: config.namespaces,
      defaultNS: config.defaultNamespace,
      interpolation: {
        escapeValue: false,
        format: (
          value: string,
          format: string | undefined,
          lang: string | undefined
        ): string => {
          if (Boolean(value) === false || !format) {
            return ""
          }

          const [type] = format.split("|")

          const supportedLang = lang ? supportedLocales[lang] ?? config.fallback : config.fallback

          const mask: string = getDateFormatPatternForLocale(supportedLang)

          if (type === "date") {
            return dateTimeFormat(value, mask, { timeZone: Localization.timezone, locale: supportedLang })
          }

          return ""
        }
      }
    })
}
