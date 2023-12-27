import { Fragment, useState } from "react";
import NotificationDetail from "./NotificationDetail";

function PopupNotification() {
  const [notiDetail, setNotiDetail] = useState(false);
  const [visible, setVisible] = useState(true);

  const toogleVisibility = () => {
    // Xử lý khi component con được đóng
    setNotiDetail(false);
  };
  return (
    <div>
      {visible ? (
        <div
          id="OverlaythongbaoRoot"
          className="bg-white overflow-hidden z-20 flex flex-col justify-center px-3 gap-2 w-[28%] h-max items-start py-2 rounded-lg absolute right-72"
        >
          <div
            id="Notification2"
            className="border-solid border-[#5387e9] bg-[#e8f0ff] flex flex-row gap-2 w-full h-max items-start pt-2 pl-2 border rounded"
          >
            <img
              src="https://file.rendit.io/n/WHLVbO4EwFBatULCQiWS.svg"
              alt="OutlinedSuggestedCircleInfo"
              className="w-5"
            />
            <div
              className="flex flex-col gap-1 items-start cursor-pointer"
              onClick={() => {
                setVisible(false);
                setNotiDetail(true);
              }}
            >
              <h3
                id="InfoNotification"
                className="text-left text-sm font-bold leading-[21.6px] text-[#212121]"
              >
                Đóng quỹ khuyến học năm học 2023-2024
              </h3>
              <span className="leading-[22.4px] text-[#212121] text-sm">
                16/10/2023
              </span>
            </div>
          </div>
          <div
            id="Notification1"
            className="border-solid cursor-pointer border-[#ffd8d8] bg-red-100 flex flex-col justify-center pt-2 pl-2 gap-1 w-full h-max items-start border rounded"
          >
            <div className="flex flex-row gap-2 items-start">
              <img
                src="https://file.rendit.io/n/Pd9z9kah3ESTsIL8wj36.svg"
                alt="OutlinedSuggestedTriangle"
                className="w-5"
              />
              <h3 className="text-sm font-bold leading-[21.6px] text-[#212121]">
                Error notification
              </h3>
            </div>
            <span className="leading-[22.4px] text-sm text-[#212121] text-left">
              Notification message. Here will be information.
            </span>
          </div>
          <div
            id="Notification"
            className="border-solid cursor-pointer border-[#c0ecd4] bg-[#f1fff4] flex flex-col justify-center pt-2 pl-2 gap-1 w-full h-max items-start border rounded"
          >
            <div className="flex flex-row gap-2 items-start">
              <img
                src="https://file.rendit.io/n/GVj3Peoll2boyi95W12Z.svg"
                alt="OutlinedSuggestedCircleCheck"
                className="w-5"
              />
              <div className="text-sm font-bold leading-[21.6px] text-[#212121]">
                Success notification
              </div>
            </div>
            <div className="leading-[22.4px] text-sm text-left text-[#212121]">
              Notification message. Here will be information.
            </div>
          </div>
        </div>
      ) : (
        Fragment
      )}
      {notiDetail && <NotificationDetail onClose={toogleVisibility} />}
    </div>
  );
}

export default PopupNotification;
