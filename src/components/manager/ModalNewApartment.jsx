/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import PopupConfirm from "../../components/PopupConfirm";
import PopupSuccess from "../../components/PopupSuccess";
import PopupError from "../../components/PopupError";
import {
  compareDates,
  generateRandomString,
} from "../../utility";

function ModalNewApartment(props) {
  const ref = useRef(null);
  // eslint-disable-next-line react/prop-types
  const { isShowNewApartment, setShowNewApartment } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickOutside = () => { setShowNewApartment(!isShowNewApartment) }

  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [apartment, setApartment] = useState(null);
  const [cccd, setCccd] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [gioiTinh, setGioiTinh] = useState("nam");
  const [sdt, setSdt] = useState("");
  const [building, setBuilding] = useState("");
  const [HoTen, setHoTen] = useState("");

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
      id: generateRandomString(4),
      apartment: apartment,
      building: building,
      floor: (apartment - (apartment % 100))/100,
      area: 89,
      HoTen: HoTen
    };
    fetch("http://localhost:3001/chungcu", {
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
    if (HoTen == "" || building == "" || cccd == "" || ngaySinh == null || sdt == "") {
      setMessageError("Vui lòng nhập đầy đủ các trường thông tin bắt buộc!");
      setPopupError(true);
      return;
    }
  };



  return (
    <div className="flex flex-row w-full h-full items-center justify-center bg-black/30 absolute z-100 " >
      <div className="bg-[#f5f5f5] w-[70%] h-[70%] info-box overflow-auto rounded-lg " ref={ref}>
        <div className="flex flex-col justify-between gap-5 w-full items-center">
          <h1 id="NgKTmTr" className="text-[22px] font-bold mt-6">
            Thêm mới hộ khẩu
          </h1>
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold ml-4">
                Họ và tên chủ hộ (*):
              </label>
              <input
                // defaultValue={resident.fullname}
                onChange={(e) => setHoTen(e.target.value)}
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
              ></input>
            </div>
            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                CCCD (*):
              </label>
              <input
                onChange={(e) => setCccd(e.target.value)}
                // defaultValue={resident.CCCD}
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
              ></input>
            </div>

            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                Ngày sinh (*):
              </label>
              <input
                onChange={(e) => setNgaySinh(e.target.value)}
                type="date"
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4 pt-2"
              ></input>
            </div>

            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                Giới tính (*):
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
                    onChange={(e) => setGioiTinh(e.target.value)}
                  >
                    <option value="nam">Nam</option>
                    <option value="nu">Nữ</option>
                    <option value="khac">Khác</option>
                  </select>
                </div>
              </div>

            </div>
            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                SĐT liên hệ (*):
              </label>
              <input
                // defaultValue={resident.Sdt}
                onChange={(e) => setSdt(e.target.value)}
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
                    onChange={(e) => setBuilding(e.target.value)}
                  >
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                  </select>
                </div>
              </div>

            </div>
            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                Căn hộ (*):
              </label>
              <div className="w-1/2">
                <input 
                 onChange={(e) => setApartment(e.target.value)}
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-2/3 h-10 items-start px-4"></input>
              </div>
            </div>

          </div>
          <div className="flex flex-row gap-8 w-1/3 items-start">
            <button
              className="text-center text-md uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-1/2 h-10 items-start pt-2 pl-8 border-0 rounded-lg"
              onClick={onClickOutside}
            >
              huỷ
            </button>
            <button
              className="text-center text-md uppercase text-white bg-[#99b7f0] flex flex-row w-1/2 h-10 items-start pt-2 pl-10 rounded-lg"
              onClick={() => {
                handleSubmit();

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
          message={"Bạn có chắc chắn muốn tạo hộ khẩu cho căn hộ"+ apartment +" tòa  " + building +" ?"}
        />
        <PopupError
          isOpen={popupError}
          onClose={handleClosePopup}
          message={messageError}
        />
        <PopupSuccess
          isOpen={popupSuccess}
          onClose={handleSuccess}
          message="Tạo hộ mới thành công"
        />
      </div>
    </div>
  )
}



export default ModalNewApartment;
