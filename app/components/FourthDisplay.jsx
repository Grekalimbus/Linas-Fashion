import AnimateWrap from "./AnimateWrap";
const FourthDisplay = () => {
  const images = [
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1740,fit=crop/linasyfhpf/Home_9-Y4Lg6q6QPvt7bRnp.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=548,fit=crop/linasyfhpf/project3_2-YZ9p0JjL47HE1gJj.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=744,fit=crop/linasyfhpf/project3_3-m2Wk5vEOzjUO3MX5.png",
  ];
  return (
    <div className="w-full mx-auto h-[110vh] max-[1124px]:h-full py-20 flex flex-col justify-center items-center bg-white">
      <div className="conteiner mx-auto flex  justify-between w-full max-w-6xl max-[1124px]:flex-col  max-[1124px]:w-[340px] relative">
        <AnimateWrap
          tag="h1"
          className="text-8xl text-black absolute z-[1] mt-10 ml-10 font-semibold max-[1124px]:relative max-[1124px]:ml-0 max-[1124px]:mt-10 max-[1124px]:text-7xl"
        >
          03
        </AnimateWrap>
        <AnimateWrap
          tag="h1"
          className="hidden font-semibold text-black max-[1124px]:block"
        >
          SOMETHING IN THE AIR
        </AnimateWrap>
        <AnimateWrap
          tag="p"
          className="text-black font-light underline hidden max-[1124px]:block"
        >
          Learn more about the project →
        </AnimateWrap>
        <AnimateWrap
          tag="img"
          src={images[0]}
          alt="Mode1"
          className="w-[70%] static z-0 max-[1124px]:w-[100%] max-[1124px]:mt-10"
        />
        <div className="ml-20">
          <AnimateWrap
            tag="p"
            className="text-black font-light max-[1124px]:ml-[105px] max-[1124px]:mt-10 "
          >
            Model: Yoko Yamada <br />
            MUA: Jessie Gein
          </AnimateWrap>
          <AnimateWrap
            tag="img"
            src={images[1]}
            alt="model2"
            className="w-[100%] mt-20 max-[1124px]:w-[100%] max-[1124px]:mt-20"
          />
          <AnimateWrap
            tag="img"
            src={images[2]}
            alt="model3"
            className="w-[100%] mt-20 max-[1124px]:w-[100%] max-[1124px]:mt-10"
          />
          <AnimateWrap
            tag="p"
            className="text-black font-semibold mt-[122px] max-[1124px]:hidden max-[1124px]:mt-10"
          >
            SOMETHING IN THE AIR
          </AnimateWrap>
          <AnimateWrap
            tag="p"
            className="text-black fomt-light underline max-[1124px]:hidden max-[1124px]:mt-10"
          >
            Learn more about the project →
          </AnimateWrap>
        </div>
      </div>
    </div>
  );
};

export default FourthDisplay;
