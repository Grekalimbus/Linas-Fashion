import { motion } from "framer-motion";
import Link from "next/link";

const SmallDisplay = () => {
  return (
    <motion.div
      className="w-full flex flex-col justify-start items-center mx-auto h-[70vh] bg-[#04111b]  bg-cover bg-center text-black"
      style={{
        backgroundImage:
          "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/linasyfhpf/about_4-AVLX0qj5O7Ux2V1g.png')",
      }}
      initial={{ opacity: 0, translateY: 75 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col justify-start items-start mt-12">
        <p className="text-black text-5xl font-semibold mt-4 text-center">
          Linas
        </p>
        <p className="text-black text-5xl font-semibold mt-2">Thoemke </p>
      </div>

      <p className="text-black  mt-6 text-lg">CREATIVE PROFESSIONAL </p>
      <p className="text-black mt-2 pl-36 text-lg">IMPRESSIVE CLIENTELE</p>
      <p className="text-black mt-2 text-lg">EXPERIENCED & FLEXIBLE</p>

      <div className="flex justify-center font-medium mt-4 text-2xl mr-8 relative">
        <Link href="/contacts">CONTACT ME →</Link>
        <span className="absolute self-center w-[190px] bottom-1 h-[2px] bg-black transform"></span>
      </div>
    </motion.div>
  );
};

export default SmallDisplay;
