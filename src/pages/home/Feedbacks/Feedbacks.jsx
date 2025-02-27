import styles from "./Feedback.module.scss";

// Gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Components
import FeedbackCard from "./FeedbackCard";
import Button from "../../../components/button/Button";

// Data
import { FEEDBACKS } from "../../../data/FEEDBACKS";
import { useRef } from "react";
import { useEffect } from "react";

// Localization
import "../../../localization/i18n";
import { useTranslation } from "react-i18next";

export default function Feedbacks() {
  // Localization
  const { t, i18n } = useTranslation();

  const feedbackRowRefs = useRef([]);
  const feedbackSectionRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!feedbackSectionRef.current || !feedbackRowRefs.current.length === 0)
        return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: feedbackSectionRef.current,
          start: "top top+=400",
          end: "+=200%",
          scrub: 0.5,
          ease: "linear",
        },
      });

      // Card Animation
      tl.to(
        feedbackRowRefs.current,
        {
          xPercent: 6,
          stagger: 0.1,
        },
        0
      );
    }, [feedbackRowRefs, feedbackSectionRef]);

    return () => context.revert();
  }, []);

  return (
    <section
      id="feedbacks"
      ref={feedbackSectionRef}
      className={`section--brand ${styles["section--feedback"]}`}
    >
      <div className={`container ${styles.header}`}>
        <div className={styles.textWrapper}>
          <p className="title">
            {t("home.feedbacks.sectionTitle") || "Feedbacks"}
          </p>
          <h3>
            {t("home.feedbacks.title") || "View our Synergy parents’ feedbacks"}
          </h3>
          <div className={styles.buttonWrapper}>
            <Button>{t("home.feedbacks.button") || "Join us"}</Button>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles.cardsWrapper}>
          {FEEDBACKS.map((row, index) => (
            <div
              ref={(el) => (feedbackRowRefs.current[index] = el)}
              key={index}
              className={` ${styles.row} ${styles[`row${index}`]}`}
            >
              {row.map((card) => {
                return <FeedbackCard key={card.id} data={card} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
