import { useEffect } from "react";

const useIntersectionObserver = (targetRef, nameAnimationPossition) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.35,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          targetRef.current.classList.add("opacity-0");
          targetRef.current.classList.add(nameAnimationPossition);
        }
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);
};

export default useIntersectionObserver;
