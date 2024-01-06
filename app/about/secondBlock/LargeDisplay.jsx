import { motion } from "framer-motion";
import Link from "next/link";

const LargeDisplay = () => {
  return (
    <div className="mx-auto w-full flex justify-center items-center text-black pt-10 pb-32">
      <motion.div
        className="container max-w-6xl flex justify-between  relative mt-12 opacity-0 "
        initial={{ opacity: 0, translateY: 75 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col w-[37%]">
          <p className="block mt-4 text-2xl">
            Linas Thoemke is a fashion photographer based in Amsterdam. He
            started working for small indie publications back in the mid-00s,
            and gathered a following that slowly attracted the attention of
            bigger brands.
          </p>
          <br></br>
          <p className="block mt-4 mb-4 text-2xl">
            Linas has worked on a wide array of different projects. Available to
            work worldwide.
          </p>
          <div className="flex justify-start font-medium mt-4 text-2xl  relative">
            <Link href="/contacts">CONTACT ME →</Link>
            <span className="absolute w-[190px] bottom-1 h-[2px] bg-black transform"></span>
          </div>
        </div>
        <div className="w-[30%] mr-36 mt-2">
          <p className="font-medium text-2xl">EXHIBITIONS</p>
          <div className="mt-10 ">
            <p>THIS IS LINAS: ORIGIN STORY</p>
            <p>2008, Amsterdam</p>
          </div>

          <div className="mt-10">
            <p>TAKES ON COLOR AND SEA</p>
            <p>2010, London and Amsterdam</p>
          </div>

          <div className="mt-10">
            <p>EXPRESSIONS OF MORTALITY</p>
            <p>2011, Amsterdam</p>
          </div>

          <div className="mt-10">
            <p>THOEMKE & GEET: EXPLORING </p>
            <p>2015-2016, Amsterdam and Paris</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LargeDisplay;
