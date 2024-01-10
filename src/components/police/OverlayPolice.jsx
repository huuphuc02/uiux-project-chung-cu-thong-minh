import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupConfirm from "../PopupConfirm";

function OverlayPolice() {
  const navigate = useNavigate();
  const [popupLogout, setPopupLogout] = useState(false);
  const handleClosePopup = () => {
    setPopupLogout(false);
  };

  const handleConfirmAction = () => {
    setPopupLogout(false);
    navigate("/");
  };
  return (
    <div
      id="OverlayttincudanRoot"
      className="overflow-hidden z-20 bg-white flex flex-row w-1/5 items-start rounded-lg absolute right-10"
    >
      <div className="bg-white flex flex-col justify-center mr-0 pl-5 gap-8 w-full h-full pb-4 pt-2 items-start rounded-lg">
        <button
          id="NgXut"
          className="font-bold text-[#99b7f0] ml-28"
          onClick={() => setPopupLogout(true)}
        >
          Đăng xuất &#62;
        </button>
      </div>
      <PopupConfirm
        isOpen={popupLogout}
        onClose={handleClosePopup}
        onConfirm={handleConfirmAction}
        message="Bạn có chắc chắn muốn đăng xuất?"
      />
    </div>
  );
}

export default OverlayPolice;
