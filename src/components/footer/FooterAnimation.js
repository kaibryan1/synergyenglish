import gsap from "gsap";
import { easeInOut } from "motion";

export const scrollAnimation = (rowRefs) => {
  const tl = gsap.timeline();
  const rows = gsap.utils.toArray(rowRefs);
  rows.forEach((row) => {
    const width = row.offsetWidth / 2;
    tl.to(
      row,
      {
        x: -width, // Move left by half the width
        duration: 25, // Adjust speed as needed
        ease: "linear",
        repeat: -1,
        yoyo: true,
      },
      0
    );
  });

  return tl;
};
