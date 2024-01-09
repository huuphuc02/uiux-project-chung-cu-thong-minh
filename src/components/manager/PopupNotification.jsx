import { Fragment, useEffect, useState } from "react";
import NotificationDetail from "./NotificationDetail";

function PopupNotification() {
  const [notiDetail, setNotiDetail] = useState(false);
  const [visible, setVisible] = useState(true);
  const [listNoti, setListNoti] = useState([]);
  const [notiSelected, setNotiSelected] = useState();

  const toogleVisibility = () => {
    // Xử lý khi component con được đóng
    setNotiDetail(false);
  };

  useEffect(() => {
    const getListNotification = async () => {
      let response = await fetch(
        `http://localhost:3001/thongbao?target=Manager`
      );
      const data = await response.json();
      setListNoti(data);
      console.log(listNoti);
    };
    getListNotification();
  }, []);

  const handleNotiSelected = (id) => {
    const noti = listNoti.find((noti) => noti.id === id);
    console.log(noti);
    setNotiSelected(noti);
  };
  return (
    <div>
      {visible ? (
        <div
          id="OverlaythongbaoRoot"
          className="bg-white overflow-hidden z-20 flex flex-col justify-center px-3 gap-2 w-[28%] h-max items-start py-2 rounded-lg absolute right-72"
        >
          {listNoti ? (
            listNoti.map((noti, key) => {
              return (
                <div
                  onClick={() => handleNotiSelected(noti.id)}
                  key={key}
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
                      {noti?.title}
                    </h3>
                    <span className="leading-[22.4px] text-[#212121] text-sm">
                      {noti?.announceTime}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <h3 className="mt-10">Bạn không có thông báo nào</h3>
          )}
        </div>
      ) : (
        Fragment
      )}
      {notiDetail && (
        <NotificationDetail onClose={toogleVisibility} noti={notiSelected} />
      )}
    </div>
  );
}

export default PopupNotification;
