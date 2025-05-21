import Link from "next/link";
import styles from "./Styles.module.scss";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Icon } from "../Icon";

export const Header = () => {
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
            
          </nav>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
