import { useEffect } from "react";

// 1. Logic of the Hook:
// - Sets up an Intersection Observer to watch multiple elements simultaneously.
// - It triggers a callback when these elements intersect with the viewport
// - The callback checks if the observed element is intersecting and applies specific classes to it for animation.

// 2 Observer and Functionality:
// - observer - is an instance of the Intersection Observer class created with specified options.
// - It observes elements listed in the refsArray to check their intersection with the viewport.

const useIntersectionObserver = (animationsAndRefs) => {
  const { refsArray = [], animationNamesArray = [] } = animationsAndRefs || {};

  useEffect(() => {
    const options = {
      root: null, // specifies the element used as the viewport for checking intersection.
      rootMargin: "0px", // adds extra space around the observed elements' bounding boxes.
      threshold: 0.35, //  sets the percentage of an observed element's visibility required to trigger the callback.
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const targetRef = refsArray[index]; // Access the correct ref from the array

          if (targetRef && animationNamesArray[index]) {
            console.log("targetRef", targetRef.current);
            console.log(
              "animationNamesArray[index]",
              animationNamesArray[index]
            );
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

  return;
};

export default useIntersectionObserver;
