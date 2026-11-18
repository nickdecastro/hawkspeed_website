// The language picker's rows, mirrored from the IVATG game
// (tankcommander/Assets/Scripts/Utility/Locales.cs) so the site offers exactly
// the countries and languages the game does.
//
// A row is a country-and-language pair, not a language: Canada and Switzerland
// appear more than once. Country names are written in the row's own language,
// so a visitor who can't read the current one can still find their flag and
// their own word for their country.

export const LANGUAGES = ["en", "fr", "de", "es", "pt", "it"] as const;
export type Language = (typeof LANGUAGES)[number];

export type Locale = {
  country: string; // ISO 3166 alpha-2; also picks the flag
  language: Language; // ISO 639-1; picks the dictionary
  countryName: string;
  languageName: string;
  id: string; // "fr-CA"
};

function row(country: string, language: Language, countryName: string, languageName: string): Locale {
  return { country, language, countryName, languageName, id: `${language}-${country}` };
}

const ALL: Locale[] = [
  row("US", "en", "United States", "English"),
  row("GB", "en", "United Kingdom", "English"),
  row("CA", "en", "Canada", "English"),
  row("AU", "en", "Australia", "English"),
  row("IE", "en", "Ireland", "English"),
  row("NZ", "en", "New Zealand", "English"),

  row("FR", "fr", "France", "Français"),
  row("CA", "fr", "Canada", "Français"),
  row("BE", "fr", "Belgique", "Français"),
  row("CH", "fr", "Suisse", "Français"),

  row("DE", "de", "Deutschland", "Deutsch"),
  row("AT", "de", "Österreich", "Deutsch"),
  row("CH", "de", "Schweiz", "Deutsch"),

  row("ES", "es", "España", "Español"),
  row("MX", "es", "México", "Español"),
  row("AR", "es", "Argentina", "Español"),
  row("CO", "es", "Colombia", "Español"),
  row("CL", "es", "Chile", "Español"),

  row("BR", "pt", "Brasil", "Português"),
  row("PT", "pt", "Portugal", "Português"),

  row("IT", "it", "Italia", "Italiano"),
  row("CH", "it", "Svizzera", "Italiano"),
];

export const DEFAULT_LOCALE = ALL[0];

// Alphabetical by the country's own name, as in the game, so a country's rows
// sit next to each other.
export const SORTED_LOCALES: Locale[] = [...ALL].sort((a, b) => {
  const c = a.countryName.localeCompare(b.countryName, "en", { sensitivity: "base" });
  return c !== 0 ? c : a.language.localeCompare(b.language);
});

// The country name, plus the language only when the country has more than one row.
export function localeLabel(l: Locale): string {
  const ambiguous = ALL.filter((x) => x.country === l.country).length > 1;
  return ambiguous ? `${l.countryName} — ${l.languageName}` : l.countryName;
}

export function findLocale(id: string | null | undefined): Locale | undefined {
  return id ? ALL.find((l) => l.id === id) : undefined;
}

// Best row for a first visit, from the browser's preferred languages. An exact
// "fr-CA" match wins; otherwise the language's first row.
export function guessLocale(preferred: readonly string[]): Locale {
  for (const tag of preferred) {
    const [lang, region] = tag.split("-");
    const exact = ALL.find(
      (l) => l.language === lang?.toLowerCase() && l.country === region?.toUpperCase()
    );
    if (exact) return exact;
    const byLang = ALL.find((l) => l.language === lang?.toLowerCase());
    if (byLang) return byLang;
  }
  return DEFAULT_LOCALE;
}
