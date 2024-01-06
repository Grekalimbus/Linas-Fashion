export const LargeDisplay = () => {
  return (
    <div className="w-full mx-auto bg-[#04111b] pb-32 pt-16">
      <div className="conteiner max-w-6xl mx-auto flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex space-x-3">
            <img
              className="object-cover"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=201,fit=crop/linasyfhpf/Home_1-mjEDk3krBEINqzOl.png"
              alt="image1"
            />

            <img
              className="object-cover"
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

        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=673,fit=crop/linasyfhpf/Home_3-YBgxMPMkXLHyZX5g.png"
          alt="image3"
        />
      </div>
    </div>
  );
};
