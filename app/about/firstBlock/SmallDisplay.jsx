import { motion } from "framer-motion";

const SmallDisplay = () => {
  return (
    <div className="w-full flex justify-center mx-auto min-h-min bg-[#04111b] text-white">
      <div className="container flex flex-col max-w-[420px] justify-center p-8">
        <motion.div
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-bold word-wrap block text-5xl">
            Capturing magic
          </h3>
          <p>LINAS THOEMKE | </p>
          <p>FASHION </p>
          <p>PHOTOGRAPHY </p>
        </motion.div>
        <motion.img
          className="mt-10"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1213,fit=crop/linasyfhpf/about_1-AoP1yOwKMzh26ZLV.png"
          alt="image"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="w-full flex justify-between mt-4"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[48%]">
            <img
              className="w-full h-auto"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=963,fit=crop/linasyfhpf/about_2-YZ9p0JvgNqUp30OP.png"
              alt="image2"
            />
          </div>

          <div className="w-[48%]">
            <img
              className="w-full h-full"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=963,fit=crop/linasyfhpf/about_3-m7VjgnGXpkhrMQN5.png"
              alt="image1"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SmallDisplay;
