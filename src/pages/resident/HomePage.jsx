import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import SidebarResident from "../../components/SidebarResident";
// import api from "../../services/api";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <Header />
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

export default HomePage;
