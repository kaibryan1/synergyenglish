import gsap from "gsap";

export const handleMouseMovement = (
  event,
  svgRef,
  leftRetinaRef,
  rightRetinaRef
) => {
  if (!svgRef.current.length) return;

  //   Loop through the svg refs
  svgRef.current.forEach((svg, index) => {
    if (!svg || !leftRetinaRef.current[index] || !rightRetinaRef.current[index])
      return;

    //   Get the width and height of each svg element
    const svgRect = svg.getBoundingClientRect();
    const mouseX = event.clientX - svgRect.left; // distance between mouse and excluded svg width
    const mouseY = event.clientY - svgRect.top; // distance between mouse and excluded svg height

    // Getting the middle point of the svg width and height
    const centerX = svgRect.width / 2;
    const centerY = svgRect.height / 2;

    const maxXDistance = 16; // Max distance the retina can move
    const maxYDistance = 14; // Max distance the retina can move
    const offsetX = Math.min(
      maxXDistance,
      Math.max(-maxXDistance, (mouseX - centerX) / 15)
    );
    const offsetY = Math.min(
      maxYDistance,
      Math.max(-maxYDistance, (mouseY - centerY) / 15)
    );

    gsap.to(leftRetinaRef.current[index], {
      x: offsetX - index * 2.5, // Adjust offset for uniqueness
      y: offsetY,
      duration: 0.2,
    });

    gsap.to(rightRetinaRef.current[index], {
      x: offsetX + index * 2,
      y: offsetY,
      duration: 0.2,
    });
  });
  return;
};

export const emoteAnimation = (emotes) => {
  const tl = gsap.timeline({ repeat: -1, yoyo: true });
  emotes.forEach((emote, index) => {
    const randomX = gsap.utils.random(10, 15) * (index % 2 === 0 ? 1 : -1);
    tl.to(
      emote,
      {
        yPercent: gsap.utils.random(-20, 35), // Smooth floating
        xPercent: randomX, //littlebit x asis
        duration: gsap.utils.random(3, 5), // Vary durations for realism
        ease: "sine.inOut", // Smooth float effect
      },
      index * 0.1
    );
  });

  return tl;
};
