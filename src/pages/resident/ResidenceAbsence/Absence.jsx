import { useEffect, useState } from "react";
import Header from "../../../components/resident/Header";
import SidebarResident from "../../../components/resident/SidebarResident";
import { useNavigate } from "react-router-dom";
import PopupConfirm from "../../../components/PopupConfirm";
import PopupSuccess from "../../../components/PopupSuccess";
import PopupError from "../../../components/PopupError";
import {
  compareDates,
  convertDateFormat,
  generateRandomString,
} from "../../../utility";

function Absence() {
  const [resident, setResident] = useState({});
  const navigate = useNavigate();
  const [popupConfirm, setPopupConfirm] = useState(false);
  const [popupError, setPopupError] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(false);
  const [address, setAddress] = useState("");
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [reason, setReason] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleClosePopup = () => {
    setPopupConfirm(false);
    setPopupError(false);
  };

  const handleSuccess = () => {
    setPopupSuccess(false);
    navigate("/residenceAbsence");
  };

  const handleConfirmAction = () => {
    setPopupConfirm(false);
    const formData = {
      id: generateRandomString(3),
      MSCD: resident.ID,
      ngayBatDau: convertDateFormat(startDay),
      ngayKetThuc: convertDateFormat(endDay),
      lyDo: reason,
      address: address,
    };
    console.log(formData);
    fetch("http://localhost:3001/dangkytamvang", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        response.json();
        setPopupSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = () => {
    console.log(startDay);
    console.log(endDay);
    if (address == "" || startDay == "" || endDay == "") {
      setMessageError("Vui lòng nhập đầy đủ các trường thông tin bắt buộc!");
      setPopupError(true);
      return;
    }
    const today = new Date();
    if (compareDates(startDay, today) < 0) {
      setMessageError(
        "Ngày bắt đầu phải lớn hơn hoặc bằng ngày hôm nay. Vui lòng nhập lại!"
      );
      setPopupError(true);
      return;
    }
    if (compareDates(startDay, endDay) >= 0) {
      setMessageError(
        "Ngày kết thúc phải lớn hơn ngày bắt đầu. Vui lòng nhập lại!"
      );
      setPopupError(true);
      return;
    }
    setPopupConfirm(true);
  };

  useEffect(() => {
    setResident(JSON.parse(localStorage.getItem("resident")));
  }, []);
  return (
    <div>
      <Header />
      <div className="flex">
        <SidebarResident tab={"Vắng trú"} />
        <div
          id="DesktopRoot"
          className="bg-[#f5f5f5] flex flex-col gap-10 w-[82%] items-start pt-2 pb-6 px-10"
        >
          <div className="flex flex-col justify-between gap-4 w-4/5 items-start">
            <div className="flex flex-col justify-between gap-5 w-full items-start">
              <h1 id="NgKTmTr" className="text-[22px] font-bold">
                Đăng ký tạm vắng
              </h1>
              <div className="flex flex-col gap-4 w-full items-start">
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold ml-[144px]">
                    Họ và tên{" "}
                    <span className="text-red-500 mr-2 text-base font-semibold">
                      (*)
                    </span>
                    :
                  </label>
                  <input
                    defaultValue={resident.fullname}
                    className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    CCCD{" "}
                    <span className="text-red-500 mr-2 text-base font-semibold">
                      (*)
                    </span>
                    :
                  </label>
                  <input
                    defaultValue={resident.CCCD}
                    className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Ngày sinh{" "}
                    <span className="text-red-500 mr-2 text-base font-semibold">
                      (*)
                    </span>
                    :
                  </label>
                  <input
                    defaultValue={resident.dob}
                    className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Giới tính{" "}
                    <span className="text-red-500 mr-2 text-base font-semibold">
                      (*)
                    </span>
                    :
                  </label>
                  <input
                    defaultValue={resident.gender}
                    className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    SĐT liên hệ{" "}
                    <span className="text-red-500 mr-2 text-base font-semibold">
                      (*)
                    </span>
                    :
                  </label>
                  <input
                    defaultValue={resident.Sdt}
                    className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Địa chỉ thường trú{" "}
                    <span className="text-red-500 mr-2 text-base font-semibold">
                      (*)
                    </span>
                    :
                  </label>
                  <input
                    defaultValue="125D Minh Khai"
                    className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Địa chỉ nơi đến{" "}
                    <span className="text-red-500 mr-2 text-base font-semibold">
                      (*)
                    </span>
                    :
                  </label>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Ngày bắt đầu{" "}
                    <span className="text-red-500 mr-2 text-base font-semibold">
                      (*)
                    </span>
                    :
                  </label>
                  <input
                    onChange={(e) => setStartDay(e.target.value)}
                    type="date"
                    placeholder="Định dạng dd/mm/yyyy"
                    className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white pt-2 flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Ngày kết thúc{" "}
                    <span className="text-red-500 mr-2 text-base font-semibold">
                      (*)
                    </span>
                    :
                  </label>
                  <input
                    onChange={(e) => setEndDay(e.target.value)}
                    type="date"
                    placeholder="Định dạng dd/mm/yyyy"
                    className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white pt-2 flex flex-row w-1/2 h-10 items-start px-4"
                  ></input>
                </div>
                <div className="flex flex-row justify-between w-full items-start">
                  <label className="text-lg font-bold mt-2 ml-[144px]">
                    Lý do:
                  </label>
                  <textarea
                    onChange={(e) => setReason(e.target.value)}
                    className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-16 items-start px-4"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-row ml-[490px] gap-8 w-1/3 items-start">
                <button
                  className="text-center text-lg uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-1/2 h-10 items-start pt-2 pl-8 border-0 rounded-lg"
                  onClick={() => {
                    navigate("/residenceAbsence");
                  }}
                >
                  huỷ
                </button>
                <button
                  className="text-center text-lg uppercase text-white bg-[#99b7f0] flex flex-row w-1/2 h-10 items-start pt-2 pl-10 rounded-lg"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupConfirm
        isOpen={popupConfirm}
        onClose={handleClosePopup}
        onConfirm={handleConfirmAction}
        message="Bạn có chắc chắn muốn gửi đơn đăng ký này?"
      />
      <PopupError
        isOpen={popupError}
        onClose={handleClosePopup}
        message={messageError}
      />
      <PopupSuccess
        isOpen={popupSuccess}
        onClose={handleSuccess}
        message="Đăng ký tạm vắng thành công! Đơn đăng ký của bạn sẽ được gửi công an chờ phê duyệt."
      />
    </div>
  );
}

export default Absence;
