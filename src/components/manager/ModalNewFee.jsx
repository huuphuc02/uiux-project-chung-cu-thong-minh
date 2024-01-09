/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import PopupConfirm from "../../components/PopupConfirm";
import PopupSuccess from "../../components/PopupSuccess";
import PopupError from "../../components/PopupError";
import {
  compareDates,
  convertDateFormat2,
  generateRandomString,
} from "../../utility";


function ModalNewFee(props) {
  const ref = useRef(null);
  // eslint-disable-next-line react/prop-types
  const { isShowNewFee, setShowNewFee } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickOutside = () => { setShowNewFee(!isShowNewFee) }

  const navigate = useNavigate();
  const [feeName, setFeeName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [apartmentId, setApartmentId] = useState("All");
  const [type, setType] = useState("");
  const [cost, setCost] = useState(null);
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  const [popupConfirm, setPopupConfirm] = useState(false);
  const [popupError, setPopupError] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(false);
  const [messageError, setMessageError] = useState("");

  const handleClosePopup = () => {
    setPopupConfirm(false);
    setPopupError(false);
  };

  const handleSuccess = () => {
    setPopupSuccess(false);
    onClickOutside();
    navigate("/feeManager");
  };

  const handleConfirmAction = () => {
    setPopupConfirm(false);
    console.log("Confirm")
    const formData = {
      id: generateRandomString(3),
      // ID: generateRandomString(3),
      type: type,
      feeName: feeName,
      apartmentId: apartmentId,
      cost: cost / 40,
      deadline: convertDateFormat2(deadline)
    };
    console.log(formData);
    fetch("http://localhost:3001/khoanphi", {
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
    if (feeName == "" || type == "" || deadline == "" || cost == null) {
      setMessageError("Vui lòng nhập đầy đủ các trường thông tin bắt buộc!");
      setPopupError(true);
      return;
    }
    const today = new Date();
    if (compareDates(deadline, today) < 0) {
      setMessageError(
        "Hạn thu phải lớn hơn hoặc bằng ngày hôm nay. Vui lòng nhập lại!"
      );
      setPopupError(true);
      return;
    }

    if (cost == 0) {
      setMessageError(
        "Số tiền thu phải lớn hơn 0"
      );
      setPopupError(true);
      return;
    }
    setPopupConfirm(true);
  };


  return (
    <div className="flex flex-row w-full h-full items-center justify-center bg-black/30 absolute z-100 " >
      <div className="bg-[#f5f5f5] w-[70%] h-[70%] info-box overflow-auto rounded-lg " ref={ref}>
        <div className="flex flex-col justify-center gap-5 w-full h-full items-center">
          <h1 id="NgKTmTr" className="text-[22px] font-bold mt-4 mb-8">
            Thêm mới khoản thu
          </h1>
          <div className="flex flex-col gap-4 w-full items-center justify-center">
            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold ml-4">
                Tên khoản phí (*):
              </label>
              <input
                onChange={(e) => setFeeName(e.target.value)}
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
              ></input>
            </div>
            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                Loại phí (*):
              </label>
              <input
                onChange={(e) => setType(e.target.value)}
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
              ></input>
            </div>

            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                Số tiền (*):
              </label>
              <input
                onChange={(e) => setCost(e.target.value)}
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
              ></input>
            </div>
            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                Tòa nhà (*):
              </label>
              {/* <input
                // defaultValue={resident.gender}
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
              ></input> */}
              <div className='w-1/2 flex justify-start'>
                <div className="text-[#adaaaa] mt-px shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between w-[40%] items-start">
                  <select
                    name="role"
                    id="role"
                    className="w-full h-10 px-5"
                  >
                    <option value="">All</option>
                    <option value="">A1</option>
                    <option value="">A2</option>
                  </select>
                </div>
              </div>

            </div>
            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                Hạn đóng (*):
              </label>
              <input
                type="date"
                onChange={(e) => setDeadline(e.target.value)}
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4 pt-2"
              ></input>
            </div>

          </div>
          <div className="flex flex-row gap-8 w-1/3 items-start mt-8">
            <button
              className="text-center text-md uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-1/2 h-10 items-start pt-2 pl-8 border-0 rounded-lg"
              onClick={onClickOutside}
            >
              huỷ
            </button>
            <button
              className="text-center text-md uppercase text-white bg-[#99b7f0] flex flex-row w-1/2 h-10 items-start pt-2 pl-10 rounded-lg"
              onClick={() => {
                handleSubmit()
                // setShowNewFee(!isShowNewFee)
              }}
            >
              Gửi
            </button>
          </div>
        </div>
        <PopupConfirm
          isOpen={popupConfirm}
          onClose={handleClosePopup}
          onConfirm={handleConfirmAction}
          message={"Bạn có chắc chắn muốn tạo "+ feeName +" đến " + apartmentId}
        />
        <PopupError
          isOpen={popupError}
          onClose={handleClosePopup}
          message={messageError}
        />
        <PopupSuccess
          isOpen={popupSuccess}
          onClose={handleSuccess}
          message="Tạo khoản thu mới thành công"
        />
      </div>

    </div>
  )
}



export default ModalNewFee;
