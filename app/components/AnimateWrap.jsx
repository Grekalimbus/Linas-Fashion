import { motion } from "framer-motion";
import { animate } from "../api/animate";

const AnimatedComponent = ({ children, className, tag, src, alt }) => {
  const MotionComponent = motion[tag];

  return (
    <MotionComponent
      className={className}
      initial={animate.initial}
      whileInView={animate.whileInView}
      transition={animate.transition}
      src={src}
      alt={alt}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedComponent;
