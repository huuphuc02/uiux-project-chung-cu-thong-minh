import { useNavigate } from "react-router-dom";
import AdministratorHeader from "../../components/AdministratorHeader";
import SidebarAdministrator from "../../components/SidebarAdministrator";
function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="h-screen">
      <AdministratorHeader />
      <div className="flex">
        <SidebarAdministrator />
        <div id="NewRootRoot" className="flex flex-row w-full items-start">
          <div className="bg-white w-full h-[141px] rounded-lg">
            <div className="text-6xl font-['Nunito_Sans'] font-bold text-[#99b7f0] bg-white flex flex-row w-full h-[141px] items-start pt-4 px-10 rounded-lg">
              100
              <div id="CnHRoot" className="text-5xl font-['Nunito_Sans'] w-2/5 text-left text-black">
                căn hộ{" "}
              </div>
              <div className="text-center text-6xl font-['Nunito_Sans'] font-bold text-[#99b7f0] w-min">
                364
              </div>
              <div id="CDnRoot" className="text-5xl font-['Nunito_Sans'] w-1/5 text-black">
                cư dân
                {"  "}
              </div>
            </div>
            <div id="ThngKRoot" className="text-3xl font-['Nunito_Sans'] font-bold text-[#4e4e4e] w-1/5">
              Thống kê{" "}
            </div>
            <div
              id="LightDoughnutChartRoot"
              className="flex flex-row justify-center pt-8 gap-10 w-full font-sans items-start"
            >
              <div className="flex flex-col mt-[288px] gap-1 w-24 items-start">
                <div className="flex flex-row gap-3 w-24 items-start">
                  <img
                    src="https://file.rendit.io/n/MFiVeFljhRr9dSy4bN1L.svg"
                    alt="Bullet"
                    id="Bullet"
                    className="w-4"
                  />
                  <div id="InLt1" className="text-xs font-medium text-black/38">
                    Điện - 01 <span className="text-xs font-sans">(lt)</span>
                  </div>
                </div>
                <div className="font-medium text-black/87 ml-6">12,423</div>
              </div>
              <div className="flex flex-col mb-8 gap-12 w-2/3 items-start">
                <img
                  src="https://file.rendit.io/n/fgT4co7fuadsqewAuzgm.svg"
                  alt="Doughnut"
                  id="Doughnut"
                />
                <div className="flex flex-row ml-1 gap-6 w-full font-sans items-start">
                  <div className="flex flex-col gap-1 w-1/3 items-start">
                    <div className="flex flex-row gap-3 w-full items-start">
                      <img
                        src="https://file.rendit.io/n/4rtyJurxj3cOVHEBlNwO.svg"
                        alt="Bullet1"
                        id="Bullet1"
                        className="w-4"
                      />
                      <div id="PhThuLt1" className="text-xs font-medium text-black/38">
                        Phụ thu - 01 <span className="text-xs font-sans">(lt)</span>
                      </div>
                    </div>
                    <div className="font-medium text-black/87 ml-6">12,423</div>
                  </div>
                  <div className="flex flex-col mr-px gap-1 w-1/3 items-start">
                    <div className="flex flex-row gap-3 w-full items-start">
                      <img
                        src="https://file.rendit.io/n/RNHDRsvagmQ4pNn27VIo.svg"
                        alt="Bullet2"
                        id="Bullet2"
                        className="w-4"
                      />
                      <div id="DchVLt1" className="text-xs font-medium text-black/38">
                        Dịch vụ - 01 <span className="text-xs font-sans">(lt)</span>
                      </div>
                    </div>
                    <div className="font-medium text-black/87 ml-6">12,423</div>
                  </div>
                  <div className="flex flex-col gap-1 w-24 font-sans items-start">
                    <div className="flex flex-row gap-3 w-24 items-start">
                      <img
                        src="https://file.rendit.io/n/eh2tjljTkcBke8qCMQBI.svg"
                        alt="Bullet3"
                        id="Bullet3"
                        className="w-4"
                      />
                      <div id="NcLt1" className="text-xs font-medium text-black/38 w-4/5">
                        Nước - 01 <span className="text-xs font-sans">(lt)</span>
                      </div>
                    </div>
                    <div className="font-medium text-black/87 ml-6">12,423</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-3xl font-['Nunito_Sans'] font-bold text-[#4e4e4e] w-1/5 mb-4 ml-10">
              Gửi thông báo
            </div>
            <div className="flex ml-11">
              <button
                id="ButtonRoot"
                className="flex w-1/5 cursor-pointer mx-2 mb-8 transform hover:scale-105 hover:bg-[#5387e9]"
              >
                <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] pt-5 w-full h-16 items-start rounded-lg">
                  Cư dân
                </div>
              </button>
              <button
                id="ButtonRoot"
                className="flex w-1/5 cursor-pointer mx-20 mb-8"
              >
                <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] pt-5 w-full h-16 items-start rounded-lg">
                  Quản lý
                </div>
              </button>
              <button
                id="ButtonRoot"
                className="flex w-1/5 cursor-pointer mx-3 mb-8"
              >
                <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] pt-5 w-full h-16 items-start rounded-lg">
                  Quản trị
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
