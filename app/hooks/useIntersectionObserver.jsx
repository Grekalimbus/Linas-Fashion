import { useEffect } from "react";

const useIntersectionObserver = (targetRef, callback) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          targetRef.current.classList.add("animate-slideUp");
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
  }, [targetRef, callback, options]);
};

export default useIntersectionObserver;
