function HomePage() {
    return(
    <div className="h-screen">
      <div id="NewRootRoot" className="w-full items-start">
      <div className="border-solid border-b border-[#e2e2e2] pl-2 bg-white flex flex-row gap-16 w-full items-center">
        <div className="flex flex-row gap-12 w-3/5 items-start">
          <div className="flex flex-row items-center w-2/5">
            <img
              src="https://file.rendit.io/n/Kfv6Ijyi67YATraEbp0v.png"
              alt="ActionTextRotationDown icon"
              className="w-16"
            />
            <span className="text-xl font-bold mt-2 w-2/5">
              Chung cư thông minh
            </span>
          </div>
          <div className="text-[#adaaaa] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row mt-4 w-3/5 h-10 items-center pl-2 rounded-lg py-2">
            <LuSearch />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="w-full h-10 pl-2 ml-2"
            />
          </div>
        </div>
        <div className="flex flex-row mt-3 gap-8 w-2/5 items-start">
          <div className="flex flex-row mt-3 items-start cursor-pointer">
            <img
              src="https://file.rendit.io/n/iBFcxEGp8ZRjB80YBCkZ.png"
              alt="Image1"
              id="Image1"
              className="w-6"
            />
            <span id="ThngBo" className="text-lg text-[#777676]">
              Thông báo
            </span>
          </div>
          <div className="flex flex-row gap-4 w-3/5 items-start">
            <img
              src="https://file.rendit.io/n/bsosJvLrPusOJgxMZnsr.svg"
              alt="Ellipse"
              id="Ellipse"
              className="mb-1 w-12"
            />
            <div className="cursor-pointer flex flex-row gap-2 w-3/5 items-center">
              <div
                id="LHuTiCDn1"
                className="font-semibold text-left"
              >
                {/* {resident.fullname} */}
                <br />
                <span className="text-[#686868]">Công an</span>
              </div>
              <span
                className="ml-4 text-center text-4xl"
                onClick={() => setOverlay(!overlay)}
              >
                ...
              </span>
            </div>
          </div>
        </div>
        </div>
    </div>
      <div className="flex">
        <SidebarResident />
        <div className="flex flex-col w-4/5 items-start mt-2 mb-4">
          <div className="flex flex-col gap-3 w-full items-start">
            <h1
              className="text-[22px] font-bold ml-1 cursor-pointer"
              onClick={() => navigate("/buildingInfo")}
            >
              Thông tin chung cư
            </h1>
            <img
              src="https://file.rendit.io/n/PK3kkNhDEvLADNM0od7k.png"
              alt="Image1"
              id="Image1"
              className="h-4/5 w-full"
            />
          </div>
          <div className="flex flex-col gap-5 w-full items-start">
            <div className="flex flex-col ml-1 gap-2 w-full items-start">
              <h1 className="text-[22px] font-bold">Nộp phí</h1>
              <div
                className="bg-[#99b7f0] flex flex-col justify-end gap-2 w-full items-start pt-3 px-4 rounded-lg"
                onClick={() => navigate("/listofFees")}
              >
                <div className="flex flex-row gap-20 w-full items-start">
                  <div
                    id="Ellipse"
                    className="bg-[url(https://file.rendit.io/n/iZIcDxezeFR3heojz7FZ.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-2 w-16 h-16 items-start"
                  >
                    <img
                      src="https://file.rendit.io/n/ouCg5lNxbGlZrM65WrSP.png"
                      alt="Image2"
                      id="Image2"
                      className="w-10"
                    />
                  </div>
                  <div className="bg-[url(https://file.rendit.io/n/EsxO85VbvjlPZvl0AuBg.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center mr-px pt-3 w-16 h-16 items-start">
                    <img
                      src="https://file.rendit.io/n/1Y5V5JwAdtv67I0QRUft.png"
                      alt="ActionTextRotationAngledown icon"
                      id="Image3"
                      className="mt-0 w-10"
                    />
                  </div>
                  <div
                    id="Ellipse5"
                    className="bg-[url(https://file.rendit.io/n/EsxO85VbvjlPZvl0AuBg.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center mr-px pt-4 w-16 h-16 items-start"
                  >
                    <img
                      src="https://file.rendit.io/n/QUBrOHshkFQJP9X5ZJ1k.png"
                      alt="Image8"
                      id="Image8"
                      className="mt-0 w-8"
                    />
                  </div>
                  <div
                    id="Ellipse4"
                    className="bg-[url(https://file.rendit.io/n/EsxO85VbvjlPZvl0AuBg.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center mr-px pt-3 w-16 h-16 items-start"
                  >
                    <img
                      src="https://file.rendit.io/n/B2YKXicEB5q6kHjMf3B6.png"
                      alt="Image7"
                      id="Image7"
                      className="mt-0 w-10"
                    />
                  </div>
                  <div
                    id="Ellipse1"
                    className="bg-[url(https://file.rendit.io/n/EsxO85VbvjlPZvl0AuBg.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center mr-px pt-3 w-16 h-16 items-start"
                  >
                    <img
                      src="https://file.rendit.io/n/JkQsFgRAMcVygfD5Ezm0.png"
                      alt="Image4"
                      id="Image4"
                      className="w-10"
                    />
                  </div>
                  <div
                    id="Ellipse2"
                    className="bg-[url(https://file.rendit.io/n/EsxO85VbvjlPZvl0AuBg.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row mr-px w-16 h-16 items-start pt-3 px-2"
                  >
                    <img
                      src="https://file.rendit.io/n/zKl9nX1Uv7jlomEKNn1d.png"
                      alt="ActionLanguage icon"
                      id="Image5"
                      className="mt-0 w-12"
                    />
                  </div>
                  <div
                    id="Ellipse3"
                    className="bg-[url(https://file.rendit.io/n/EsxO85VbvjlPZvl0AuBg.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-16 items-start pt-3 px-3"
                  >
                    <img
                      src="https://file.rendit.io/n/FE194Yi0qRtoq2OntfXn.png"
                      alt="ImageLoupe icon"
                      id="Image6"
                      className="mb-2 w-12"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-20 w-full items-start">
                  <div className="flex flex-row gap-[76px] items-start">
                    <span className="text-center text-white">Phí bảo trì</span>
                    <span className="text-center text-white">Tiền điện</span>
                    <span id="TinNc" className="text-center text-white">
                      Tiền nước
                    </span>
                    <span className="text-center text-white">Tiền quỹ</span>
                    <span id="TinGiXe" className="text-center text-white">
                      Tiền gửi xe
                    </span>
                    <span className="text-center text-white">Internet</span>
                    <span id="XemThm" className="text-center text-white">
                      Xem thêm
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-12 w-full items-start">
              <div className="flex flex-col gap-4 w-1/2 items-start">
                <div className="text-[22px] font-bold ml-1">
                  Đăng ký tạm trú tạm vắng
                </div>
                <div className="relative flex flex-row w-full items-start">
                  <div className="bg-[#99b7f0] relative flex flex-col cursor-pointer justify-center gap-6 w-full h-48 items-center rounded-lg">
                    <div className="relative w-1/3 items-center justify-center">
                      <h2 className="text-center text-[22px] text-white h-10">
                        Tạm trú
                      </h2>
                      <h3 className="text-center text-xl underline text-[#efecec]">
                        Thủ tục tạm trú
                      </h3>
                    </div>
                    <button
                      className="text-center text-lg uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-1/3 h-14 pl-9 items-start pt-4 border-0 rounded-lg"
                      onClick={() => navigate("/residence")}
                    >
                      đăng ký
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-1/2 items-start">
                <div className="bg-[#99b7f0] relative flex flex-col justify-center gap-6 w-full mt-12 h-48 items-center rounded-lg">
                  <div className="w-1/2 items-center">
                    <h2
                      id="TmVng1"
                      className="text-center text-[22px] text-white h-10 justify-center"
                    >
                      Tạm vắng
                    </h2>
                    <h3
                      id="ThTcTmVng"
                      className="text-center text-xl underline text-[#efecec]"
                    >
                      Thủ tục tạm vắng
                    </h3>
                  </div>
                  <button
                    className="text-center text-lg uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-1/3 pl-9 h-14 items-start pt-4 border-0 rounded-lg"
                    onClick={() => navigate("/absence")}
                  >
                    đăng ký
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}