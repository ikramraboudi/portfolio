export type Language = 'fr' | 'en';

export type Localized<T = string> = {
  fr: T;
  en: T;
};
