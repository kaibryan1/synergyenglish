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

export default function Feedbacks() {
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

      feedbackRowRefs.current.forEach((item, index) => {
        tl.to(
          item,
          {
            xPercent: gsap.utils.random(4, 6) + index * 0.1,
          },
          0
        );
      });
    }, [feedbackRowRefs, feedbackSectionRef]);

    return () => context.revert();
  }, []);

  return (
    <section
      id="feedbacks"
      ref={feedbackSectionRef}
      className={`section--blue ${styles["section--feedback"]}`}
    >
      <div className="container">
        <div className={styles.textWrapper}>
          <p className="title">Feedbacks</p>
          <h3>View our Synergy parents’ feedbacks</h3>
          <Button>Join us</Button>
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
