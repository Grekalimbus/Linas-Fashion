import { useEffect, useRef } from "react";

const useIntersectionObserver = (animationsAndRefs) => {
  const { refsArray = [], animationNamesArray = [] } = animationsAndRefs || {};

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.35,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const targetRef = refsArray[index]; // Access the correct ref from the array
          if (targetRef && animationNamesArray[index]) {
            targetRef.current.classList.add("opacity-0");
            targetRef.current.classList.add(animationNamesArray[index]);
          }
        }
      });
    }, options);

    refsArray.forEach((ref) => {
      if (ref && ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [refsArray, animationNamesArray]);

  return; // Return any necessary data if needed
};

export default useIntersectionObserver;
