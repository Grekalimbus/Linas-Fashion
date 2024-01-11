import AnimateWrap from "../components/AnimateWrap";
const ContentBlock = () => {
  const image = [
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=943,fit=crop/linasyfhpf/clients_1-A0xbgEz0nys4Zrxb.png",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=938,fit=crop/linasyfhpf/clients_2-YX49w6eMrvc9Wneq.png",
  ];
  return (
    <div className="mx-auto h-[110vh] max-[1124px]:h-full flex flex-col bg-[#04111b] justify-center items-center py-20">
      <div className="container max-w-6xl w-full max-[1124px]:flex-col max-[1124px]:w-[350px] flex ">
        <div>
          <AnimateWrap
            tag="img"
            src={image[0]}
            alt="pic1"
            className="w-[194px] h-[186px] max-[1124px]:hidden"
          />
          <AnimateWrap tag="p" className="font-light text-[17px] mt-20">
            I'VE WORKED WITH:
          </AnimateWrap>
          <AnimateWrap tag="h1" className="font-semibold text-7xl mt-20">
            Frontera, Gucci, Versace, innocent smoothies, Presson, Kris.T,
            Fashiona, Grotesk, StyleX, Rubik, Spectral, Juno.
          </AnimateWrap>
          <div className="flex justify-end mr-5">
            <AnimateWrap
              tag="img"
              src={image[0]}
              alt="pic0"
              className="w-[194px] h-[186px]  mt-[120px] max-[1124px]:w-[161px] max-[1124px]:h-[155px] hidden max-[1124px]:block max-[1124px]:mr-2"
            />
            <AnimateWrap
              tag="img"
              src={image[1]}
              alt="pic2"
              className="w-[194px] h-[186px]  mt-[120px] max-[1152px]:ml-0 max-[1124px]:w-[161px] max-[1124px]:h-[155px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
