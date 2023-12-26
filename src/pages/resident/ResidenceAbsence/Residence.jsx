import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import SidebarResident from "../../../components/SidebarResident";
import { useNavigate } from "react-router-dom";

function Residence() {
  const [resident, setResident] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setResident(JSON.parse(localStorage.getItem("resident")));
  }, []);
  return (
    <div>
      <Header />
      <div className="flex">
        <SidebarResident />
        <div
          id="DesktopRoot"
          className="bg-[#f5f5f5] flex flex-col gap-10 w-full items-start pt-2 pb-6 px-10"
        >
          <div className="flex flex-col justify-between gap-4 w-4/5 items-start">
            <div className="flex flex-col justify-between gap-5 w-full items-start">
              <h1 id="NgKTmTr" className="text-[22px] font-bold">
                Đăng ký tạm trú
              </h1>
              <div className="flex flex-col gap-4 w-full items-start">
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold ml-[144px]">
                    Họ và tên (*):
                  </label>
                  <input
                    defaultValue={resident.fullname}
                    className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    CCCD (*):
                  </label>
                  <input
                    defaultValue={resident.CCCD}
                    className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Ngày sinh (*):
                  </label>
                  <input
                    defaultValue={resident.dob}
                    className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Giới tính (*):
                  </label>
                  <input
                    defaultValue={resident.gender}
                    className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    SĐT liên hệ (*):
                  </label>
                  <input
                    defaultValue={resident.Sdt}
                    className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Địa chỉ thường trú (*):
                  </label>
                  <input className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Địa chỉ đăng ký tạm trú (*):
                  </label>
                  <input className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Ngày bắt đầu (*):
                  </label>
                  <input
                    placeholder="Định dạng dd/mm/yyyy"
                    className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Ngày kết thúc (*):
                  </label>
                  <input
                    placeholder="Định dạng dd/mm/yyyy"
                    className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Lý do:
                  </label>
                  <input className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"></input>
                </div>
              </div>
              <div className="flex flex-row ml-[510px] gap-8 w-1/3 items-start">
                <button
                  className="text-center text-lg uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-1/2 h-10 items-start pt-2 pl-8 border-0 rounded-lg"
                  onClick={() => navigate("/residenceAbsence")}
                >
                  huỷ
                </button>
                <button
                  className="text-center text-lg uppercase text-white bg-[#99b7f0] flex flex-row w-1/2 h-10 items-start pt-2 pl-10 rounded-lg"
                  onClick={() => {
                    alert(
                      "Đăng ký tạm trú thành công!. Đơn đăng ký của bạn sẽ được gửi công an phê duyệt."
                    );
                    navigate("/residenceAbsence");
                  }}
                >
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Residence;
