import styles from "./LanguageSwitch.module.scss";

import { useState } from "react";

// Localization
import "../../localization/i18n";
import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { t, i18n } = useTranslation();
  const [active, isActive] = useState("my");

  const handleActiveLanguage = (item) => {
    isActive((prev) => (prev === "my" ? "en" : "my"));
    i18n.changeLanguage(item);
  };

  return (
    <button className={styles.switch}>
      {["my", "en"].map((item) => {
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
