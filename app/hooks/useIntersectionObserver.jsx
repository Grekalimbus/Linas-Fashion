import { useEffect, useRef } from "react";

const useIntersectionObserver = (animationsAndRefs) => {
  const { refsArray = [], animationNamesArray = [] } = animationsAndRefs || {};

  const observerRef = useRef(null); // Ref to store the observer

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.35,
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const targetRef = entry.target;

          if (index !== -1 && animationNamesArray[index]) {
            targetRef.classList.add("opacity-0");
            targetRef.classList.add(animationNamesArray[index]);
          }
        }
      });
    }, options);

    refsArray.forEach((ref) => {
      if (ref && ref.current && observerRef.current) {
        observerRef.current.observe(ref.current);
      }
    });

    return () => {
      refsArray.forEach((ref) => {
        if (ref && ref.current && observerRef.current) {
          observerRef.current.unobserve(ref.current);
        }
      });
    };
  }, [refsArray, animationNamesArray]);

  return observerRef.current; // Return the observer stored in the ref
};

export default useIntersectionObserver;
