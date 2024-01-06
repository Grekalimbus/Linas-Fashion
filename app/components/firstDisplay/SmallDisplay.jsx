import { motion } from "framer-motion";

const SmallDisplay = () => {
  return (
    <div className="w-full flex justify-center items-center mx-auto bg-[#04111b] px-8 py-14">
      <div className="flex flex-col max-w-[420px] justify-center items-left">
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-bold word-wrap block text-white text-[80px]">
            Linas
          </h3>
          <p>FASHION PHOTOGRAPHY | AMSTERDAM</p>
          <p>THOEMKE@LINAS.COM</p>
        </motion.div>

        <motion.img
          className="my-4"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
          alt="image3"
          initial={{ opacity: 0, translateY: 70 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="w-full flex justify-between "
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            className="h-full w-[48%] object-cover"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,h=201,fit=crop/linasyfhpf/Home_2-m6L1x6xeZetk65zO.png"
            alt="image2"
          />

          <img
            className="w-[48%] object-cover"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=720,h=707,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png"
            alt="image1"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SmallDisplay;
