import Link from "next/link";
import AnimateWrap from "../components/AnimateWrap";

const mx = "max-[1124px]";
const SecondBlockContent = () => {
  const image = "https://linasyfhpf.zyrosite.com/clients";
  return (
    <div className="mx-auto w-full flex justify-center items-center text-black pt-10 pb-32">
      <div
        className={`container max-w-6xl flex justify-between  relative mt-12 ${mx}flex-col items-center ${mx}max-w-[340px]`}
      >
        <AnimateWrap tag="div" className={`w-[37%] ${mx}w-full`}>
          <AnimateWrap tag="div" className="block mt-4 text-2xl">
            Linas Thoemke is a fashion photographer based in Amsterdam. He
            started working for small indie publications back in the mid-00s,
            and gathered a following that slowly attracted the attention of
            bigger brands.
          </AnimateWrap>
          <br></br>
          <AnimateWrap tag="div" className="block mt-4 mb-4 text-2xl">
            Linas has worked on a wide array of different projects. Available to
            work worldwide.
          </AnimateWrap>
          <Link
            href={image}
            className="font-medium border-b-2 border-black text-2xl "
          >
            CLIENT LIST →
          </Link>
        </AnimateWrap>
        <div
          className={`w-[30%] mr-36 mt-2 ${mx}mr-0 flex flex-col items-start ${mx}w-full ${mx}mt-6`}
        >
          <AnimateWrap tag="p" className="font-medium text-2xl">
            EXHIBITIONS
          </AnimateWrap>
          <AnimateWrap tag="div" className="mt-10 ">
            <p>THIS IS LINAS: ORIGIN STORY</p>
            <p>2008, Amsterdam</p>
          </AnimateWrap>
          <AnimateWrap tag="div" className="mt-10">
            <p>TAKES ON COLOR AND SEA</p>
            <p>2010, London and Amsterdam</p>
          </AnimateWrap>
          <AnimateWrap tag="div" className="mt-10">
            <p>EXPRESSIONS OF MORTALITY</p>
            <p>2011, Amsterdam</p>
          </AnimateWrap>
          <AnimateWrap tag="div" className="mt-10">
            <p>THOEMKE & GEET: EXPLORING </p>
            <p>2015-2016, Amsterdam and Paris</p>
          </AnimateWrap>
        </div>
      </div>
    </div>
  );
};

export default SecondBlockContent;
