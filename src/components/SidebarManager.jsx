import { useNavigate } from "react-router-dom";

function SidebarManager() {
  const navigate = useNavigate();
  return (
    <div id="NewRootRoot" className="flex flex-row w-[18%] items-start pr-2.5">
      <div className="bg-white flex flex-col gap-16 w-full items-start pt-4 pb-4">
        <div className="flex flex-col gap-6 items-start">
          <div className="bg-[#99b7f0] items-center flex flex-row gap-6 w-full h-16 px-4 cursor-pointer">
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
            className="flex flex-row gap-6 items-center cursor-pointer px-4 py-2 w-full hover:bg-[#99b7f0]"
            onClick={() => navigate("/familyRegister")}
          >
            <img
              src="https://file.rendit.io/n/0CcCWUKZp1sYS0JNo8O6.svg"
              alt="Vector"
              className="w-8"
            />
            <span className="font-semibold text-[#a3a0a0] w-1/2 text-left">Nhân Khẩu hộ khẩu</span>
          </div>


          <div
            className="flex flex-row gap-6 items-center cursor-pointer px-4 py-4 w-full hover:bg-[#99b7f0]"
            onClick={() => navigate("/announce")}
          >
            <img
              src="https://file.rendit.io/n/vhha8KyHeTcAZ9gLJbQD.svg"
              alt="Vector1"
              className="w-8"
            />
            <span className="font-semibold text-[#a3a0a0]">Gửi thông báo</span>
          </div>

          <div
            className="flex flex-row gap-6 items-center cursor-pointer w-full px-4 py-4 hover:bg-[#99b7f0]"
            onClick={() => navigate("/feeManager")}
          >
            <img
              src="https://file.rendit.io/n/MIfePN900jroITk4Amr7.svg"
              alt="Vector2"
              className="w-8"
            />
            <span className="font-semibold text-[#a3a0a0]">
              Xem khoản thu
            </span>
          </div>
          <div className="flex flex-row gap-6 items-center cursor-pointer w-full px-4 py-4 hover:bg-[#99b7f0]"
            onClick={() => navigate("/statistics")}
          >
            <img
              src="https://file.rendit.io/n/J7HUYVV5s0YfdV9Whctb.svg"
              alt="Settingssvgrepocom"
              id="Settingssvgrepocom"
              className="w-8"
            />
            <div className="font-semibold text-[#a3a0a0]">Thống kê</div>
          </div>
          <div className="flex flex-row gap-6 items-center cursor-pointer w-full px-4 py-4 hover:bg-[#99b7f0]">
            <img
              src="https://file.rendit.io/n/UJOuDzByRvGBLZHI8uE4.svg"
              alt="Settingssvgrepocom"
              id="Settingssvgrepocom"
              className="w-8"
            />
            <div className="font-semibold text-[#a3a0a0] ">Cài đặt</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarManager;
