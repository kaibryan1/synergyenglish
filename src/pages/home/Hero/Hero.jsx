import { useRef, useEffect } from "react";

import styles from "./Hero.module.scss";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Assets
import kidPurple from "/assets/Hero/Kid Illu Purple.svg";
import kidCircle from "/assets/Hero/Kid Circle.svg";

// Components
import Button from "../../../components/button/Button";
import HeroTitle from "./HeroTitle";

// Animations
import { handleMouseMovement, emoteAnimation } from "./HeroAnimations";

// Localization
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const leftRetinaRef = useRef([]);
  const rightRetinaRef = useRef([]);
  const svgRef = useRef([]);

  // Language detact effect
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Float Animation
  const emotes = useRef([]);

  useEffect(() => {
    // Animation on mouse move
    const onMouseMove = (event) => {
      handleMouseMovement(event, svgRef, leftRetinaRef, rightRetinaRef);
    };
    document.addEventListener("mousemove", onMouseMove);

    const context = gsap.context(() => {
      const floatTimeline = gsap.timeline();
      floatTimeline.add(emoteAnimation(svgRef.current));
    }, svgRef);

    return () => {
      context.revert();
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section style={{ overflow: "visible" }} id="hero">
      <div
        style={{ overflow: "visible" }}
        className={`section section--medium--padding ${styles.section__hero}`}
      >
        <div className="container">
          <div className={styles.hero}>
            {/* Orange Girl */}
            <img
              className={styles.kidImage}
              src={kidPurple}
              alt="happy and smiling young girl picture"
              // ref={(el) => (svgRef.current[6] = el)}
            />
            {/* Kid Circle */}
            <img
              className={styles.kidCircle}
              src={kidCircle}
              alt="kid smiling picture"
            />
            {/* Moon */}
            <svg
              className={styles.emote}
              ref={(el) => (svgRef.current[0] = el)}
              width="230"
              height="230"
              viewBox="0 0 230 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Moon-initial">
                <g id="moon">
                  <circle
                    id="Ellipse 38"
                    cx="114.907"
                    cy="114.907"
                    r="114.907"
                    fill="#FF6835"
                  />
                  <g id="Eyes">
                    <g id="Left Eye" clipPath="url(#clip0_37_126)">
                      <g id="Mask group">
                        <mask
                          id="mask0_37_126"
                          maskUnits="userSpaceOnUse"
                          x="35"
                          y="56"
                          width="51"
                          height="64"
                        >
                          <g id="Group">
                            <path
                              id="Vector"
                              d="M60.3639 119.23C74.0559 119.23 85.1555 105.171 85.1555 87.8275C85.1555 70.4843 74.0559 56.4248 60.3639 56.4248C46.6718 56.4248 35.5723 70.4843 35.5723 87.8275C35.5723 105.171 46.6718 119.23 60.3639 119.23Z"
                              fill="white"
                            />
                          </g>
                        </mask>
                        <g mask="url(#mask0_37_126)">
                          <g id="Group_2">
                            <path
                              id="Vector_2"
                              d="M99.6702 55.6089H21.0586V119.962H99.6702V55.6089Z"
                              fill="white"
                            />
                            {/* Left Retina */}
                            <path
                              ref={(el) => (leftRetinaRef.current[0] = el)}
                              id="Vector_3"
                              d="M76.2312 86.4555C76.2312 77.6926 69.1275 70.5889 60.3646 70.5889C51.6018 70.5889 44.498 77.6926 44.498 86.4555V89.1157C44.498 97.8785 51.6018 104.982 60.3646 104.982C69.1275 104.982 76.2312 97.8785 76.2312 89.1157V86.4555Z"
                              fill="black"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                    <g id="Right Eye" clipPath="url(#clip1_37_126)">
                      <g id="Mask group_2">
                        <mask
                          id="mask1_37_126"
                          maskUnits="userSpaceOnUse"
                          x="103"
                          y="56"
                          width="51"
                          height="64"
                        >
                          <g id="Group_3">
                            <path
                              id="Vector_4"
                              d="M128.364 119.23C142.056 119.23 153.155 105.171 153.155 87.8275C153.155 70.4843 142.056 56.4248 128.364 56.4248C114.672 56.4248 103.572 70.4843 103.572 87.8275C103.572 105.171 114.672 119.23 128.364 119.23Z"
                              fill="white"
                            />
                          </g>
                        </mask>
                        <g mask="url(#mask1_37_126)">
                          <g id="Group_4">
                            <path
                              id="Vector_5"
                              d="M167.67 55.6089H89.0586V119.962H167.67V55.6089Z"
                              fill="white"
                            />
                            {/* Rght Retina */}
                            <path
                              ref={(el) => (rightRetinaRef.current[0] = el)}
                              id="Vector_6"
                              d="M144.231 86.4555C144.231 77.6926 137.128 70.5889 128.365 70.5889C119.602 70.5889 112.498 77.6926 112.498 86.4555V89.1157C112.498 97.8785 119.602 104.982 128.365 104.982C137.128 104.982 144.231 97.8785 144.231 89.1157V86.4555Z"
                              fill="black"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                    <path
                      id="Mouth"
                      d="M72.4316 140.288C79.3274 150.228 98.8551 164.146 121.799 140.288"
                      stroke="black"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_37_126">
                  <rect
                    width="51"
                    height="64"
                    fill="white"
                    transform="translate(35 56)"
                  />
                </clipPath>
                <clipPath id="clip1_37_126">
                  <rect
                    width="51"
                    height="64"
                    fill="white"
                    transform="translate(103 56)"
                  />
                </clipPath>
              </defs>
            </svg>
            {/* Cloud */}
            <svg
              className={styles.emote}
              ref={(el) => (svgRef.current[1] = el)}
              id="cloud"
              width="312"
              height="196"
              viewBox="0 0 312 196"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Cloud" clipPath="url(#clip0_42_156)">
                <path
                  id="Vector"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M171.042 44.4794C179.008 40.3818 187.981 37.9311 197.527 37.5924C229.041 36.4743 255.957 58.7601 261.537 88.8593C288.43 89.1767 310.593 110.587 311.557 137.749C312.549 165.726 290.674 189.211 262.696 190.203C251.54 190.599 241.098 187.359 232.512 181.545C224.359 187.953 214.173 191.925 203.017 192.32C188.168 192.847 174.585 186.932 164.958 177.082C156.054 187.591 142.923 194.454 128.073 194.981C108.355 195.68 90.8689 185.021 81.9153 168.872C73.7739 175.249 63.6131 179.2 52.4874 179.595C24.5099 180.588 1.02507 158.712 0.0324858 130.734C-0.960103 102.757 20.9155 79.2723 48.8929 78.2797C49.2853 78.2658 49.6768 78.2564 50.0674 78.2514C49.1566 74.3461 48.6082 70.2963 48.4607 66.1377C47.2302 31.4531 74.35 2.3382 109.035 1.10766C137.723 0.0898355 162.602 18.4678 171.042 44.4794Z"
                  fill="#6692FD"
                />
                <g id="Group 71">
                  <g id="Mask group">
                    <mask
                      id="mask0_42_156"
                      maskUnits="userSpaceOnUse"
                      x="110"
                      y="65"
                      width="39"
                      height="49"
                    >
                      <ellipse
                        id="mask"
                        cx="129.631"
                        cy="89.5203"
                        rx="19.2598"
                        ry="24.2674"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_42_156)">
                      <rect
                        id="background"
                        x="99.2012"
                        y="64.3574"
                        width="61.071"
                        height="50.1764"
                        fill="white"
                      />
                      {/* Left Retina */}
                      <rect
                        ref={(el) => (leftRetinaRef.current[1] = el)}
                        id="retina"
                        x="117.305"
                        y="76.231"
                        width="24.6526"
                        height="26.5786"
                        rx="12.3263"
                        fill="black"
                      />
                    </g>
                  </g>
                  <g id="Mask group_2">
                    <mask
                      id="mask1_42_156"
                      maskUnits="userSpaceOnUse"
                      x="163"
                      y="65"
                      width="39"
                      height="49"
                    >
                      <ellipse
                        id="mask_2"
                        cx="182.371"
                        cy="89.5203"
                        rx="19.2598"
                        ry="24.2674"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask1_42_156)">
                      <rect
                        id="background_2"
                        x="151.941"
                        y="64.3574"
                        width="61.071"
                        height="50.1764"
                        fill="white"
                      />
                      {/* Right Retina */}
                      <rect
                        ref={(el) => (rightRetinaRef.current[1] = el)}
                        id="retina_2"
                        x="170.045"
                        y="76.231"
                        width="24.6526"
                        height="26.5786"
                        rx="12.3263"
                        fill="black"
                      />
                    </g>
                  </g>
                  <path
                    id="Vector 33"
                    d="M134.672 129.803C140.029 137.485 155.199 148.24 173.024 129.803"
                    stroke="black"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_42_156">
                  <rect
                    width="312"
                    height="195"
                    fill="white"
                    transform="translate(0 0.407227)"
                  />
                </clipPath>
              </defs>
            </svg>
            {/* Secondary Squiggly 1st */}
            <svg
              className={`${styles.first} ${styles.squiggly}`}
              width="95"
              height="76"
              viewBox="0 0 95 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.04297 20.8998C6.12393 45.762 29.4176 17.1934 40.2965 17.1934C50.224 17.1934 37.391 45.596 50.5314 42.5489C53.6632 41.8227 57.8053 38.7406 60.3451 42.2962C62.3095 45.0465 61.6093 54.9994 65.0624 55.69C74.8246 57.6425 86.4418 41.2426 89.9546 58.8068"
                stroke="#6692FD"
                strokeWidth="6.552"
                strokeLinecap="round"
              />
            </svg>
            {/* Secondary Squiggly 2nd */}
            <svg
              className={`${styles.second} ${styles.squiggly}`}
              width="95"
              height="76"
              viewBox="0 0 95 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.04297 20.8998C6.12393 45.762 29.4176 17.1934 40.2965 17.1934C50.224 17.1934 37.391 45.596 50.5314 42.5489C53.6632 41.8227 57.8053 38.7406 60.3451 42.2962C62.3095 45.0465 61.6093 54.9994 65.0624 55.69C74.8246 57.6425 86.4418 41.2426 89.9546 58.8068"
                stroke="#C383D9"
                strokeWidth="6.552"
                strokeLinecap="round"
              />
            </svg>
            {/* dotted line */}
            {/* Line Arrow */}
            <svg
              className={styles.lineArrow}
              width="390"
              height="194"
              viewBox="0 0 390 194"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 1.60352C21.7801 34.3205 28.2026 99.7335 109.121 108.724C210.269 119.963 204.633 195.274 249.587 256.712C285.551 305.862 357.978 328.139 389.696 333.134"
                stroke="#D9E2F4"
                strokeWidth="4"
                strokeDasharray="11 11"
              />
            </svg>
            {/* Image end */}
            <div className={styles.hero__textWrapper}>
              <HeroTitle
                ref={svgRef.current}
                currentLanguage={currentLanguage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
