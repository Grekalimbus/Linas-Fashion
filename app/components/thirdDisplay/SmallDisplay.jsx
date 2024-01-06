import { motion } from "framer-motion";

const SmallDisplay = () => {
  return (
    <div className="flex justify-center items-center w-full bg-[#04111b]">
      <div className="mt-20 mb-20 items-left p-8">
        <motion.div
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white font-bold text-6xl ">02</h1>
          <h4 className="text-white font-medium pt-5 ">FLOWER GARDEN</h4>
          <a className="text-white font-medium underline cursor-pointer pt-3">
            Learn more about the project →
          </a>
        </motion.div>
        <motion.img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=1582,fit=crop/linasyfhpf/Home_8-m5KgxNx9kwhwwqNW.png"
          alt="ManModel2"
          className="h-[625px] pt-10 object-cover"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1034,fit=crop/linasyfhpf/Home_6-YyvLQNQb5bHZrQ2V.png"
          alt="flower"
          className="w-[235px] h-[245px] ml-[92px] pt-5 object-cover"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1410,fit=crop/linasyfhpf/Home_7-AE0xXDXkxGuLqpgk.png"
          alt="ModelMan"
          className="w-[263px] h-[371px] pt-5 object-cover"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="flex p-5"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white text-sm ml-10">
            MUA: Jessie <br /> Gein
          </p>
          <p className="text-white text-sm ml-[92px] ">Model: Jake James</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SmallDisplay;
