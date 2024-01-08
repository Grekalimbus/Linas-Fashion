import { motion } from "framer-motion";

const FirstDisplay = () => {
  return (
    <div className="w-full mx-auto h-[100vh] bg-[#04111b] flex flex-col justify-center items-center">
      <div className="conteiner  flex max-[1024px]:flex-col justify-between w-full max-w-6xl mx-auto">
        <div className="flex flex-col justify-between ">
          <motion.div
            className="flex"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              className="object-cover shrink"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=201,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png"
              alt="image1"
            />

            <img
              className="object-cover ml-6 shrink"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,h=201,fit=crop/linasyfhpf/Home_2-m6L1x6xeZetk65zO.png"
              alt="image2"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-bold word-wrap block text-[200px] max-[1120px]:text-[150px]">
              Linas
            </h3>
            <div className="flex justify-between max-[1120px]:text-[14px]">
              <p>FASHION PHOTOGRAPHY | AMSTERDAM</p>
              <p>THOEMKE@LINAS.COM</p>
            </div>
          </motion.div>
        </div>

        <motion.img
          initial={{ opacity: 0, translateY: 150 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7 }}
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
          alt="image3"
        />
      </div>
    </div>
  );
};

{
  /* <div className="flex  border-2 border-white  row-span-1">
          <img
            className="object-cover"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=201,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png"
            alt="image1"
          />
          <img
            className="object-cover"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,h=201,fit=crop/linasyfhpf/Home_2-m6L1x6xeZetk65zO.png"
            alt="image2"
          />
        </div>

        <h3 className=" font-bold text-[200px] h-min max-[1152px]:text-[180px]">
          Linas
        </h3>

        <div className="  max-[1152px]:text-[14px]">
          <p>FASHION PHOTOGRAPHY | AMSTERDAM</p>
          <p className="ml-4">THOEMKE@LINAS.COM</p>
        </div>
        <img
          className=" border-2 border-white object-cover  max-[1152px]:h-[73vh]"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
          alt="image3"
        /> */
}

export default FirstDisplay;
