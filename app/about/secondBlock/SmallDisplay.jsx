import { motion } from "framer-motion";
import Link from "next/link";

const SmallDisplay = () => {
  return (
    <div className="w-full flex justify-center mx-auto text-black min-h-min">
      <div className="flex flex-col items-start justify-start max-w-[420px] p-8 ">
        <motion.p
          className="block mt-4 text-2xl text-black"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          Linas Thoemke is a fashion photographer based in Amsterdam. He started
          working for small indie publications back in the mid-00s, and gathered
          a following that slowly attracted the attention of bigger brands.
        </motion.p>
        <br></br>
        <motion.p
          className="block mt-4 text-2xl"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          Linas has worked on a wide array of different projects. Available to
          work worldwide.
        </motion.p>
        <motion.div
          className="flex justify-center font-medium mt-4 text-2xl mr-8 relative"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/contacts">CONTACT ME →</Link>
          <span className="absolute self-center w-[190px] bottom-1 h-[2px] bg-black transform"></span>
        </motion.div>
        <motion.p
          className="font-medium text-2xl mt-12"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          EXHIBITIONS
        </motion.p>
        <motion.div
          className="mt-10 "
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>THIS IS LINAS: ORIGIN STORY</p>
          <p>2008, Amsterdam</p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>TAKES ON COLOR AND SEA</p>
          <p>2010, London and Amsterdam</p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>EXPRESSIONS OF MORTALITY</p>
          <p>2011, Amsterdam</p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, translateY: 75 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>THOEMKE & GEET: EXPLORING </p>
          <p>2015-2016, Amsterdam and Paris</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SmallDisplay;
