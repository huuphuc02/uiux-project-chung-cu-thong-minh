import { useNavigate } from "react-router-dom";

function SidebarPolice() {
  const navigate = useNavigate();
  return (
    <div id="NewRootRoot" className="flex flex-row w-[18%] items-start">
      <div className="bg-white flex flex-col gap-16 w-full items-start pt-4 pb-4">
        <div className="flex flex-col gap-6 items-start">
          <div
            className="bg-[#99b7f0] items-center flex flex-row gap-6 w-full h-16 px-4 cursor-pointer"
            onClick={() => navigate("/homepagePolice")}
          >
            <img
              src="https://file.rendit.io/n/XZWscRXGASvVuDSsfZMI.svg"
              alt="OutlinedOtherLocationHome"
              className="w-8"
            />
            <span id="TrangCh" className="font-semibold text-white mt-1">
              Trang chủ
            </span>
          </div>
          <div
            className="flex flex-row px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] hover:text-white"
            onClick={() => navigate("/statisticsPolice")}
          >
            <img
              src="https://file.rendit.io/n/J7HUYVV5s0YfdV9Whctb.svg"
              alt="Settingssvgrepocom"
              id="Settingssvgrepocom"
              className="w-8"
            />
            <span className="mb-2 font-semibold text-[#a3a0a0]">Thống kê</span>
          </div>
          <div
            className="flex flex-row gap-4 items-center cursor-pointer w-full px-4 hover:bg-[#99b7f0]"
            onClick={() => navigate("/temporaryResidencePolice")}
          >
            <img
              src="https://file.rendit.io/n/awWdrMe5AXDBgOYlzQHr.svg"
              alt="Vector2"
              className="w-8"
            />
            <span className="font-semibold text-[#a3a0a0] w-1/2 text-left mt-3 ml-2">
              Tạm trú
            </span>
          </div>
          <div
            className="flex flex-row gap-4 items-center cursor-pointer w-full px-4 hover:bg-[#99b7f0]"
            onClick={() => navigate("/residenceAbsencePolice")}
          >
            <img
              src="https://file.rendit.io/n/awWdrMe5AXDBgOYlzQHr.svg"
              alt="Vector2"
              className="w-8"
            />
            <span className="font-semibold text-[#a3a0a0] w-1/2 text-left mt-3 ml-2">
              Tạm vắng
            </span>
          </div>
          <div className="flex flex-row gap-6 items-center cursor-pointer w-full px-4 py-4 hover:bg-[#99b7f0]">
            <img
              src="https://file.rendit.io/n/D1hrof5cdEEznu4EQwjR.svg"
              alt="Settingssvgrepocom"
              id="Settingssvgrepocom"
              className="w-8"
            />
            <div className="font-semibold text-[#a3a0a0] mt-2">Cài đặt</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarPolice;
