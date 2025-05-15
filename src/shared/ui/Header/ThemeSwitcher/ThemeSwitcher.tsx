'use client'
import { useState } from "react";
import styles from "./Styles.module.scss";
import { Icon } from "../../Icon";

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={styles.switcher} onClick={handleToggle}>
      <div
        className={`${styles.toggle} ${isDark ? styles.dark : styles.light}`}
      >
        <Icon type={isDark ? "darktheme" : "lighttheme"} alt="Theme" />
      </div>
    </div>
  );
};
