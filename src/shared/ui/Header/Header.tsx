import Link from "next/link";
import styles from "./Styles.module.scss";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Icon } from "../Icon";
import { getTranslations } from "next-intl/server";

export const Header = async () => {
  const t = await getTranslations("header");

  const navItems = [
    { href: "/", label: t("head") },
    { href: "/abot", label: t("about") },
    { href: "/expirience", label: t("experience") },
    { href: "/projects", label: t("projects") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className={styles.header} id="header">
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href="/">
              <Icon type="next" alt="logo" width={60} height={60} />
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={styles.link}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};
