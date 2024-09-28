export const headerContainerVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

export const headerLinkVariants = {
  hover: {
    scale: 1.1,
  },
};

export const nameSpanVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const buttonVariants = {
  hidden: {
    opacity: 0,
    x: "10vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const popOutVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const certificateContainerVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0
  },
};
