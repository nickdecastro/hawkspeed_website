import type { Language } from "./locales";
import en, { type Messages } from "./messages/en";
import fr from "./messages/fr";
import de from "./messages/de";
import es from "./messages/es";
import pt from "./messages/pt";
import it from "./messages/it";

export type { Messages };

export const messages: Record<Language, Messages> = { en, fr, de, es, pt, it };
