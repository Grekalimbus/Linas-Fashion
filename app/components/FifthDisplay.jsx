import AnimateWrap from "./AnimateWrap";
const FifthDisplay = () => {
  const image = [
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1282,fit=crop/linasyfhpf/Home_13-Yg2PkDkr39F5vkyM.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1242,fit=crop/linasyfhpf/Home_12-YNqLVxVkEjiR203R.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=1554,fit=crop/linasyfhpf/Home_14-dWxVaNakylUxl4Br.png",
  ];
  return (
    <div className="mx-auto bg-[#fad003] flex flex-col justify-center items-center py-20 h-[110vh] max-[1124px]:w-full ">
      <div className="conteiner mx-auto flex  w-full max-w-6xl max-[1124px]:flex-col  max-[1124px]:w-[340px] relative ">
        <div className="flex flex-col ">
          <AnimateWrap
            tag="h1"
            className="text-black font-semibold text-8xl max-[1124px]:text-7xl max-[1124px]:top-0"
          >
            04
          </AnimateWrap>
          <AnimateWrap
            tag="h2"
            className="text-black font-semibold ml-4 mt-5 hidden max-[1124px]:block max-[1124px]:ml-1 max-[1124px]:mt-2 "
          >
            YELLOW
          </AnimateWrap>
          <AnimateWrap
            tag="p"
            className="text-black font-light underline ml-4 hidden max-[1124px]:block max-[1124px]:ml-1"
          >
            Learn more about the project →
          </AnimateWrap>
          <AnimateWrap
            tag="img"
            src={image[2]}
            alt="pic3 "
            className="w-[100%] hidden max-[1124px]:block max-[1124px]:mt-10 "
          />
          <AnimateWrap
            tag="img"
            src={image[0]}
            alt="pic1"
            className="w-[80%] static z-[0]  ml-[160px] max-[1124px]:static max-[1124px]:w-[35%] max-[1124px]:mt-10 max-[1124px]:hidden"
          />
          <AnimateWrap
            tag="img"
            src={image[1]}
            alt="pic2"
            className="w-[24%] absolute z-[1] bottom-20 max-[1124px]:relative max-[1124px]:z-0 max-[1124px]:w-[35%] max-[1124px]:bottom-0 max-[1124px]:mr-20 max-[1124px]:hidden"
          />
          <div className="   mt-10">
            <AnimateWrap
              tag="h2"
              className="text-black font-semibold  mt-20  max-[1124px]:hidden"
            >
              YELLOW
            </AnimateWrap>
            <AnimateWrap
              tag="p"
              className="text-black font-light  underline max-[1124px]:hidden"
            >
              Learn more about the project →
            </AnimateWrap>
          </div>
        </div>
        <div className="flex flex-col">
          <AnimateWrap
            tag="img"
            src={image[2]}
            alt="pic3"
            className="w-[80%] ml-[160px] static z-[0] max-[1124px]:hidden"
          />
          <AnimateWrap
            tag="p"
            className="text-black absolute z-[1] right-0 bottom-10 max-[1124px]:hidden"
          >
            MUA: Jessie Gein
          </AnimateWrap>
        </div>
        <div className="flex  justify-between mt-0">
          <AnimateWrap
            tag="img"
            src={image[1]}
            alt="pic2"
            className="hidden w-[48%] max-[1124px]:block"
          />
          <AnimateWrap
            tag="img"
            src={image[0]}
            alt="pic3"
            className="w-[50%] hidden max-[1124px]:block "
          />
        </div>
      </div>
    </div>
  );
};

export default FifthDisplay;
