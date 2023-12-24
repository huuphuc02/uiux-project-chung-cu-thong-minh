// import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import SidebarManager from "../../components/SidebarManager";
function Statistics() {
  // const navigate = useNavigate()
  return (
    <div className="s-Screen">
      <Header />
      <div className="flex">
        <SidebarManager />
        <div className="w-[82%] bg-[#f5f5f5] px-8 py-4 pb-4">
          <h1 className="text-4xl font-bold text-left mb-[26px]">Thống kê cư dân</h1>
          <div className="flex gap-28 mb-[38px]">
            <div className="flex flex-row w-full items-start">
              <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#fffefe] flex flex-row gap-2 w-full h-[141px] font-['Nunito_Sans'] items-start pt-4 px-10 rounded-lg">
                <div className="text-6xl font-bold text-[#99b7f0] mt-5">40</div>
                <div id="CnH" className="text-5xl mt-8">
                  căn hộ{" "}
                </div>
              </div>
            </div>

            <div className="flex flex-row w-full items-start">
              <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-center pt-4 gap-4 w-full h-[141px] font-['Nunito_Sans'] items-start rounded-lg">
                <div className="text-center text-6xl font-bold text-[#99b7f0] mt-6">
                  100
                </div>
                <div id="CDn" className="text-5xl mt-10">
                  cư dân
                  {"  "}
                </div>
              </div>
            </div>

          </div>
          <div className="flex flex-row items-start">
            <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] flex flex-row  h-16 items-start pt-4 pl-10 pr-12 rounded-lg">
              Xem chi tiết
            </div>
          </div>

          <h1 className="text-4xl font-bold text-left my-[26px]">Thống kê khoản phí</h1>
          <div className="bg-white w-full h-[385px] rounded-lg flex flex-col justify-center items-center">
            <img
              src="https://file.rendit.io/n/fgT4co7fuadsqewAuzgm.svg"
              alt="Doughnut"
              id="DoughnutRoot"
              className="w-min mb-6"
            />
            <div className="flex flex-row gap-10 w-[80%] font-sans items-start">
              <div className="flex flex-row gap-6 w-full items-center justify-between">
                <div className="flex flex-col gap-1 w-1/4 items-start">
                  <div className="flex flex-row gap-3 w-full items-start">
                    <img
                      src="https://file.rendit.io/n/MFiVeFljhRr9dSy4bN1L.svg"
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

                <div className="flex flex-col gap-1 w-1/4 items-start">
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

                <div className="flex flex-col gap-1 w-1/4 items-start">
                  <div className="flex flex-row gap-3 w-full items-start">
                    <img
                      src="https://file.rendit.io/n/RNHDRsvagmQ4pNn27VIo.svg"
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

                <div className="flex flex-col gap-1 w-1/4 items-start">
                  <div className="flex flex-row gap-3 w-full items-start">
                    <img
                      src="https://file.rendit.io/n/eh2tjljTkcBke8qCMQBI.svg"
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

              </div>
            </div>

          </div>

          <div className="flex flex-row items-start mt-8">
            <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] flex flex-row  h-16 items-start pt-4 pl-10 pr-12 rounded-lg">
              Xem chi tiết
            </div>
          </div>
        </div>

      </div>

    </div>

  );
}
export default Statistics;