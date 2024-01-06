import { motion } from "framer-motion";

const SmallDisplay = () => {
  return (
    <div className="mx-auto flex justify-center">
      <div className="w-full container flex justify-center  items-left p-8">
        <div className="mt-20 mb-20">
          <motion.div
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-black text-6xl font-bold">03</h1>
            <h4 className="text-black font-sans pt-5 font-semibold">
              SOMETHING IN THE AIR
            </h4>
            <a className="text-black font-medium cursor-pointer underline pt-3">
              Learn more about the project →
            </a>
          </motion.div>
          <motion.img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1445,fit=crop/linasyfhpf/Home_9-Y4Lg6q6QPvt7bRnp.png"
            alt="Model1"
            className="w-[328px] h-[439px] mt-20 object-contain"
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sansi text-black flex justify-end mt-10">
              Model: Yoko Yamada
            </p>
            <p className="font-sansi text-black flex justify-end mb-20">
              MUA: Jessie Gein
            </p>
          </motion.div>

          <motion.img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=915,fit=crop/linasyfhpf/project3_2-YZ9p0JjL47HE1gJj.png"
            alt="Model2"
            className="w-[328px] h-[278px] pb-5 object-contai"
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=915,fit=crop/linasyfhpf/project3_3-m2Wk5vEOzjUO3MX5.png"
            alt="Model3"
            className="w-[100%] h-[278px] object-contain"
            initial={{ opacity: 0, translateY: 75 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
};

export default SmallDisplay;
