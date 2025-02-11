import gsap from "gsap";

export const setInitialState = (secondSectionText) => {
  gsap.set(secondSectionText, { opacity: 0 });
};

export const textRevealAnimation = (
  secondSection,
  shader,
  secondSectionText
) => {
  const tl = gsap.timeline();
  tl.to(
    shader,
    {
      bottom: "120%",
      scale: 2,
      duration: 1.8,
    },
    "<"
  )
    .to(
      secondSection,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power1.inOut",
      },
      "<+=0.08"
    )
    .to(
      secondSectionText,
      {
        opacity: 1,
        duration: 1,
      },
      "<+0.15"
    );
  return tl;
};

export const parallexAnimation = (kidEmote, square, flower, squiggly) => {
  const tl = gsap.timeline();
  tl.to(kidEmote, {
    y: gsap.utils.random(-90, -70),
  })
    .to(square, { y: gsap.utils.random(90, 70) }, 0)
    .to(flower, { y: 40 }, 0)
    .to(squiggly, { xPercent: 40, yPercent: -100 }, 0);
  return tl;
};
