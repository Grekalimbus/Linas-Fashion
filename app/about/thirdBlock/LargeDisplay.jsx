import { motion } from "framer-motion";
import Link from "next/link";

const LargeDisplay = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/linasyfhpf/about_4-AVLX0qj5O7Ux2V1g.png')",
      }}
      className="mx-auto w-full flex justify-center items-start text-black bg-cover bg-center h-[115vh] object-cover pt-12"
    >
      <motion.div
        className="w-full relative text-black mx-auto max-w-6xl flex flex-col justify-center items-cente"
        initial={{ opacity: 0, translateY: 75 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className=" w-full flex justify-between text-black text-lg ">
          <p>CREATIVE PROFESSIONAL </p>
          <p>EXPERIENCED & FLEXIBLE</p>
          <p>IMPRESSIVE CLIENTELE</p>
        </div>
        <div className="self-center ml-[220px]  mt-[120px] flex flex-col items-start text-8xl font-semibold">
          <p>Linas</p>
          <p className="mt-[15px]">Thoemke</p>
        </div>
        <div className="flex justify-center font-medium mt-4 text-2xl mr-8 relative">
          <Link href="/contacts">CONTACT ME →</Link>
          <span className="absolute self-center w-[190px] bottom-1 h-[2px] bg-black transform"></span>
        </div>
      </motion.div>
    </div>
  );
};

export default LargeDisplay;
