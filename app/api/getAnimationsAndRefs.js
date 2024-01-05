const getAnimationsAndRefs = (screen, targetLarg, targetMedium) => {
  if (screen !== 0 || screen <= 1152) {
    return {
      animationNamesArray: ["animate-slideUp-medium"],
      refsArray: [targetMedium],
    };
  }
  return {
    animationNamesArray: ["animate-slideUp-large", "animate-slideUp-medium"],
    refsArray: [targetLarg, targetMedium],
  };
};
 

export default getAnimationsAndRefs;