const FifthDisplay = () => {
  return (
    <div className="mx-auto bg-[#fad003]  flex justify-center items-center pt-20 ">
      <div className="container w-full flex justify-center  relative mt-20 ">
        <h1 className="text-black font-bold text-8xl  top ml-20 w-[10%] h-[10%]">
          04
        </h1>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1282,fit=crop/linasyfhpf/Home_13-Yg2PkDkr39F5vkyM.png"
          alt="Model1"
          className="xl:w-[400px] xl:h-[521px] lg:w-[326px] lg:h-[425px] static z-[0] mt-[60px] ml-20 sm:w-[313px] sm:h-[408px]"
        />
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1242,fit=crop/linasyfhpf/Home_12-YNqLVxVkEjiR203R.png"
          alt="Model2"
          className="absolute w-[297px] h-[375px]  z-[1] xl:w-[297px] xl:h-[375px] bottom-20 left-20 lg:w-[264px] lg:h-[334px] sm:w-[232px] sm:h-[294px]"
        />
        <div className="z-[1] absolute bottom-0 left-[140px] ">
          <p className="text-black font-bold text-xl">YELLOW</p>
          <a className="text-black underline font-sansi cursor-pointer">
            Learn more about the project →
          </a>
        </div>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=1554,fit=crop/linasyfhpf/Home_14-dWxVaNakylUxl4Br.png"
          alt="Model3"
          className="w-[503px] h-[777px] xl:ml-[150px]  mb-[80px] lg:w-[410px] lg:h-[634px] lg:ml-[100px] sm:w-[394px] sm:h-[509px] sm:ml-10"
        />
        <p className="text-black font-sansi absolute z-[1] bottom-0">
          Model: Anna Fena
        </p>
        <p className="text-black font-sans absolute z-[1] right-0 bottom-0 mr-[150px]">
          MUA: Jessie Gein
        </p>
      </div>
    </div>
  );
};

export default FifthDisplay;
