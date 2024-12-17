// Original fadeIn with direction
export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0, // Hidden by default
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// Fade In from Bottom (No movement)
export const fadeInBottom = (delay = 0) => {
  return {
    hidden: {
      opacity: 0, // Start invisible
    },
    show: {
      opacity: 1, // Fade in to full opacity
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// Fade In with Scale (No movement, scaling effect)
export const fadeInScale = (delay = 0) => {
  return {
    hidden: {
      opacity: 0, // Start invisible
      scale: 0.8, // Start scaled down
    },
    show: {
      opacity: 1, // Fade in to full opacity
      scale: 1, // Return to original size
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
        delay: delay,
      },
    },
  };
};

// Fade In with Blur (No movement, blur effect)
export const fadeInBlur = (delay = 0) => {
  return {
    hidden: {
      opacity: 0, // Start invisible
      filter: "blur(10px)", // Start blurred
    },
    show: {
      opacity: 1, // Fade in to full opacity
      filter: "blur(0px)", // Remove the blur
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// Fade In with Rotate (No movement, rotating effect)
export const fadeInRotate = (delay = 0) => {
  return {
    hidden: {
      opacity: 0, // Start invisible
      rotate: 45, // Start rotated by 45 degrees
    },
    show: {
      opacity: 1, // Fade in to full opacity
      rotate: 0, // Return to original rotation
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 25,
        delay: delay,
      },
    },
  };
};

// Slide In from Left (No movement, opacity change only)
export const slideInLeft = (delay = 0) => {
  return {
    hidden: {
      opacity: 0, // Start invisible
    },
    show: {
      opacity: 1, // Fade in to full opacity
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
        delay: delay,
      },
    },
  };
};

// New visibility trigger for all the animations
export const fadeInWhenVisible = (animation, delay = 0) => {
  return {
    hidden: {
      opacity: 0, // Initially hidden
    },
    show: animation(delay), // Use the passed animation logic
  };
};
