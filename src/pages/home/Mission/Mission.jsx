import styles from "./Mission.module.scss";

// Assets
import KidIconOrangeSVG from "/assets/Others/Kid - Illu Orange.svg";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// React
import { useEffect, useRef } from "react";

// Ainmations
import {
  setInitialState,
  textRevealAnimation,
  parallexAnimation,
} from "./MissionAnimation";

// Localization
import "../../../localization/i18n";
import { useTranslation } from "react-i18next";

export default function Mission() {
  // Localization
  const { t, i18n } = useTranslation();

  const shaderRef = useRef(null);
  const missionSectionRef = useRef(null);

  // First Section
  const firstSectionRef = useRef(null);
  const firstSectionTextRef = useRef([]);
  const kidEmoteRef = useRef(null);
  const squareRef = useRef(null);
  const squigglyRef = useRef(null);

  // Second Section
  const secondSectionTextRef = useRef([]);
  const secondSectionRef = useRef(null);
  const flowerRef = useRef(null);

  // Emote Refs
  const purpleEmoteRef = useRef(null);
  const purpleEmoteLeft = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      if (!shaderRef.current || !missionSectionRef.current) return;

      const purpleEmoteTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: missionSectionRef.current,
          start: "top top",
          end: "+=400%",
          scrub: 1.7,
        },
      });

      purpleEmoteTimeline
        .to(purpleEmoteRef.current, {
          rotation: 800,
          transformOrigin: "center center",
          duration: 2,
        })
        .to(
          purpleEmoteLeft.current,
          {
            rotation: -800,
            transformOrigin: "center center",
            duration: 2,
          },
          0
        );

      const parallexEmotesTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: missionSectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1.7,
        },
      });
      parallexEmotesTimeline
        .to(kidEmoteRef.current, {
          y: gsap.utils.random(-90, -70),
        })
        .to(squareRef.current, { x: -30, y: gsap.utils.random(110, 90) }, "<")
        .to(flowerRef.current, { x: 20, y: gsap.utils.random(50, 60) }, "<")
        .to(squigglyRef.current, { xPercent: 40, yPercent: -100 }, "<");

      //   Timeline, Animations
      const initialTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: missionSectionRef.current,
          start: "top top",
          end: "+=130%",
          scrub: 0.7,
          pin: true,
        },
      });
      initialTimeline
        .add(setInitialState(secondSectionTextRef.current))
        .add(
          textRevealAnimation(
            secondSectionRef.current,
            shaderRef.current,
            secondSectionTextRef.current
          ),
          "<"
        );
    });

    return () => context.revert();
  }, []);
  return (
    <section
      id="mission"
      ref={missionSectionRef}
      className={styles.section__mission}
    >
      <div className={styles.mission}>
        <div className={styles.wrapper}>
          {/* Sticky Star */}
          <svg
            className={styles.stickyStar}
            width="167"
            height="88"
            viewBox="0 0 167 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_274_289)">
              <g clipPath="url(#clip1_274_289)">
                <path
                  ref={purpleEmoteRef}
                  d="M166.699 98.7995H120.499L153.179 131.48L131.599 153.05L98.9284 120.38V166.57H68.4284V120.37L35.7484 153.05L14.1784 131.48L46.8584 98.7995H0.648438V68.2895H46.8484L14.1884 35.6295L35.7584 14.0595L68.4284 46.7295V0.519531H98.9284V46.7295L131.599 14.0595L153.169 35.6295L120.509 68.2895H166.699V98.7995Z"
                  fill="#C383D9"
                />
                <path
                  ref={purpleEmoteLeft}
                  d="M121.92 82.5793L110.669 94.0149V110.188H94.7425L83.4814 121.614L72.2204 110.188H56.294V94.0149L45.043 82.5793L56.294 71.1436V54.9704H72.2204L83.4814 43.5449L94.7425 54.9704H110.669V71.1436L121.92 82.5793Z"
                  fill="#EFD9F9"
                />
                <mask
                  id="mask0_274_289"
                  maskUnits="userSpaceOnUse"
                  x="65"
                  y="67"
                  width="16"
                  height="21"
                >
                  <path
                    d="M72.7969 87.0294C77.0858 87.0294 80.5626 82.6486 80.5626 77.2447C80.5626 71.8407 77.0858 67.46 72.7969 67.46C68.508 67.46 65.0312 71.8407 65.0312 77.2447C65.0312 82.6486 68.508 87.0294 72.7969 87.0294Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_274_289)">
                  <path
                    d="M85.1514 66.9043H60.5273V87.523H85.1514V66.9043Z"
                    fill="white"
                  />
                  <path
                    d="M69.7985 69.8848H69.7985C67.4633 69.8848 65.5703 71.7778 65.5703 74.113V76.3731C65.5703 78.7083 67.4633 80.6014 69.7985 80.6014H69.7985C72.1337 80.6014 74.0268 78.7083 74.0268 76.3731V74.113C74.0268 71.7778 72.1337 69.8848 69.7985 69.8848Z"
                    fill="black"
                  />
                </g>
                <mask
                  id="mask1_274_289"
                  maskUnits="userSpaceOnUse"
                  x="86"
                  y="67"
                  width="17"
                  height="21"
                >
                  <path
                    d="M94.3243 87.0294C98.6131 87.0294 102.09 82.6486 102.09 77.2447C102.09 71.8407 98.6131 67.46 94.3243 67.46C90.0354 67.46 86.5586 71.8407 86.5586 77.2447C86.5586 82.6486 90.0354 87.0294 94.3243 87.0294Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_274_289)">
                  <path
                    d="M106.679 66.9043H82.0547V87.523H106.679V66.9043Z"
                    fill="white"
                  />
                  <path
                    d="M87.0977 74.113C87.0977 71.7778 88.9908 69.8848 91.3259 69.8848C93.6611 69.8848 95.5542 71.7778 95.5542 74.113V76.3732C95.5542 78.7083 93.6611 80.6014 91.3259 80.6014C88.9908 80.6014 87.0977 78.7083 87.0977 76.3731V74.113Z"
                    fill="black"
                  />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_274_289">
                <rect width="167" height="88" fill="white" />
              </clipPath>
              <clipPath id="clip1_274_289">
                <rect width="167" height="167" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            ref={squigglyRef}
            className={`${styles.asset} ${styles.squigglyX}`}
            width="149"
            height="44"
            viewBox="0 0 149 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.50041 31.7241C17.4117 54.5402 38.9553 12.7926 54.5762 5.90675C68.8311 -0.376962 62.2387 34.5925 79.8372 23.3951C84.0316 20.7264 88.695 15.1913 93.8233 16.9446C97.79 18.3008 100.931 28.1518 106.178 26.6189C121.008 22.2853 130.856 -0.569391 143.219 13.8092"
              stroke="#FF6835"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
          {/* Tilted Square */}
          <div
            ref={squareRef}
            className={`${styles.asset} ${styles.tiltedSquare}`}
          ></div>
          {/* Flower */}
          <svg
            ref={flowerRef}
            width="167"
            height="167"
            className={`${styles.asset} ${styles.flower}`}
            viewBox="0 0 167 167"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M105.324 81.1476L99.7811 88.2203L100.857 97.138L91.9397 98.222L86.3969 105.295L79.3165 99.7518L62.2422 86.3599L67.785 79.2872L66.7087 70.3695L75.6265 69.2855L81.1769 62.2129L88.2496 67.7557L98.2513 75.5971L105.324 81.1476Z"
              fill="#BCBEC0"
            />
            <path
              d="M149.62 60.3225L118.708 64.0664L137.92 39.5581C143.147 32.8929 141.979 23.2448 135.313 18.0172C128.648 12.7896 119 13.9581 113.773 20.6233L94.5611 45.1317L90.8172 14.2195C89.7948 5.80917 82.1532 -0.187226 73.7429 0.835235C65.3325 1.8577 59.3362 9.49926 60.3586 17.9096L64.1025 48.8217L39.5942 29.6102C32.929 24.3826 23.2809 25.5511 18.0533 32.2164C12.8257 38.8816 13.9942 48.5296 20.6594 53.7572L45.1678 72.9688L14.2556 76.7126C5.84528 77.7351 -0.151093 85.3767 0.871368 93.787C1.89383 102.197 9.53535 108.194 17.9457 107.171L48.8578 103.427L29.6463 127.936C27.0325 131.272 26.0177 135.347 26.4867 139.244C26.9556 143.142 28.916 146.863 32.2524 149.477C38.9177 154.704 48.5657 153.536 53.7933 146.87L73.0048 122.362L76.7487 153.274C77.2561 157.479 79.424 161.085 82.5145 163.507C85.6049 165.928 89.6179 167.174 93.8231 166.666C102.233 165.644 108.23 158.002 107.207 149.592L103.463 118.68L127.972 137.891C131.308 140.505 135.383 141.52 139.28 141.051C143.178 140.582 146.899 138.622 149.513 135.285C154.74 128.62 153.572 118.972 146.906 113.744L122.398 94.5327L153.31 90.7888C157.515 90.2814 161.113 88.1135 163.543 85.023C165.964 81.9326 167.21 77.9196 166.702 73.7145C165.68 65.3041 158.038 59.3077 149.628 60.3302L149.62 60.3225ZM99.781 88.2134L100.865 97.1311L91.9473 98.2151L86.4044 105.288L79.3318 99.7449L70.4141 100.829L69.3301 91.9112L62.2575 86.3684L67.8003 79.2957L66.7163 70.378L75.634 69.294L81.1768 62.2214L88.2495 67.7642L97.1672 66.6802L98.2512 75.5979L105.324 81.1408L99.781 88.2134Z"
              fill="#FFC33F"
            />
            <path
              d="M105.324 81.1476L99.7811 88.2203L91.9397 98.222L86.3969 105.295L79.3165 99.7518L70.3989 100.828L69.3149 91.9104L62.2422 86.3599L67.785 79.2872L75.6265 69.2855L81.1769 62.2129L88.2496 67.7557L97.1673 66.6794L98.2513 75.5971L105.324 81.1476Z"
              fill="#BCBEC0"
            />
            <path
              d="M105.324 81.1479L99.7811 88.2206L100.857 97.1383L70.3989 100.828L69.3149 91.9106L62.2422 86.3602L67.785 79.2875L66.7087 70.3698L97.1673 66.6797L98.2513 75.5974L105.324 81.1479Z"
              fill="#BCBEC0"
            />
            <path
              d="M97.1676 66.6804L100.858 97.139L91.94 98.223L86.3972 105.296L79.3168 99.7528L70.3991 100.829L66.709 70.3705L75.6267 69.2865L81.1772 62.2139L88.2499 67.7567L97.1676 66.6804Z"
              fill="#BCBEC0"
            />
            <path
              d="M83.7862 113.032C99.9583 113.032 113.068 99.9222 113.068 83.7501C113.068 67.5779 99.9583 54.4678 83.7862 54.4678C67.614 54.4678 54.5039 67.5779 54.5039 83.7501C54.5039 99.9222 67.614 113.032 83.7862 113.032Z"
              fill="#FF6835"
            />
            <mask
              id="mask0_99_33"
              maskUnits="userSpaceOnUse"
              x="65"
              y="68"
              width="16"
              height="21"
            >
              <ellipse
                cx="73.1016"
                cy="78.4185"
                rx="7.76566"
                ry="9.78473"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_99_33)">
              <rect
                x="60.832"
                y="68.2676"
                width="24.6241"
                height="20.2418"
                fill="white"
              />
              <rect
                x="64.6455"
                y="71.6777"
                width="9.94004"
                height="10.7166"
                rx="4.97002"
                fill="black"
              />
            </g>
            <mask
              id="mask1_99_33"
              maskUnits="userSpaceOnUse"
              x="86"
              y="68"
              width="17"
              height="21"
            >
              <ellipse
                cx="94.4707"
                cy="78.4185"
                rx="7.76566"
                ry="9.78473"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1_99_33)">
              <rect
                x="82.2012"
                y="68.2666"
                width="24.6241"
                height="20.2418"
                fill="white"
              />
              <rect
                x="86.0146"
                y="71.6777"
                width="9.94004"
                height="10.7166"
                rx="4.97002"
                fill="black"
              />
            </g>
            <path
              d="M76.3633 94.7646C78.5233 97.8621 84.6401 102.199 91.827 94.7646"
              stroke="black"
              strokeWidth="3.07507"
              strokeLinecap="round"
            />
          </svg>
          {/* First Section */}
          <div
            ref={firstSectionRef}
            className={`section section--medium--padding flex-center ${styles.firstSection}`}
          >
            {/* Kid and Square */}
            <img
              ref={kidEmoteRef}
              src={KidIconOrangeSVG}
              className={`${styles.asset} ${styles.kidIconOrange}`}
              alt="Happy Kid Smiling Image"
            />
            <div className={styles.textWrapper}>
              <p
                ref={(el) => (firstSectionTextRef.current[0] = el)}
                className="title"
              >
                {t("home.mission.sectionTitle")}
              </p>
              <h2 ref={(el) => (firstSectionTextRef.current[1] = el)}>
                {t("home.mission.firstTitle")}
              </h2>
              <p
                ref={(el) => (firstSectionTextRef.current[2] = el)}
                className="body_big"
              >
                {t("home.mission.firstSubtitle")}
              </p>
            </div>
          </div>
          <div className={`${styles.second} ${styles.textWrapper}`}>
            <p
              ref={(el) => (secondSectionTextRef.current[0] = el)}
              className="title"
            >
              {t("home.mission.sectionTitle")}
            </p>
            <h2 ref={(el) => (secondSectionTextRef.current[1] = el)}>
              {t("home.mission.secondTitle")}
            </h2>
            <p
              ref={(el) => (secondSectionTextRef.current[2] = el)}
              className="body_big"
            >
              {t("home.mission.secondSubtitle")}
            </p>
          </div>
          {/* Shader */}
          <div className="section__shader__wrapper">
            <div ref={shaderRef} className={styles.section__shader}></div>
          </div>
          {/* <div ref={shaderRef} className={styles.section__shader}></div> */}
          {/* Second Section */}
          <div
            ref={secondSectionRef}
            className={`section section--medium--padding flex-center ${styles.secondSection}`}
          ></div>
        </div>
      </div>
    </section>
  );
}
