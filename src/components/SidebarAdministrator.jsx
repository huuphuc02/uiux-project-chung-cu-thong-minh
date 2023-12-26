import { useNavigate } from "react-router-dom";
function SidebarAdministrator() {
  const navigate = useNavigate();
  return (
    <div id="NewRootRoot" className="flex flex-row w-[20%] items-start">
      <div className="bg-white flex flex-col gap-16 w-full items-start pt-4 pb-4">
        <div className="flex flex-col gap-6 items-start">
          <div
            className="bg-[#99b7f0] items-center flex flex-row gap-6 w-full h-16 px-4 cursor-pointer"
            onClick={() => navigate("/homepageAdmin")}
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
            onClick={() => navigate("/SendNotifications")}
          >
            <img
              //src="https://file.rendit.io/n/iufyY4eJ3GoguopL2vOx.svg"
              src="https://file.rendit.io/n/Ooge7XD1qdCAhSuFCt1f.svg"
              alt="Vector"
              className="w-8"
            />
            <span className="mb-2 font-semibold text-[#a3a0a0]">
              Gửi thông báo
            </span>
            <img
              src="https://file.rendit.io/n/hUcHKod0fWeTRVMWtaVt.svg"
              alt="Ellipse"
              id="Ellipse"
              className="ml-2 w-4"
            />
          </div>
          <div
            className="flex flex-row gap-6 items-center cursor-pointer px-4 py-4 w-full hover:bg-[#99b7f0]"
            onClick={() => navigate("/statisticAdmin")}
          >
            <img
              src="https://file.rendit.io/n/FapPhxCkgv1XFtWzSiVW.svg"
              alt="Vector1"
              className="w-8"
            />
            <span className="font-semibold text-[#a3a0a0]">Thống kê</span>
          </div>
          <div
            className="flex flex-row gap-4 items-center cursor-pointer w-full px-4 hover:bg-[#99b7f0]"
            onClick={() => navigate("/setting")}
          >
            <img
              src="https://file.rendit.io/n/SB0SBYO5zKwkqsxqlQQk.svg"
              alt="Vector2"
              className="w-8"
            />
            <span className="font-semibold text-[#a3a0a0] w-1/2 text-left mt-3 ml-2">
              Cài đặt
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarAdministrator;
