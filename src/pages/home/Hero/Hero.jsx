import { useRef, useEffect, useContext } from "react";

import styles from "./Hero.module.scss";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Assets
import kidPurple from "/assets/Hero/Kid Illu Purple.svg";

// Components
import Button from "../../../components/button/Button";

// Animations
import { handleMouseMovement, emoteAnimation } from "./HeroAnimations";

export default function Hero() {
  const leftRetinaRef = useRef([]);
  const rightRetinaRef = useRef([]);
  const svgRef = useRef([]);

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
    <section id="hero">
      <div
        className={`section section--medium--padding ${styles.section__hero}`}
      >
        <div className="container">
          <div className={styles.hero}>
            <div className={styles.imagesWrapper}>
              <img
                className={styles.kidImage}
                src={kidPurple}
                alt="happy and smiling young girl picture"
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
            </div>
            <div className={styles.hero__textWrapper}>
              <h1 data-animation="text-reveal">
                {/* Join */}
                <span>
                  <span>Join&nbsp;</span>
                </span>
                <span>
                  <span>our&nbsp;</span>
                </span>
                {/* Join */}
                <div className={styles.content}>
                  <svg
                    className={`${styles.underline}`}
                    width="155"
                    height="54"
                    viewBox="0 0 155 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.41154 35.2488C21.3229 58.0649 42.8665 16.3173 58.4873 9.43141C72.7422 3.1477 66.1498 38.1172 83.7483 26.9198C87.9427 24.251 92.6061 18.716 97.7344 20.4693C101.701 21.8255 104.843 31.6764 110.089 30.1435C124.92 25.81 134.767 2.95527 147.13 17.3339"
                      stroke="#FF6835"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span data="zIndex">
                    <span>fun&nbsp;</span>
                  </span>
                </div>
                <span>
                  <span>and&nbsp;</span>
                </span>
                {/* enjoyable + flower icon */}
                <div className={styles.content}>
                  {/* Flower Icon */}
                  <svg
                    ref={(el) => (svgRef.current[2] = el)}
                    className={`${styles.heroIcon}  ${styles.flowerIcon}`}
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.5259 23.7594L28.9237 25.8038L29.2348 28.3815L26.6571 28.6949L25.0549 30.7393L23.0082 29.1371L18.0728 25.266L19.675 23.2216L19.3638 20.6439L21.9416 20.3305L23.546 18.2861L25.5904 19.8883L28.4815 22.155L30.5259 23.7594Z"
                      fill="#BCBEC0"
                    />
                    <path
                      d="M43.3302 17.7398L34.3948 18.822L39.9481 11.7377C41.4591 9.81107 41.1214 7.02222 39.1947 5.51113C37.2681 4.00005 34.4793 4.33782 32.9682 6.26446L27.4149 13.3488L26.3327 4.41337C26.0372 1.9823 23.8283 0.248992 21.3972 0.544543C18.9662 0.840094 17.2329 3.04895 17.5284 5.48002L18.6106 14.4154L11.5263 8.8622C9.59964 7.35111 6.81079 7.68888 5.2997 9.61552C3.78861 11.5422 4.12639 14.331 6.05303 15.8421L13.1374 21.3953L4.20194 22.4775C1.77087 22.7731 0.0375663 24.9819 0.333117 27.413C0.628668 29.8441 2.83751 31.5774 5.26859 31.2818L14.204 30.1996L8.65077 37.284C7.89522 38.2484 7.60188 39.4262 7.73744 40.5528C7.87299 41.6795 8.43965 42.755 9.40408 43.5105C11.3307 45.0216 14.1196 44.6839 15.6307 42.7572L21.1839 35.6729L22.2661 44.6083C22.4128 45.8238 23.0394 46.8661 23.9327 47.566C24.8261 48.266 25.986 48.626 27.2016 48.4794C29.6327 48.1838 31.366 45.975 31.0704 43.5439L29.9882 34.6085L37.0725 40.1617C38.037 40.9173 39.2147 41.2106 40.3414 41.075C41.468 40.9395 42.5436 40.3728 43.2991 39.4084C44.8102 37.4818 44.4724 34.6929 42.5458 33.1818L35.4615 27.6286L44.3969 26.5464C45.6124 26.3997 46.6524 25.773 47.3546 24.8797C48.0546 23.9864 48.4146 22.8264 48.2679 21.6109C47.9724 19.1798 45.7635 17.4465 43.3325 17.7421L43.3302 17.7398ZM28.9238 25.8019L29.2371 28.3797L26.6594 28.693L25.0572 30.7374L23.0128 29.1352L20.435 29.4485L20.1217 26.8708L18.0773 25.2686L19.6795 23.2242L19.3661 20.6465L21.9439 20.3331L23.5461 18.2887L25.5905 19.8909L28.1682 19.5776L28.4816 22.1553L30.526 23.7575L28.9238 25.8019Z"
                      fill="#FFC33F"
                    />
                    <path
                      d="M30.5259 23.7594L28.9237 25.8038L26.6571 28.6949L25.0549 30.7393L23.0082 29.1371L20.4305 29.4482L20.1172 26.8704L18.0728 25.266L19.675 23.2216L21.9416 20.3305L23.546 18.2861L25.5904 19.8883L28.1682 19.5772L28.4815 22.155L30.5259 23.7594Z"
                      fill="#BCBEC0"
                    />
                    <path
                      d="M30.5259 23.7593L28.9237 25.8037L29.2348 28.3815L20.4305 29.4481L20.1172 26.8704L18.0728 25.266L19.675 23.2215L19.3638 20.6438L28.1682 19.5771L28.4815 22.1549L30.5259 23.7593Z"
                      fill="#BCBEC0"
                    />
                    <path
                      d="M28.1686 19.5772L29.2352 28.3815L26.6575 28.6949L25.0553 30.7393L23.0087 29.1371L20.4309 29.4482L19.3643 20.6439L21.942 20.3305L23.5464 18.2861L25.5908 19.8883L28.1686 19.5772Z"
                      fill="#BCBEC0"
                    />
                    <path
                      d="M24.3002 32.9764C28.9749 32.9764 32.7645 29.1868 32.7645 24.5121C32.7645 19.8374 28.9749 16.0479 24.3002 16.0479C19.6255 16.0479 15.8359 19.8374 15.8359 24.5121C15.8359 29.1868 19.6255 32.9764 24.3002 32.9764Z"
                      fill="#FF6835"
                    />
                    <mask
                      id="mask0_49_397"
                      maskUnits="userSpaceOnUse"
                      x="18"
                      y="20"
                      width="6"
                      height="6"
                    >
                      <ellipse
                        cx="21.2115"
                        cy="22.97"
                        rx="2.24473"
                        ry="2.82836"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_49_397)">
                      <rect
                        x="17.665"
                        y="20.0352"
                        width="7.1178"
                        height="5.85107"
                        fill="white"
                      />
                      <rect
                        x="20.6284"
                        y="22.3545"
                        width="2.87325"
                        height="3.09772"
                        rx="1.43663"
                        fill="black"
                      />
                    </g>
                    <mask
                      id="mask1_49_397"
                      maskUnits="userSpaceOnUse"
                      x="25"
                      y="20"
                      width="5"
                      height="6"
                    >
                      <ellipse
                        cx="27.3883"
                        cy="22.97"
                        rx="2.24473"
                        ry="2.82836"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask1_49_397)">
                      <rect
                        x="23.8418"
                        y="20.0352"
                        width="7.1178"
                        height="5.85107"
                        fill="white"
                      />
                      <rect
                        x="26.8052"
                        y="22.3545"
                        width="2.87325"
                        height="3.09772"
                        rx="1.43663"
                        fill="black"
                      />
                    </g>
                    <path
                      d="M22.1543 27.6943C22.7787 28.5897 24.5468 29.8432 26.6242 27.6943"
                      stroke="black"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>
                    <span>enjoyable&nbsp;</span>
                  </span>
                </div>
                {/* online + star icon */}
                <div className={styles.content}>
                  {/* Star Icon */}
                  <svg
                    ref={(el) => (svgRef.current[3] = el)}
                    className={`${styles.heroIcon}  ${styles.starIcon}`}
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.2734 46.2644L46.7683 39.7695L11.413 4.41419L4.91807 10.9091L40.2734 46.2644Z"
                      fill="#C383D9"
                    />
                    <path
                      d="M4.91672 39.7707L11.4116 46.2656L46.767 10.9103L40.2721 4.41538L4.91672 39.7707Z"
                      fill="#C383D9"
                    />
                    <path
                      d="M50.842 29.9313V20.7461L0.842041 20.7461V29.9313L50.842 29.9313Z"
                      fill="#C383D9"
                    />
                    <path
                      d="M21.2494 50.3389H30.4346L30.4346 0.338867H21.2494L21.2494 50.3389Z"
                      fill="#C383D9"
                    />
                    <path
                      d="M37.4162 25.3404L34.0285 28.7838V33.6537H29.2329L25.8421 37.0939L22.4514 33.6537H17.6558V28.7838L14.2681 25.3404L17.6558 21.8971V17.0272H22.4514L25.8421 13.5869L29.2329 17.0272H34.0285V21.8971L37.4162 25.3404Z"
                      fill="#EFD9F9"
                    />
                    <mask
                      id="mask0_49_306"
                      maskUnits="userSpaceOnUse"
                      x="20"
                      y="20"
                      width="5"
                      height="7"
                    >
                      <ellipse
                        cx="22.6249"
                        cy="23.7324"
                        rx="2.33829"
                        ry="2.94625"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_49_306)">
                      <rect
                        x="18.9302"
                        y="20.6182"
                        width="7.41449"
                        height="6.20844"
                        fill="white"
                      />
                      <rect
                        x="21.3516"
                        y="22.1191"
                        width="2.5463"
                        height="3.22685"
                        rx="1.27315"
                        fill="black"
                      />
                    </g>
                    <mask
                      id="mask1_49_306"
                      maskUnits="userSpaceOnUse"
                      x="26"
                      y="20"
                      width="6"
                      height="7"
                    >
                      <ellipse
                        cx="29.1064"
                        cy="23.7324"
                        rx="2.33829"
                        ry="2.94625"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask1_49_306)">
                      <rect
                        x="25.4119"
                        y="20.6182"
                        width="7.41449"
                        height="6.20844"
                        fill="white"
                      />
                      <path
                        d="M27.833 23.3923C27.833 22.6891 28.403 22.1191 29.1062 22.1191C29.8093 22.1191 30.3793 22.6891 30.3793 23.3923V24.0728C30.3793 24.776 29.8093 25.346 29.1062 25.346C28.403 25.346 27.833 24.776 27.833 24.0728V23.3923Z"
                        fill="black"
                      />
                    </g>
                    <path
                      d="M24.0698 28.6543C24.7202 29.587 26.562 30.8927 28.7261 28.6543"
                      stroke="black"
                      strokeWidth="0.88"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>
                    <span>online&nbsp;</span>
                  </span>
                </div>
                <span>
                  <span>English&nbsp;</span>
                </span>
                <span>
                  <span>Courses&nbsp;</span>
                </span>
                <span>
                  <span>for&nbsp;</span>
                </span>
                {/* kids + pastle icon */}
                <div className={styles.content}>
                  {/* Pastle Icon */}
                  <svg
                    ref={(el) => (svgRef.current[4] = el)}
                    className={`${styles.heroIcon} ${styles.pastleIcon}`}
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.4534 42.2044L42.4543 42.2035C44.2327 40.4299 44.2327 37.5544 42.4543 35.7809L13.8345 7.23823C12.0562 5.46466 9.17288 5.46466 7.39451 7.23823L7.39363 7.23911C5.61527 9.01268 5.61527 11.8882 7.39363 13.6618L36.0134 42.2044C37.7918 43.978 40.6751 43.978 42.4534 42.2044Z"
                      fill="#69B06C"
                    />
                    <path
                      d="M7.39434 42.2028L7.39522 42.2037C9.17359 43.9773 12.0569 43.9773 13.8352 42.2037L42.455 13.6611C44.2334 11.8875 44.2334 9.01199 42.455 7.23842L42.4541 7.23753C40.6758 5.46397 37.7925 5.46397 36.0141 7.23754L7.39434 35.7802C5.61597 37.5537 5.61597 40.4293 7.39434 42.2028Z"
                      fill="#69B06C"
                    />
                    <path
                      d="M49.7148 24.7234V24.7222C49.7148 22.214 47.676 20.1807 45.1611 20.1807L4.68659 20.1807C2.17161 20.1807 0.132809 22.214 0.132809 24.7222V24.7234C0.132809 27.2316 2.17161 29.2649 4.68659 29.2649L45.1611 29.2649C47.676 29.2649 49.7148 27.2316 49.7148 24.7234Z"
                      fill="#69B06C"
                    />
                    <path
                      d="M24.9225 49.4463H24.9238C27.4387 49.4463 29.4775 47.413 29.4775 44.9048L29.4775 4.53941C29.4775 2.0312 27.4387 -0.00209808 24.9238 -0.00209808H24.9225C22.4075 -0.00209808 20.3687 2.0312 20.3687 4.53941L20.3687 44.9048C20.3687 47.413 22.4075 49.4463 24.9225 49.4463Z"
                      fill="#69B06C"
                    />
                    <path
                      d="M24.9241 32.245C29.0904 32.245 32.4678 28.8767 32.4678 24.7216C32.4678 20.5666 29.0904 17.1982 24.9241 17.1982C20.7578 17.1982 17.3804 20.5666 17.3804 24.7216C17.3804 28.8767 20.7578 32.245 24.9241 32.245Z"
                      fill="#FFC33F"
                    />
                  </svg>
                  <span>
                    <span>kids&nbsp;</span>
                  </span>
                </div>
              </h1>
              <Button scrollTo="mission" type="brand">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
