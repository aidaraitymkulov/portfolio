"use client"; 
import { useState, useEffect } from "react";
import styles from "./Styles.module.scss";
import { Icon } from "../../Icon";

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const handleToggle = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  return (
    <div className={styles.switcher} onClick={handleToggle}>
      <div
        className={`${styles.toggle} ${isDark ? styles.dark : styles.light}`}
      >
        <Icon
          type={isDark ? "darktheme" : "lighttheme"}
          alt="Theme"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};
