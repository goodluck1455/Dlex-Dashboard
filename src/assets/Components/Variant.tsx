
export const fadeIn = (direction: any, delay: any, effect?: "zoom" | "scale") => {
    return {
      hidden: {
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        opacity: 0,
        scale: effect === "zoom" || effect === "scale" ? 0.8 : 1, // Apply only if effect is zoom/scale
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        scale: effect === "zoom" || effect === "scale" ? 1 : 1, // Scale to normal only when effect is applied
        transition: {
          type: "tween",
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  