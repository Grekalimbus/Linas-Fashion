import { motion } from "framer-motion";

const LargeDisplay = () => {
  return (
    <div className="mx-auto bg-[#04111b] w-full flex justify-center items-center pb-16">
      <motion.div
        className="container max-w-6xl flex justify-around relative mt-12"
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          className="w-[48%] h-[76vh] object-cover"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1213,fit=crop/linasyfhpf/about_1-AoP1yOwKMzh26ZLV.png"
          alt="image1"
        />

        <div className="ml-20">
          <div className="h-[28%] flex justify-center">
            <img
              className="max-w-[42%] object-cover"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=963,fit=crop/linasyfhpf/about_2-YZ9p0JvgNqUp30OP.png"
              alt="image2"
            />

            <img
              className="ml-4 max-w-[100%] min-w-[52%] bg-cover bg-right-bottom	object-cover"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=963,fit=crop/linasyfhpf/about_3-m7VjgnGXpkhrMQN5.png"
              alt="image3"
            />
          </div>
          <div>
            <h3 className="text-8xl font-semibold mt-20">Capturing </h3>

            <h3 className="text-8xl font-semibold mt-2 ml-10">magic</h3>
            <p className="text-1xl mt-44 ml-6">
              LINAS THOEMKE | FASHION PHOTOGRAPHY
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LargeDisplay;
