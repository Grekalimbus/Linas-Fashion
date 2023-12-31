const ThirdDisplay = () => {
  return (
    <div className="container-2xl mx-auto bg-black xl:flex xl:justify-center ">
      <div className="mt-20  relative">
        <div className="xl:flex mt-10 ml-[110px] ">
          <h1 className="color-white text-bold text-9xl w-[20px]">02</h1>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=804,h=1152,fit=crop/linasyfhpf/Home_7-AE0xXDXkxGuLqpgk.png"
            alt="ModelMan"
            className=" w-[402px] h-[576px] z-[0] static ml-[140px] mt-20"
          />
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=594,h=624,fit=crop/linasyfhpf/Home_6-YyvLQNQb5bHZrQ2V.png"
            alt="flower"
            className="w-[297px] h-[312px] absolute z-20 mt-[130px] mr-[90px] "
          />
        </div>
        <div className="justify-start mt-10 ml-[110px]">
          <h2 className="color-white font-medium">FLOWER GARDEN</h2>
          <a className="underline color-white font-medium tracking-wide cursor-pointer">
            Learn more about the project →
          </a>
        </div>
      </div>
      <div className="mt-20 ml-[140px] relative ">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=1582,fit=crop/linasyfhpf/Home_8-m5KgxNx9kwhwwqNW.png"
          alt="ManModel2"
          className="static w-[503px] h-[791px] z-0"
        />
        <p className="color-white absolute font-medium z-10 bottom-10 right-10 ">
          MUA: Jessie Gein
        </p>
      </div>
    </div>
  );
};

export default ThirdDisplay;
