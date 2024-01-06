import { motion } from "framer-motion";

const LargeDisplay = () => {
  return (
    <div className="mx-auto bg-[#fad003]  flex justify-center items-center ">
      <motion.div
        className="container w-full flex justify-center relative mt-20 max-w-6xl mb-20"
        initial={{ opacity: 0, translateY: 75 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-black font-bold text-8xl  top ml-20 w-[10%] h-[10%]">
          04
        </h1>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1282,fit=crop/linasyfhpf/Home_13-Yg2PkDkr39F5vkyM.png"
          alt="Model1"
          className="w-[35%] h-[20%] static z-[0] mt-[60px] ml-20  object-cover"
        />
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1242,fit=crop/linasyfhpf/Home_12-YNqLVxVkEjiR203R.png"
          alt="Model2"
          className="absolute w-[25%] z-[1] bottom-20 left-[80px]  object-cover"
        />
        <div className="z-[1] absolute bottom-0 left-[80px]">
          <p className="text-black font-bold text-xl">YELLOW</p>
          <a className="text-black underline font-sansi cursor-pointer">
            Learn more about the project →
          </a>
        </div>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=1554,fit=crop/linasyfhpf/Home_14-dWxVaNakylUxl4Br.png"
          alt="Model3"
          className="w-[40%]  mb-[80px]  sm:ml-10 object-cover"
        />
        <p className="text-black font-sansi absolute z-[1] bottom-0">
          Model: Anna Fena
        </p>
        <p className="text-black font-sans absolute z-[1] right-0 bottom-0 mr-[150px]">
          MUA: Jessie Gein
        </p>
      </motion.div>
    </div>
  );
};

export default LargeDisplay;
