import { motion } from "framer-motion";

const LargeDisplay = () => {
  return (
    <div className="mx-auto w-full flex justify-center items-centre bg-[#04111b]">
      <motion.div
        className="container max-w-6xl mt-20 mb-20 "
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=388,h=372,fit=crop/linasyfhpf/clients_1-A0xbgEz0nys4Zrxb.png"
          alt="pic1"
          className="w-[15%] object-contain"
        />
        <h1 className="text-[17px] mt-20 font-light color-white">
          I'VE WORKED WITH:
        </h1>
        <h2 className="text-8xl font-semibold mt-20">
          Frontera, Gucci, Versace
          <br />
          innocent smoothies, Presson, Kris.T, Fashiona
          <br />
          Grotesk, StyleX, Rubik, Spectral, Juno.
        </h2>
        <div className="flex justify-end">
          <motion.img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=938,fit=crop/linasyfhpf/clients_2-YX49w6eMrvc9Wneq.png"
            alt="pic2"
            className="flex  w-[15%] object-contain mt-20"
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LargeDisplay;
