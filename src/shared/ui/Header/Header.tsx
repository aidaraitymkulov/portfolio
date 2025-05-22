import Link from "next/link";
import styles from "./Styles.module.scss";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Icon } from "../Icon";
import { getTranslations } from "next-intl/server";

export const Header = async() => {
  const t = await getTranslations("header");

  const navItems = [
    { href: "/", label: t("head") }, 
    { href: "/about", label: t("about") }, 
    { href: "/experience", label: t("experience") }, 
    { href: "/projects", label: t("projects") }, 
    { href: "/contact", label: t("contact") }, 
  ];

  return (
    <header className={styles.header} id="header">
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href="/">
              <Icon type="next" alt="logo" width={30} height={30} />
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li>
                <Link href={"/"} className={styles.link}></Link>
                <Link href={"/"} className={styles.link}></Link>
                <Link href={"/"} className={styles.link}></Link>
                <Link href={"/"} className={styles.link}></Link>
                <Link href={"/"} className={styles.link}></Link>
              </li>
            </ul>
          </nav>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
