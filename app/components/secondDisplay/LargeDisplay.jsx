import { motion } from "framer-motion";

const LargeDisplay = () => {
  return (
    <div className="mx-auto flex justify-center items-center bg-white ">
      <div className="container w-full flex justify-center static mt-20 mb-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex"
        >
          <h1 className="text-bold font-sans text-8xl text-black z-[1] absolute mt-5 ml-5">
            01
          </h1>
          <p className="text-black font-sans text-medium absolute z-[1] flex bottom-10 left-10 lg:bottom-20">
            CLIENT: "DARE" shoes
          </p>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1610,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png"
            alt="Nodel1"
            className="w-[65%] static object-contain"
          />
          <div className="ml-10">
            <h4 className="text-black font-medium">
              Model: Anna Fenna <br />
              MUA: Jessie Gein
            </h4>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=1138,fit=crop/linasyfhpf/Home_5-ALpGwawkbqulDkvq.png"
              alt="Model2"
              className="w-[100%] mt-20 object-conatain"
            />
            <motion.div
              className="mt-[120px]"
              initial={{ opacity: 0, translateY: 75 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-black font-semibold ">HEAD OVER HEELS</h4>
              <a className="text-black underline font-medium mt-5">
                Learn more about the project →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LargeDisplay;
