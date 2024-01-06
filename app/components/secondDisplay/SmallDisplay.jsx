import { motion } from "framer-motion";

const SmallDisplay = () => {
  return (
    <div className="mx-auto ">
      <div className="flex w-full justify-center items-center bg-white items-left p-8">
        <div className="mt-20 mb-20 ">
          <motion.div
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-black font-bold text-6xl">01</h1>
            <h4 className="font-semibold text-black pt-5">HEAD OVER HEELS</h4>
            <a className="cursor-pointer underline text-black pt-5">
              Learn more about the project →
            </a>
          </motion.div>

          <motion.img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1472,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png"
            alt="Model1"
            className="w-[328px] h-[447px] mt-10 object-contain"
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1559,fit=crop/linasyfhpf/Home_5-ALpGwawkbqulDkvq.png"
            alt="Model2"
            className="w-[257px] h-[371px] pt-10 object-contain"
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-black font-medium mt-10">
              Model: Anna Fenna <br />
              MUA: Jessie Gein
            </h4>
            <p className="text-black font-mdeium pt-4">CLIENT: "DARE" shoes</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SmallDisplay;
