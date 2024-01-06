// import { useNavigate } from "react-router-dom";
import ManagerHeader from "../../components/manager/ManagerHeader";
import SidebarManager from "../../components/manager/SidebarManager";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Announce() {
  // const navigate = useNavigate()

  const [type, setType] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setType(location.state.doiTuong);
    }
  }, []);

  return (
    <div className="s-Screen">
      <ManagerHeader />
      <div className="flex">
        <SidebarManager tab={"Thông báo"} />
        <div className="w-[82%] bg-[#f5f5f5] px-8 py-4 pb-4">
          <h1 className="text-2xl font-bold text-left ">Gửi thông báo</h1>

          <div className=" w-full h-max rounded-lg flex flex-col">
            <div className="flex justify-start items-center mt-[43px] ml-[118px] mb-[62px] mr-[98px]">
              <h2 className="text-xl font-['Nunito_Sans'] font-bold w-1/3 text-start">
                Tiêu đề
              </h2>
              <input
                type="text"
                placeholder=""
                className="border-solid border-1 border-black text-[#adaaaa] shadow-[2px_2px_4px_1px_rgba(0,_0,_0,_0.5)]  w-2/3 h-10 items-start px-3 rounded-lg mr-2"
              />
            </div>
            <div className="flex flex-row  justify-start items-start ml-[118px] mb-[62px] mr-[98px]">
              <h2 className="text-xl font-['Nunito_Sans'] font-bold w-1/3 text-start">
                Nội dung
              </h2>
              <textarea
                type="text"
                rows={5}
                cols={50}
                placeholder="Nội dung của thông báo..."
                className="border-solid text-[#adaaaa] shadow-[2px_2px_4px_1px_rgba(0,_0,_0,_0.5)] bg-white flex flex-row  w-2/3 h-50 items-start px-3 rounded-lg mr-2"
              />
            </div>
            <div className="flex  justify-start items-center ml-[118px] mb-[62px] mr-[98px]">
              <h2 className="text-xl font-['Nunito_Sans'] font-bold w-1/3 text-start">
                Đối tượng gửi
              </h2>

              <div className="border-solid text-[#adaaaa] shadow-[2px_2px_4px_1px_rgba(0,_0,_0,_0.5)] bg-white flex flex-row w-1/3 h-10 px items-start mr-2">
                <select
                  name="role"
                  id="role"
                  className="w-full h-12 px-5"
                  // onChange={(e) => setRole(e.target.value)}
                >
                  {type === "Admin" ? (
                    <>
                      <option value="Resident">Dân cư</option>
                      <option selected value="Admin">
                        Quản trị
                      </option>
                      <option value="Manager">Quản lý</option>
                    </>
                  ) : (
                    ""
                  )}

                  {type === "Manager" ? (
                    <>
                      <option value="Resident">Dân cư</option>
                      <option value="Admin">Quản trị</option>
                      <option selected value="Manager">
                        Quản lý
                      </option>
                    </>
                  ) : (
                    ""
                  )}

                  {type === "Resident" ? (
                    <>
                      <option value="Resident">Dân cư</option>
                      <option value="Admin">Quản trị</option>
                      <option value="Manager">Quản lý</option>
                    </>
                  ) : (
                    ""
                  )}
                  {!type && (
                    <>
                      <option value="Resident">Dân cư</option>
                      <option value="Admin">Quản trị</option>
                      <option value="Manager">Quản lý</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className="flex justify-start items-center mt-[43px] ml-[118px] mb-[62px] mr-[98px]">
              <h2 className="text-xl font-['Nunito_Sans'] font-bold w-1/3 text-start">
                Thời gian
              </h2>
              <input
                type="date"
                placeholder=""
                className="border-solid pt-2 border-1 border-black text-[#adaaaa] shadow-[2px_2px_4px_1px_rgba(0,_0,_0,_0.5)] bg-white  w-1/3 h-10 items-start px-3 rounded-lg mr-2"
              />
            </div>

            <div className="flex justify-center items-center gap-10 ">
              <button className="flex flex-row  cursor-pointer items-start ">
                <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-full h-16 items-start pt-5 px-8 border-0 rounded-lg">
                  huỷ
                </div>
              </button>

              <button className="flex flex-row  cursor-pointer items-center justify-center ">
                <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] flex flex-row w-full h-16 items-start pt-5 px-8 rounded-lg">
                  Gửi
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Announce;
