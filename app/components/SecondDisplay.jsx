const SecondDisplay = () => {
  return (
    <section className="mx-auto flex-grid flex ">
      <div className="mt-20">
        <h1 className="font-sans text-8xl absolute mt-10 ml-10">01</h1>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1418,h=1610,fit=crop/linasyfhpf/Home_4-YKbxwZe9P2uRE8Va.png"
          alt="Anna1"
          width={709}
          height={805}
          className="static"
        />
        <p className="font-sans absolute -mt-[57px] ml-10 text-sm color-black">
          CLIENT: "DARE" shoes
        </p>
      </div>
      <div className="ml-[110px] mt-20">
        <h2 className="mb-[40px]">
          Model: Anna Fenna <br />
          MUA: Jessie Gein
        </h2>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1400,fit=crop/linasyfhpf/Home_5-ALpGwawkbqulDkvq.png"
          alt=""
          width={400}
          height={569}
          className="w-[400px] h-[569px]"
        />
        <h4 className="font-sans font-semibold mt-[64px]">HEAD OVER HEELS</h4>
        <a className="underline whitespace-normal cursor-pointer">
          Learn more about the project
        </a>
      </div>
    </section>
  );
};

export default SecondDisplay;
