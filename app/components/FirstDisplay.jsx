const FirstDisplay = ({ valueDisplay }) => {
  // create funck to generate number value. depend on that mappin display
  return valueDisplay <= 950 ? (
    <div className="w-full flex justify-center items-center mx-auto h-svh bg-[#04111b] pt-10">
      <div className="flex flex-col max-w-[360px] justify-center items-center">
        <h3 className="font-bold word-wrap block" style={{ fontSize: "80px" }}>
          Linas
        </h3>
        <p>FASHION PHOTOGRAPHY | AMSTERDAM</p>
        <p>THOEMKE@LINAS.COM</p>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
          alt="image3"
        />
        <div className="w-full flex justify-between">
          <div>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=201,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png"
              alt="image1"
            />
          </div>
          <div>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,h=201,fit=crop/linasyfhpf/Home_2-m6L1x6xeZetk65zO.png"
              alt="image2"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full mx-auto h-svh bg-[#04111b] pt-10">
      <div className="max-w-7xl mx-auto">
        <div className="h-full flex justify-between">
          <div className="flex flex-col justify-between">
            <div className="flex space-x-3">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=201,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png"
                alt="image1"
              />

              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,h=201,fit=crop/linasyfhpf/Home_2-m6L1x6xeZetk65zO.png"
                alt="image2"
              />
            </div>
            <div>
              <h3
                className="font-bold word-wrap block"
                style={{ fontSize: "200px" }}
              >
                Linas
              </h3>
              <div className="flex justify-between">
                <p>FASHION PHOTOGRAPHY | AMSTERDAM</p>
                <p>THOEMKE@LINAS.COM</p>
              </div>
            </div>
          </div>
          <div className="w-6/12">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
              alt="image3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstDisplay;
