import Link from "next/link";
import AnimateWrap from "../components/AnimateWrap";

const mx = "max-[1124px]:";

export const ThirdBlockContent = () => {
  const urlImage = `url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/linasyfhpf/about_4-AVLX0qj5O7Ux2V1g.png')`;
  return (
    <div
      style={{
        backgroundImage: urlImage,
      }}
      className="mx-auto w-full flex justify-center items-start text-black bg-cover bg-center h-[115vh] object-cover pt-12"
    >
      <div
        className={`p-6 w-full relative text-black mx-auto max-w-6xl flex flex-col justify-center items-center ${mx}max-w-[340px]`}
      >
        <AnimateWrap
          tag="div"
          className={`w-full flex justify-between text-black text-lg ${mx}flex-col  ${mx}order-2 items-start mt-10 ${mx}text-[18px]`}
        >
          <p>CREATIVE PROFESSIONAL </p>
          <p className={`${mx}self-end`}>EXPERIENCED & FLEXIBLE</p>
          <p>IMPRESSIVE CLIENTELE</p>
        </AnimateWrap>
        <AnimateWrap
          tag="div"
          className={`self-center ml-[220px] mt-[120px] flex flex-col items-start text-8xl font-semibold ${mx}font-bold ${mx}text-[60px] ${mx}mt-0  ${mx}ml-0 ${mx}order-1 ${mx}self-start`}
        >
          <p>Linas</p>
          <p className="mt-[15px]">Thoemke</p>
        </AnimateWrap>
        <Link
          href="/contacts"
          className={`mt-20 text-2xl self-center relative  ${mx}order-3`}
        >
          CONTACT ME →
          <span className="absolute left-0 right-0 bottom-1 h-[2px] bg-black transform "></span>
        </Link>
      </div>
    </div>
  );
};
