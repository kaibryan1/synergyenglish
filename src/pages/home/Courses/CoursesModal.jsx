import styles from "./CoursesModal.module.scss";

import Button from "../../../components/button/Button";

// Icons
import iconFlower from "/assets/Footer/Icon - Flower.svg";
import iconAbstract from "/assets/Footer/Icon - Abstract.svg";
import iconMoon from "/assets/Footer/Icon - Moon.svg";
import iconPastles from "/assets/Footer/Icon - Pastles.svg";
import { div } from "motion/react-client";

// Banner
import courseModalBanner from "/assets/Course Modal/Modal Banner.svg";

export default function CoursesModal({ content, closeModal }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.courseModal}>
        <div className={styles.navBar}>
          {/* Title */}
          <h3>{content.title || "Navigation bar"}</h3>
          {/* Close Icon */}
          <div className={styles.closeIcon} onClick={closeModal}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_288_8)">
                <path
                  d="M19.7734 8.22559L8.22403 19.775"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.22656 8.22559L19.776 19.775"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_288_8">
                  <rect width="28" height="28" rx="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className={styles.modalBody}>
          <p className={styles.description}>{content.description}</p>
          <div className={styles.details}>
            {/* Block 1 */}
            <div className={styles.block}>
              <div className={styles.block__icon}>
                <img src={iconFlower} alt="" />
              </div>
              <div className={styles.block__body}>
                <h5 className={`title h4`}>{content.details[0].title}</h5>
                <p>{content.details[0].text}</p>
              </div>
            </div>
            {/* Block 2 */}
            <div className={styles.block}>
              <div className={styles.block__icon}>
                <img src={iconPastles} alt="brand icon" />
              </div>
              <div className={styles.block__body}>
                <h5 className={`title h4`}>{content.details[1].title}</h5>
                <p>{content.details[1].text}</p>
              </div>
            </div>
            {/* Block 3 */}
            <div className={styles.block}>
              <div className={styles.block__icon}>
                <img src={iconMoon} alt="brand icon" />
              </div>
              <div className={styles.block__body}>
                <h5 className={`title h4`}>{content.details[2].title}</h5>
                <p>{content.details[2].text}</p>
              </div>
            </div>
            {/* Block 4 */}
            <div className={styles.block}>
              <div className={styles.block__icon}>
                <img src={iconAbstract} alt="brand icon" />
              </div>
              <div className={styles.block__body}>
                <h5 className={`title h4`}>{content.details[3].title}</h5>
                <p>{content.details[3].text}</p>
              </div>
            </div>
          </div>
          <div className={styles.ctaWrapper}>
            <Button bringTo="https://google.com" onClick={closeModal}>
              Enroll Now
            </Button>
            <div className={styles.socialIcons}>
              {/* Icons */}
              {/* Facebook */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_223_94)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.0904 0C30.2482 0 32 1.75188 32 3.90963V28.0904C32 30.2481 30.2481 32 28.0904 32H21.4361V19.9428H25.5986L26.3906 14.779H21.4361V11.4279C21.4361 10.0152 22.1282 8.63819 24.3474 8.63819H26.6V4.24194C26.6 4.24194 24.5556 3.89306 22.6011 3.89306C18.5206 3.89306 15.8536 6.36612 15.8536 10.8433V14.779H11.3178V19.9428H15.8536V32H3.90963C1.75188 32 0 30.2481 0 28.0904V3.90963C0 1.75188 1.75181 0 3.90963 0L28.0904 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_223_94">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {/* Messenger */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_223_97)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.0904 0C30.2482 0 32 1.75188 32 3.90963V28.0904C32 30.2481 30.2481 32 28.0904 32H3.90963C1.75188 32 0 30.2481 0 28.0904V3.90963C0 1.75188 1.75181 0 3.90963 0L28.0904 0ZM16 4.7365C9.48594 4.7365 4.4375 9.50812 4.4375 15.9524C4.4375 19.3235 5.81944 22.2362 8.06913 24.2486C8.2575 24.4184 8.37156 24.6534 8.38087 24.9069L8.44369 26.9636C8.46462 27.6196 9.14156 28.0454 9.74187 27.7824L12.0357 26.7705C12.2311 26.6844 12.4475 26.6681 12.6523 26.7239C13.7061 27.0147 14.8298 27.1683 16 27.1683C22.5141 27.1683 27.5625 22.3967 27.5625 15.9524C27.5625 9.51031 22.5174 4.73975 16 4.7365ZM9.05787 19.2327L12.4544 13.8446C12.9942 12.9886 14.1528 12.7745 14.9624 13.3817L17.6634 15.408C17.9123 15.5942 18.252 15.5919 18.4986 15.4058L22.1465 12.6372C22.6327 12.2674 23.2702 12.8513 22.9421 13.3678L19.5478 18.7535C19.0081 19.6096 17.8496 19.8236 17.0399 19.2164L14.3389 17.1901C14.0899 17.0039 13.7503 17.0063 13.5037 17.1924L9.8535 19.9632C9.36894 20.3319 8.73406 19.7531 9.05787 19.2327Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_223_97">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {/* Line */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_223_89)">
                  <path
                    d="M11.6004 19.4671H9.06706C8.66706 19.4671 8.40039 19.2005 8.40039 18.8005V12.9338C8.40039 12.5338 8.66706 12.2671 9.06706 12.2671C9.46706 12.2671 9.73372 12.5338 9.73372 12.9338V18.1338H11.6004C12.0004 18.1338 12.2671 18.4005 12.2671 18.8005C12.2671 19.0671 11.8671 19.4671 11.6004 19.4671ZM14.4004 18.8005C14.4004 19.2005 14.1337 19.4671 13.7337 19.4671C13.3337 19.4671 13.0671 19.2005 13.0671 18.8005V12.9338C13.0671 12.5338 13.3337 12.2671 13.7337 12.2671C14.1337 12.2671 14.4004 12.5338 14.4004 12.9338V18.8005ZM18.6671 19.2005C18.6671 19.2005 18.5337 19.3338 18.4004 19.3338C18.2671 19.3338 18.2671 19.3338 18.1337 19.3338C18.0004 19.3338 17.8671 19.3338 17.8671 19.2005C17.7337 19.0671 17.7337 19.0671 17.6004 18.9338L16.4004 16.1338V18.8005C16.4004 19.2005 16.1337 19.4671 15.7337 19.4671C15.3337 19.4671 15.0671 19.2005 15.0671 18.8005V12.9338C15.0671 12.8005 15.0671 12.8005 15.0671 12.6671C15.0671 12.6671 15.0671 12.6671 15.0671 12.5338C15.0671 12.5338 15.0671 12.4005 15.2004 12.4005C15.2004 12.4005 15.3337 12.2671 15.4671 12.2671C15.4671 12.2671 15.4671 12.2671 15.6004 12.2671H15.7337H15.8671C15.8671 12.2671 16.0004 12.2671 16.0004 12.4005H16.1337C16.1337 12.4005 16.2671 12.5338 16.2671 12.6671L17.4671 15.4671V12.8005C17.4671 12.4005 17.7337 12.1338 18.1337 12.1338C18.5337 12.1338 18.8004 12.4005 18.8004 12.8005V18.5338C18.8004 18.6671 18.8004 18.6671 18.8004 18.8005C18.8004 19.0671 18.8004 19.0671 18.6671 19.2005ZM22.9337 15.2005C23.3337 15.2005 23.6004 15.4671 23.6004 15.8671C23.6004 16.2671 23.3337 16.5338 22.9337 16.5338H21.0671V18.1338H22.9337C23.3337 18.1338 23.6004 18.4005 23.6004 18.8005C23.6004 19.2005 23.3337 19.4671 22.9337 19.4671H20.5337C20.1337 19.4671 19.8671 19.2005 19.8671 18.8005V12.9338C19.8671 12.5338 20.1337 12.2671 20.5337 12.2671H22.9337C23.3337 12.2671 23.6004 12.5338 23.6004 12.9338C23.6004 13.3338 23.3337 13.6005 22.9337 13.6005H21.0671V15.2005H22.9337Z"
                    fill="white"
                  />
                  <path
                    d="M27.2003 0.666992H4.80033C2.53366 0.666992 0.666992 2.53366 0.666992 4.80033V27.2003C0.666992 29.467 2.53366 31.3337 4.80033 31.3337H27.2003C29.467 31.3337 31.3337 29.467 31.3337 27.2003V4.80033C31.3337 2.53366 29.467 0.666992 27.2003 0.666992ZM23.7337 24.0003L16.4003 29.067C16.267 29.2003 16.1337 29.2003 16.0003 29.2003C15.867 29.2003 15.7337 29.2003 15.7337 29.067C15.467 28.9337 15.3337 28.8003 15.3337 28.5337V26.267C8.80032 26.0003 3.60033 21.467 3.60033 15.867C3.60033 10.0003 9.20033 5.33366 16.0003 5.33366C22.8003 5.33366 28.4003 10.0003 28.4003 15.7337C28.4003 18.9337 26.667 22.0003 23.7337 24.0003Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_223_89">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <img src={courseModalBanner} alt="" />
      </div>
    </div>
  );
}
