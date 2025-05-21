"use client";
import styles from "./Styles.module.scss";
import { Link, usePathname } from "@/lib/i18n/routing";

export function LanguageSwitcher() {
  const pathname = usePathname();

  const languages = [
    { locale: "en", label: "en" },
    { locale: "ru", label: "ru" },
  ];

  return (
    <div className={styles.languageSwitcher}>
      {languages.map(({ locale, label }) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          className={styles.languageLink}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
