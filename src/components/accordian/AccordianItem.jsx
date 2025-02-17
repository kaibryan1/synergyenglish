import { motion } from "motion/react";

import styles from "./AccordianItem.module.scss";

import { useState, useEffect, useRef } from "react";

// localization
import "../../localization/i18n";
import { useTranslation } from "react-i18next";

export default function AccordianItem({ accordian, isOpen, onToggle }) {
  // Localization
  const { t, i18n } = useTranslation();

  const bodyTextRef = useRef(null);
  const [heightOffset, setHeightOffset] = useState(0);

  useEffect(() => {
    if (bodyTextRef.current) {
      setHeightOffset(bodyTextRef.current.scrollHeight);
    }
  }, [isOpen]); // Recalculate height when `isOpen` changes

  return (
    <motion.button
      initial={{ backgroundColor: "var(--color-light)" }}
      animate={{
        backgroundColor: isOpen ? "var(--color-light)" : "var(--color-white)",
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      whileHover={{ backgroundColor: "var(--color-light)" }}
      className={styles.accordian__item}
      onClick={onToggle}
    >
      <div className={styles.accordian__header}>
        <h4 className="title">
          {t(`home.faq.${accordian.key}.title`) || accordian.title}
        </h4>
        <div className={styles.accordian__navBtn}>
          {!isOpen ? (
            <span className={styles.accordian__navBtn__open}>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_86_102)">
                  <path
                    d="M8 3.83335L8 13.1667"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.3335 8.49998L12.6668 8.49998"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_86_102">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          ) : (
            <span className={styles.accordian__navBtn__minus}>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_85_130)">
                  <path
                    d="M3.3335 8.5H12.6668"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_85_130">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          )}
        </div>
      </div>
      <div className={styles.accordian__body}>
        <motion.p
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{
            marginTop: isOpen ? "20px" : 0,
            maxHeight: isOpen ? heightOffset : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          ref={bodyTextRef}
        >
          {t(`home.faq.${accordian.key}.body`) || accordian.body}
        </motion.p>
      </div>
    </motion.button>
  );
}
