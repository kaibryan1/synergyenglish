import gsap from "gsap";

export const revealGrid = (grid, index) => {
  const tl = gsap.timeline();
  tl.from(
    grid, // Elements to animate
    {
      opacity: 0,
      y: 60, // Animate upward
      duration: 0.6,
      ease: "power2.out",
      delay: index * 0.1,
    }
  );

  return tl;
};

export const alertColorAnimation = (alertBackground) => {
  const colors = [
    "var(--color-brand)",
    "var(--color-blue)",
    "var(--color-purple)",
    "var(--color-yellow)",
    "var(--color-green)",
    "var(--color-magenta)",
    "var(--color-dark)",
  ];
  const colorTimeline = gsap.timeline({
    repeat: -1,
  });

  colors.forEach((color) => {
    colorTimeline.to(alertBackground, {
      fill: color,
      duration: gsap.utils.random(0.4, 0.7),
      ease: "power2.out",
    });
  });

  gsap.to(alertBackground, {
    rotation: 360, // Rotates a full circle
    transformOrigin: "center",
    duration: 10, // Takes 10 seconds for one full rotation
    ease: "linear",
    repeat: -1, // Loop forever
  });

  colorTimeline.play();
  return;
};
