import gsap from "gsap";

gsap.defaults({
  duration: 0.6,
  ease: "power3",
});

export const setInitialState = (text) => {
  gsap.set(text, {
    height: "auto",
    maxHeight: 0,
  });
};

export const revealText = (text, accordian) => {
  const heightOffset = text.scrollHeight;
  const tl = gsap.timeline();
  tl.to(text, {
    maxHeight: heightOffset,
    marginTop: "20px",
    opacity: 1,
  }).set(accordian, { backgroundColor: "var(--color-white)" }, "<");

  return tl;
};

export const hideText = (text, accordian) => {
  const tl = gsap.timeline();
  tl.to(text, {
    maxHeight: 0,
    marginTop: "0px",
    opacity: 1,
  }).set(accordian, { backgroundColor: "var(--color-background--light)" }, "<");

  return tl;
};
