import en from './en.json';
import uk from './uk.json';
import ru from './ru.json';
import de from './de.json';
import es from './es.json';
import fr from './fr.json';
import pl from './pl.json';
import { appStore } from '@mobx/appStore';
import { Languages } from '@types/language';

export const languages = {
  en,
  ru,
  uk,
  de,
  es,
  fr,
  pl,
};

export const translate = (key: keyof typeof en, lang?: Languages) => {
  return languages[lang ?? appStore.language][key] || `[missing [${key}] translition]`;
};
