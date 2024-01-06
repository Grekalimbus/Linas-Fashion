import { motion } from "framer-motion";

const SmallDisplay = () => {
  return (
    <div className="ma-auto flex justify-center bg-[#fad003] ">
      <div className="w-full container flex justify-center items-left p-8 ">
        <div className="mt-20 mb-20">
          <motion.div
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-black font-bold text-6xl pt-5 ">01</h1>
            <h4 className="text-black font-semibold text-xl pt-5 w-[10%]">
              YELLOW
            </h4>
            <a className="font-sansi text-black pt-5 underline">
              Learn more about the project →
            </a>
          </motion.div>

          <motion.img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1475,fit=crop/linasyfhpf/Home_14-dWxVaNakylUxl4Br.png"
            alt="Model1"
            className="w-[328px] h-[448px] mt-10"
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="flex"
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1402,fit=crop/linasyfhpf/Home_13-Yg2PkDkr39F5vkyM.png"
              alt="model2"
              className="w-[161px] h-[209px] pt-5"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1420,fit=crop/linasyfhpf/Home_12-YNqLVxVkEjiR203R.png"
              alt="model3"
              className="w-[159px] h-[209px] pt-5 ml-2"
            />
          </motion.div>
          <motion.div
            className="flex justify-between"
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-black mt-2">MUA: Jessie Gein</p>
            <p className="text-black mt-2">Model: Anna Fena</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SmallDisplay;
