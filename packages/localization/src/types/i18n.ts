import { ResourceKey } from "i18next";
import type { JsonObject } from "type-fest";

export type NamespaceTranslation = boolean | ResourceKey | null | undefined

export type SupportedLocale = {
  code: string
  name: string
  translationFile: JsonObject
}

export type SupportedLocales = {
  [key: string]: {
    name: string
    translationLoader: () => JsonObject
    localeLoader: () => any
  }
}

export type I18nParams = {
  supportedLanguages: SupportedLocale[]
  namespaces: string[]
  defaultNamespace?: string
  fallbackLanguage?: string
  languageStorageKey?: string
  errorCallback?: any
}
