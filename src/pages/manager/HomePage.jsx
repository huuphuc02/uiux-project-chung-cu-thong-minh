import { useNavigate } from "react-router-dom";
import ManagerHeader from "../../components/manager/ManagerHeader";
import SidebarManager from "../../components/SidebarManager";

function HomePage() {

  const navigate = useNavigate()

  return (
    <div className="h-screen">
      <ManagerHeader />
      <div className="flex">
        <SidebarManager />
        <div className="flex flex-col w-4/5 items-start mt-2 mb-4 ">
          <div className="flex flex-col gap-3 w-full items-start">
            <h1 className="text-[22px] font-bold ml-1 cursor-pointer" onClick={() => navigate('/buildingInfo')}>Thông tin chung cư</h1>
            <img
              src="https://file.rendit.io/n/PK3kkNhDEvLADNM0od7k.png"
              alt="Image1"
              id="Image1"
              className="h-4/5 w-full"
            />
          </div>
          <div className="flex flex-col gap-5 w-full items-start">
            <div className="flex ml-1 gap-16 w-full items-start">
              <div className="flex flex-col w-1/4 items-start">
                <h1 className="text-[22px] font-bold">Tạo khoản thu</h1>
                <div className="flex flex-row w-full justify-center cursor-pointer"
                  onClick={() => {
                    navigate("/feeManager", {
                      state: {
                        isShowNewFee: true,
                      }
                    })
                  }}
                >
                  <div className="bg-[#99b7f0] flex flex-col justify-center items-center gap-1 w-full font-['Nunito_Sans'] pt-2 px-10 rounded-lg py-2.5">
                    <div
                      id="Ellipse"
                      className="bg-[url(https://file.rendit.io/n/EsxO85VbvjlPZvl0AuBg.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-16 h-16 items-start pt-3 px-2"
                    >
                      <img
                        src="https://file.rendit.io/n/8GZhrK1tyZQu0NhFZs9d.png"
                        alt="Image1"
                        id="Image1"
                        className="w-12"
                      />
                    </div>
                    <div className="text-center font-semibold text-white ml-px">
                      Tạo khoản thu mới
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-3/4 items-start">
                <h1 className="text-[22px] font-bold">Quản lý</h1>
                <div className="flex flex-row w-full ">
                  <div className="bg-[#99b7f0] flex gap-2 w-3/4 font-['Nunito_Sans'] pt-2 px-5 rounded-lg">
                    <div className="flex flex-col gap-1 w-20 items-center my-1">
                      <img
                        src="https://file.rendit.io/n/Af309ODumlsayVFs9pZo.svg"
                        alt="Group2"
                        className="ml-2 w-16"
                      />
                      <div className="text-center font-semibold text-white">Hợp đồng</div>
                    </div>

                    <div className="flex flex-col gap-1 w-20 items-center my-1">
                      <img
                        src="https://file.rendit.io/n/96xRVUWVrkVKPN8kGW8R.svg"
                        alt="Group"
                        className="ml-2 w-16"
                      />
                      <div className="text-center font-semibold text-white">Dịch vụ</div>
                    </div>

                    <div className="flex flex-col gap-1 w-20 items-center my-1">
                      <img
                        src="https://file.rendit.io/n/biNdb4kRi47SRlHt6WTG.svg"
                        alt="Group"
                        className="ml-2 w-16"
                      />
                      <div className="text-center font-semibold text-white">Tài sản</div>
                    </div>

                    <div className="flex flex-col gap-1 w-20 items-center my-1">

                      <img
                        src="https://file.rendit.io/n/53xcQMBUZte1bRMJ80kq.svg"
                        alt="Group"
                        className="ml-2 w-16"
                      />

                      <div className="text-center font-semibold text-white">Tài chính</div>
                    </div>


                    <div className="flex flex-col gap-1 w-20 items-center my-1">
                      <div className="flex flex-row w-16 items-center">
                        <div className="flex flex-row w-16 items-center">
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
                      </div>
                      <div className="text-center font-semibold text-white">Xem thêm</div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
            <div className="flex flex-row gap-12 w-1/2 items-start">
              <div className="flex flex-col gap-2 w-full font-['Nunito_Sans'] items-start">
                <div className="text-3xl font-bold text-[#4e4e4e]">Gửi thông báo</div>
                <div className="flex flex-row justify-between w-full items-start">
                  <div className="text-center text-xl uppercase bg-[#99b7f0] flex flex-row justify-center mt-px pt-5 w-1/4 h-16 items-start rounded-lg cursor-pointer"
                    onClick={() => {
                      navigate("/announce", {
                        state: {
                          doiTuong: "Resident",
                        }
                      })
                    }}
                  >
                    Cư dân
                  </div>
                  <div className="text-center text-xl uppercase bg-[#99b7f0] flex flex-row justify-center pt-5 w-1/4 h-16 items-start rounded-lg cursor-pointer"
                    onClick={() => {
                      navigate("/announce", {
                        state: {
                          doiTuong: "Manager",
                        }
                      })
                    }}
                  >
                    quản lý{" "}
                  </div>
                  <div className="text-center text-xl uppercase bg-[#99b7f0] flex flex-row justify-center pt-5 w-1/4 h-16 items-start rounded-lg cursor-pointer"
                    onClick={() => {
                      navigate("/announce", {
                        state: {
                          doiTuong: "Admin",
                        }
                      })
                    }}
                  >
                    quản trị{" "}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage;
