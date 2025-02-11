import gsap from "gsap";

export const parallexEmoteAnimation = (emotesRef) => {
  const tl = gsap.timeline();
  emotesRef.forEach((item, index) => {
    tl.to(
      item,
      {
        y: gsap.utils.random(80, 130) + index * 10,
      },
      0
    );
  });

  return tl;
};
