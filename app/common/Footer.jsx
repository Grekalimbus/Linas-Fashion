import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa";
import AnimateWrap from "../components/AnimateWrap";

const Footer = () => {
  return (
    <div className="w-full mx-auto bg-[#04111b] p-16">
      <div className=" max-w-6xl mx-auto flex justify-between max-[1124px]:max-w-[340px] max-[1124px]:flex-col items-center">
        <AnimateWrap
          tag="div"
          className="flex justify-between w-[50%] font-semibold max-[1124px]:flex-col items-center "
        >
          <p>LINAS THOEMKE </p>
          <p className="max-[1124px]:order-3 max-[1124px]:mt-2">+3145683245</p>
          <p className="relative max-[1124px]:order-2 max-[1124px]:mt-2">
            THOEMKE@LINAS.COM
            <span className="self-end w-[100%] absolute left-0 right-0 bottom-1 h-[1px] bg-white transform"></span>
          </p>
        </AnimateWrap>
        <AnimateWrap
          tag="div"
          className="flex justify-between w-[15%] max-[1124px]:w-[35%] mt-4"
        >
          <FaTwitter className="w-[25px] h-[25px]"></FaTwitter>
          <FaFacebook className="w-[25px] h-[25px]"></FaFacebook>
          <FaInstagram className="w-[25px] h-[25px]"></FaInstagram>
        </AnimateWrap>
      </div>
    </div>
  );
};

export default Footer;
