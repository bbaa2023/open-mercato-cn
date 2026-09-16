/**
 * The set of languages the platform ships dictionaries for.
 *
 * `Locale` is derived from `LocaleRegistry` rather than written as a closed
 * union so that a downstream application can serve a language the platform does
 * not ship, without patching or forking `@open-mercato/shared`.
 */
export interface LocaleRegistry {
  en: true
  pl: true
  es: true
  de: true
  ko: true
  'zh-cn': true
}

export type Locale = keyof LocaleRegistry & string

// NOTE: `scripts/dev.mjs` reads the next two declarations by regex (it parses
// this file as text to build the dev splash screen before the app compiles).
// Keep them as literal `export const <name>: <Type> = <literal>` statements.
export const locales: Locale[] = ['en', 'pl', 'es', 'de', 'ko', 'zh-cn']
export const defaultLocale: Locale = 'zh-cn'
