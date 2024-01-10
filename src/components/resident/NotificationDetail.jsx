/* eslint-disable react/prop-types */
function NotificationDetail({ onClose, noti }) {
  return (
    <div
      id="ThongBaoRoot"
      className="bg-white flex z-30 flex-col gap-4 w-1/3 h-max text-left items-start pl-2 py-2 absolute right-72 rounded-lg"
    >
      <div className="flex flex-col ml-3 w-full items-start">
        <img
          src="https://file.rendit.io/n/REQRh50OYBT1MGV7eKam.svg"
          alt="OutlinedSuggestedSymbolX"
          className="absolute right-2 w-6 cursor-pointer"
          onClick={() => onClose()}
        />
        <div className="flex flex-row gap-8 w-full items-start">
          <img
            src="https://file.rendit.io/n/Rb9uDMPOjL6IQnq9yGbj.svg"
            alt="OutlinedSuggestedCircleInfo"
            className="mt-4 w-8"
          />
          <h2 className="text-lg font-bold leading-[31.2px] w-2/3">
            {noti?.title}
          </h2>
        </div>
      </div>
      <div className="flex flex-col ml-20 text-sm gap-2 w-4/5 items-start">
        <div className="leading-[22.4px] text-[#212121]">
          Thời gian: {noti?.time}
        </div>
        <div id="PhVND" className="leading-[22.4px] text-[#212121] mb-px">
          Nội dung: {noti?.description}
        </div>
      </div>
    </div>
  );
}

export default NotificationDetail;
