export const SmallDisplay = () => {
  return (
    <div className="w-full flex justify-center items-center mx-auto h-svh bg-[#04111b] pt-10">
      <div className="flex flex-col max-w-[420px] justify-center items-left p-8 pb-40">
        <h3
          className="font-bold word-wrap block"
          style={{ fontSize: "80px", color: "white" }}
        >
          Linas
        </h3>
        <p>FASHION PHOTOGRAPHY | AMSTERDAM</p>
        <p>THOEMKE@LINAS.COM</p>
        <img
          className="my-4"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
          alt="image3"
        />
        <div className="w-full flex justify-between ">
          <div className="w-[48%]">
            <img
              className="w-full h-auto"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,h=201,fit=crop/linasyfhpf/Home_2-m6L1x6xeZetk65zO.png"
              alt="image2"
            />
          </div>

          <div className="w-[48%]">
            <img
              className="w-full h-full"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=201,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png"
              alt="image1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
