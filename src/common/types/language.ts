export enum Languages {
  ENGLISH = 'en',
  UKRAINIAN = 'uk',
  RUSSIAN = 'ru',
  GERMAN = 'de',
  SPANISH = 'es',
  FRENCH = 'fr',
  POLISH = 'pl',
}

export type TxKeyPath =
  | 'search'
  | 'menu'
  | 'dark'
  | 'light'
  | 'weather'
  | 'close'
  | 'three_days'
  | 'city'
  | 'search_empty'
  | 'not_found_city'
  | 'language'
  | 'theme'
  | 'themes'
  | 'en'
  | 'uk'
  | 'ru';
