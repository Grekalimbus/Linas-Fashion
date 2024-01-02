import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Link from "next/link";

const SecondBlockContent = ({ screen, screenWidth }) => {
  const targetRef = useRef(null);
  useIntersectionObserver(targetRef);
  return screenWidth <= 950 || screen <= 950 ? (
    <div className="w-full flex justify-center mx-auto h-svh text-black">
      <div
        ref={targetRef}
        className="flex flex-col items-start justify-start max-w-[420px] p-8"
      >
        <p className="block mt-4" style={{ fontSize: "24px", color: "black" }}>
          Linas Thoemke is a fashion photographer based in Amsterdam. He started
          working for small indie publications back in the mid-00s, and gathered
          a following that slowly attracted the attention of bigger brands.
        </p>
        <br></br>
        <p className="block mt-4 text-2xl">
          Linas has worked on a wide array of different projects. Available to
          work worldwide.
        </p>
        <Link
          href="https://linasyfhpf.zyrosite.com/clients"
          className="font-medium mt-4 border-b-2 border-black text-2xl"
        >
          CLIENT LIST →
        </Link>
        <p className="font-medium text-2xl mt-12">EXHIBITIONS</p>
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
    </div>
  ) : (
    <div></div>
  );
};

export default SecondBlockContent;
