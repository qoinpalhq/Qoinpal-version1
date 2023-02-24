const containerVariants = {
  before: {
    opacity: 0,
    x: `100vw`,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  enter: {
    opacity: 1,
    x: `0`,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  after: {
    opacity: 0,
    x: `-100vw`,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

export default containerVariants;
