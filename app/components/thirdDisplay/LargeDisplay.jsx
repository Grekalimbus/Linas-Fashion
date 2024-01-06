import { motion } from "framer-motion";

const LargeDisplay = () => {
  return (
    <div className="mx-auto justify-center bg-[#04111b] pt-5 relative flex">
      <div className="w-full container static mt-10 flex justify-center max-w-6xl ">
        <motion.div
          className="mt-20 mb-20"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="color-white font-bold text-8xl w-[10%] ml-5">02</h1>
          <div className="flex relative max-w-6xl">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1410,fit=crop/linasyfhpf/Home_7-AE0xXDXkxGuLqpgk.png"
              alt="ManModel"
              className="w-[35%] h-[10%] mt-20 ml-[190px] z-[0] static "
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1034,fit=crop/linasyfhpf/Home_6-YyvLQNQb5bHZrQ2V.png"
              alt="Flower"
              className="absolute  w-[25%]  z-[1] flex  mt-[265px]  "
            />
            <div className="z-[1] absolute bottom-0">
              <h4 className="color-white text-semibold">FLOWER GARDEN</h4>
              <a className="underline color-white font-medium">
                Learn more about the project →
              </a>
            </div>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=1582,fit=crop/linasyfhpf/Home_8-m5KgxNx9kwhwwqNW.png"
              alt="ModelMan2"
              className="w-[45%] mt-5  ml-[50px] static z-[0] object-contain"
            />
            <p className="font-sans color-white mr-5  mb-5 flex absolute right-0 bottom-0 shadow-sm">
              MUA: Jessie Gein
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LargeDisplay;
