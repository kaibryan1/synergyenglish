import gsap from "gsap";

export const setInitialState = (textShader, iconShader) => {
  gsap.set(textShader, {
    left: "-110%",
  });
  if (iconShader) {
    gsap.set(iconShader, {
      left: "-130%",
    });
  }
};

export const shaderAnimations = (textShader, iconShader) => {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.45,
    },
  });

  if (iconShader) {
    tl.to(textShader, {
      left: "0%",
      ease: "power.out",
    }).to(
      iconShader,
      {
        left: "0%",
        ease: "power2.inout",
      },
      "-=0.1"
    );
  } else {
    tl.to(textShader, {
      left: "0%",
      ease: "power.out",
    });
  }
  return tl;
};
