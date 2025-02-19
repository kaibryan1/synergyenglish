import styles from "./LanguageSwitch.module.scss";

import { useState, useEffect } from "react";

// Localization
import "../../localization/i18n";
import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { t, i18n } = useTranslation();
  const [active, setIsActive] = useState("en");

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
      document.documentElement.setAttribute("data-language", "en");
    } else {
      document.documentElement.setAttribute("data-language", "my");
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
