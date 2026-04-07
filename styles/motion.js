export const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -10,
    scale: 1.015,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};
