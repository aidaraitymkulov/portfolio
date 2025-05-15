export const dictionaries = {
  en: () => import("./locales/en.json").then((m) => m.default),
  ru: () => import("./locales/ru.json").then((m) => m.default),
};
