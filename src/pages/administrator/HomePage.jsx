import { useNavigate } from "react-router-dom";
import AdministratorHeader from "../../components/administrator/AdministratorHeader";
import SidebarAdministrator from "../../components/administrator/SidebarAdministrator";
function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <AdministratorHeader />
      <div className="flex">
        <SidebarAdministrator tab={"Trang chủ"} />
        <div
          id="NewRootRoot"
          className="flex flex-row w-4/5 items-start bg-[#f5f5f5]"
        >
          <div className=" w-full h-max rounded-lg">
            <div className="gap-16 flex flex-row w-full h-max mb-8 items-start pt-4 px-10 rounded-lg mt-2">
              <div
                id="CnHRoot"
                className="bg-white rounded-lg pl-16 items-center py-8 mr-8 text-5xl font-['Nunito_Sans'] w-2/5 text-left text-black ml-4"
              >
                <span className="text-5xl font-['Nunito_Sans'] mr-8 font-bold text-[#99b7f0]">
                  40
                </span>
                căn hộ
              </div>
              <div
                id="CnHRoot"
                className="bg-white rounded-lg pl-16 items-center py-8 mr-8 text-5xl font-['Nunito_Sans'] w-2/5 text-left text-black ml-4"
              >
                <span className="text-5xl font-['Nunito_Sans'] mr-8 font-bold text-[#99b7f0]">
                  100
                </span>
                cư dân
              </div>
            </div>
            <h1
              id="ThngKRoot"
              className="text-3xl font-['Nunito_Sans'] font-bold text-[#4e4e4e] w-1/5"
            >
              Thống kê
            </h1>
            <div
              id="LightDoughnutChartRoot"
              className="flex flex-row justify-center pt-8 gap-10 w-full font-sans items-start"
            >
              <div className="flex flex-col mt-[264px] gap-1 w-24 items-start">
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
                  className="w-1/3"
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
                      <div
                        id="PhThuLt1"
                        className="text-xs font-medium text-black/38"
                      >
                        Phụ thu - 01{" "}
                        <span className="text-xs font-sans">(lt)</span>
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
                      <div
                        id="DchVLt1"
                        className="text-xs font-medium text-black/38"
                      >
                        Dịch vụ - 01{" "}
                        <span className="text-xs font-sans">(lt)</span>
                      </div>
                    </div>
                    <div className="font-medium text-black/87 ml-6">12,423</div>
                  </div>
                  <div className="flex flex-col gap-1 w-28 font-sans items-start">
                    <div className="flex flex-row gap-2 w-24 items-start">
                      <img
                        src="https://file.rendit.io/n/eh2tjljTkcBke8qCMQBI.svg"
                        alt="Bullet3"
                        id="Bullet3"
                        className="w-4"
                      />
                      <div
                        id="NcLt1"
                        className="text-xs font-medium text-black/38 w-full"
                      >
                        Nước - 01{" "}
                        <span className="text-xs font-sans">(lt)</span>
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
                className="flex w-1/5 cursor-pointer mx-2 mb-8"
                onClick={() => navigate("/SendNotifications")}
              >
                <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] pt-4 w-full h-14 items-start rounded-lg">
                  Cư dân
                </div>
              </button>
              <button
                id="ButtonRoot"
                className="flex w-1/5 cursor-pointer mx-20 mb-8"
                onClick={() => navigate("/SendNotifications")}
              >
                <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] pt-4 w-full h-14 items-start rounded-lg">
                  Quản lý
                </div>
              </button>
              <button
                id="ButtonRoot"
                className="flex w-1/5 cursor-pointer mx-3 mb-8"
                onClick={() => navigate("/SendNotifications")}
              >
                <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] pt-4 w-full h-14 items-start rounded-lg">
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
