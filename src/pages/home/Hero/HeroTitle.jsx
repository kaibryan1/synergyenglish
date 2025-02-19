import styles from "./HeroTitle.module.scss";

// react

import React from "react";
import { forwardRef } from "react";

// Custom Component
import Button from "../../../components/button/Button";
// Custom Assets
import flowerIcon from "/assets/Hero/Icon_Flower.svg";
import starIcon from "/assets/Hero/Icon_Star.svg";
import sunIcon from "/assets/Hero/Icon_Sun.svg";

// Localization
import "../../../localization/i18n";
import { useTranslation } from "react-i18next";

function HeroTitle(props, ref) {
  const { currentLanguage } = props;
  // Localization
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.hero_text}>
      {currentLanguage === "en" ? (
        <h1 className={currentLanguage === "en" ? styles.en : styles.my}>
          <span>
            <img
              ref={(el) => (ref[2] = el)}
              className={styles.sunIcon}
              src={sunIcon}
            />
            A
          </span>{" "}
          place for your{" "}
          <span>
            <img
              ref={(el) => (ref[3] = el)}
              className={styles.starIcon}
              src={starIcon}
            />{" "}
            kids
          </span>{" "}
          to shine{" "}
          <span>
            bright
            <img
              ref={(el) => (ref[4] = el)}
              className={styles.flowerIcon}
              src={flowerIcon}
              alt=""
            />
          </span>
        </h1>
      ) : (
        <h1 className={currentLanguage === "en" ? styles.en : styles.my}>
          <span>
            <img
              ref={(el) => (ref[2] = el)}
              className={styles.sunIcon}
              src={sunIcon}
            />
            ကလေး
          </span>{" "}
          <span>တို့အတွက်</span>{" "}
          <span>
            <img
              ref={(el) => (ref[3] = el)}
              className={styles.starIcon}
              src={starIcon}
            />
            အထိ
          </span>{" "}
          ရောက်ဆုံး အင်္ဂလိပ်စာ သင်တန်း
          <span>
            များ
            <img
              ref={(el) => (ref[4] = el)}
              className={styles.flowerIcon}
              src={flowerIcon}
              alt=""
            />
          </span>
        </h1>
      )}
      {currentLanguage === "en" ? (
        <p className="body_big">
          Our joyful learning experiences help kids build confidence, fluency,
          and creativity in speaking English while enjoying learning English!
        </p>
      ) : (
        <p className="body_big">
          Synergy English က ဆရာ၊ ဆရာမတွေအနေနဲ့ သားသားမီးမီးတို အင်္ဂလိပ်စာ
          ကိုမကြောက်မရွံနဲ့ ထိထိရောက်ရောက် လေ့လာနိုင်ရန် အဓိကထား သင်ကြားပေးပါတယ်
        </p>
      )}
      <Button scrollTo="mission" type="brand">
        {t("home.button.learn")}
      </Button>
    </div>
  );
}

export default React.forwardRef(HeroTitle);
