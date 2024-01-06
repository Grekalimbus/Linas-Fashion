import { motion } from "framer-motion";

const LargeDisplay = () => {
  return (
    <div className="mx-auto w-full bg-white flex justify-center">
      <div className="container w-full max-w-6xl flex justify-center">
        <motion.div
          className="mt-20 mb-20 relative flex"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-black text-8xl font-semibold absolute z-[1] ml-10 mt-20">
            03
          </h1>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1740,fit=crop/linasyfhpf/Home_9-Y4Lg6q6QPvt7bRnp.png"
            alt="pic1"
            className="w-[710px] h-[870px] static object-contain"
          />
          <div className="ml-[120px] mt-10">
            <h2 className="text-black font-light">
              Model: Yoko Yamada
              <br /> MUA: Jessie Gein
            </h2>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=548,fit=crop/linasyfhpf/project3_2-YZ9p0JjL47HE1gJj.png"
              alt="img1"
              className="w-[400px] h-[234px] mt-3"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=744,fit=crop/linasyfhpf/project3_3-m2Wk5vEOzjUO3MX5.png"
              alt="img2"
              className="w-[400px] h-[410px] object-contain mt-2"
            />
            <h2 className="font-semibold text-black text-[17px] mt-2">
              SOMETHING IN THE AIR
            </h2>
            <p className="text-black font-light text-[17px] underline mt-5">
              Learn more about the project →
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LargeDisplay;
