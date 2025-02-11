import { useRef, useContext, useEffect } from "react";
import styles from "./Button.module.scss";

// Gsap
import gsap from "gsap";

// Context
import { ActiveNavContext } from "../../store/ActiveNavProvider";

// Animations
import { setInitialState, shaderAnimations } from "./ButtonAnimation";

export default function Button({ scrollTo, bringTo, type, icon, children }) {
  const { handleSelectNav } = useContext(ActiveNavContext);

  const buttonClasses = `${styles.button} ${type ? styles[type] : ""}`;
  const buttonRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      tl.current = gsap.timeline({
        paused: true,
      });

      if (buttonRef.current) {
        const textShader = buttonRef.current.querySelector("#textShader");
        const iconShader = buttonRef.current.querySelector("#iconShader");

        tl.current
          .add(setInitialState(textShader, iconShader))
          .add(shaderAnimations(textShader, iconShader));
      }
    });

    return () => context.revert();
  }, []);

  function onEnter() {
    tl.current.play();
  }

  function onLeave() {
    tl.current.reverse();
  }

  return (
    <a
      onClick={() => (scrollTo ? handleSelectNav(scrollTo) : null)}
      ref={buttonRef}
      href={bringTo ? bringTo : null}
      className={buttonClasses}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Label */}
      <span className={styles.button__text}>
        <p className={`navigation ${styles.button__label}`}>{children}</p>
        <div id="textShader" className={styles.textShader}></div>
      </span>
      {/* Icon */}
      {icon !== null && (
        <span className={styles.button__icon}>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 13.6064L13.5003 4.60645M13.5003 4.60645H6.98286M13.5003 4.60645V10.9769"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div id="iconShader" className={styles.iconShader}></div>
        </span>
      )}
    </a>
  );
}
