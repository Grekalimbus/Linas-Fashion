import { motion } from "framer-motion";
import { animate } from "../api/animate";

const FirstDisplay = () => {
  return (
    <div className="bg-[#04111b] w-full mx-auto h-[100vh] max-[1024px]:h-full pb-16 flex flex-col justify-center items-center">
      <div className="conteiner mx-auto flex  justify-between w-full max-w-6xl max-[1024px]:flex-col  max-[1024px]:w-[340px]">
        <div className="flex flex-col justify-between ">
          <motion.div
            className="flex max-[1024px]:order-3 max-w-[340px] max-[1024px]:justify-between max-[1024px]:flex-row-reverse max-[1024px]:mt-8"
            initial={animate.initial}
            whileInView={animate.whileInView}
            transition={animate.transition}
          >
            <img
              className="object-cover max-[1024px]:w-[48%]"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=201,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png"
              alt="image1"
            />

            <img
              className="object-cover ml-6 max-[1024px]:w-[48%] max-[1024px]:ml-0"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,h=201,fit=crop/linasyfhpf/Home_2-m6L1x6xeZetk65zO.png"
              alt="image2"
            />
          </motion.div>
          <motion.div
            className="flex max-[1024px]:order-1 flex-col"
            initial={animate.initial}
            whileInView={animate.whileInView}
            transition={animate.transition}
          >
            <h3 className="font-bold word-wrap block text-[200px] max-[1120px]:text-[150px] max-[1024px]:text-[100px] ">
              Linas
            </h3>
            <div className="flex justify-between max-[1120px]:text-[14px] max-[1024px]:flex-col">
              <p>FASHION PHOTOGRAPHY | AMSTERDAM</p>
              <p>THOEMKE@LINAS.COM</p>
            </div>
          </motion.div>
          <motion.img
            className="hidden max-[1120px]:block order-2 mt-8"
            initial={animate.initial}
            whileInView={animate.whileInView}
            transition={animate.transition}
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
            alt="image3"
          />
        </div>

        <motion.img
          className="max-[1120px]:hidden"
          initial={animate.initial}
          whileInView={animate.whileInView}
          transition={animate.transition}
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
          alt="image3"
        />
      </div>
    </div>
  );
};

export default FirstDisplay;
