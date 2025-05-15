import { dictionaries } from "./dictionaries";

export const getDictionary = async (locale: "en" | "ru") => {
  return dictionaries[locale]();
};
