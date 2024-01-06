import { motion } from "framer-motion";
const Button = ({ text, type, colorButton, colorText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 75 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8 }}
    >
      <button
        type={type}
        className={`${colorButton} ${colorText} w-[134px] h-[51px]   xl:ml-4 sm:ml-3 lg:ml-4 md:ml-4`}
      >
        {text}
      </button>
    </motion.div>
  );
};

export default Button;
