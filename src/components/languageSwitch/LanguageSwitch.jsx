import styles from "./LanguageSwitch.module.scss";

import { useState, useEffect } from "react";

// Localization
import "../../localization/i18n";
import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { t, i18n } = useTranslation();
  const [active, setIsActive] = useState(navigator.language);

  // Normalize language to match keys ("en" or "my")
  const getNormalizedLanguage = (lang) => {
    return lang && lang.toLowerCase().startsWith("en") ? "en" : "my";
  };

  const handleActiveLanguage = (item) => {
    setIsActive(item);
    i18n.changeLanguage(item);
  };

  // font Switch
  useEffect(() => {
    const currentLanguage = getNormalizedLanguage(navigator.language);
    if (i18n.language === "en") {
      document.documentElement.style.setProperty("--font", "Pally");
      document.documentElement.style.setProperty("--font-weight", "600");
      document.documentElement.style.setProperty(
        "--font-spacing-word-h1",
        "auto"
      );
      document.documentElement.style.setProperty(
        "--font-spacing-word-h2",
        "auto"
      );
      document.documentElement.style.setProperty(
        "--font-spacing-letter-medium",
        "-2.2px",
        "important"
      );
      document.documentElement.style.setProperty(
        "--font-spacing-letter-small",
        "0px",
        "important"
      );
      document.documentElement.style.setProperty(
        "--font-spacing-line-small",
        "105%"
      );
      document.documentElement.style.setProperty(
        "--font-spacing-line-medium",
        "135%"
      );
    } else {
      document.documentElement.style.setProperty("--font", "Padauk");
      document.documentElement.style.setProperty("--font-weight", "bold");
      document.documentElement.style.setProperty(
        "--font-spacing-word-h1",
        "-10px"
      );
      document.documentElement.style.setProperty(
        "--font-spacing-word-h2",
        "0px"
      );
      document.documentElement.style.setProperty(
        "--font-spacing-letter-medium",
        "-0.7rem",
        "important"
      );
      document.documentElement.style.setProperty(
        "--font-spacing-letter-small",
        "0rem",
        "important"
      );
      document.documentElement.style.setProperty(
        "--font-spacing-line-small",
        "148%"
      );
      document.documentElement.style.setProperty(
        "--font-spacing-line-medium",
        "158%"
      );
    }
  }, [i18n.language]);

  return (
    <button className={styles.switch}>
      {["en", "my"].map((item) => {
        return (
          <span
            key={item}
            className={`${styles[item]} ${
              item === active ? styles.active : ""
            } title`}
            onClick={() => {
              handleActiveLanguage(item);
            }}
          >
            {item === "en" ? "EN" : "မြန်မာ"}
          </span>
        );
      })}
    </button>
  );
}
