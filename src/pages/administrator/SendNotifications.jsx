//import { useNavigate } from "react-router-dom";
import AdministratorHeader from "../../components/administrator/AdministratorHeader";
import SidebarAdministrator from "../../components/administrator/SidebarAdministrator";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PopupConfirm from "../../components/PopupConfirm";
import PopupSuccess from "../../components/PopupSuccess";
import PopupError from "../../components/PopupError";
import {
  convertDateFormat,
  generateRandomString,
} from "../../utility";


function SendNotifications() {
  const navigate = useNavigate()

  const [type, setType] = useState("Resident");
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (location.state) {
      setType(location.state.doiTuong);
    }
  }, []);


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
    setTitle("");
    setTime("");
    setDescription("");
    navigate("/SendNotifications");
  };

  const handleConfirmAction = () => {
    setPopupConfirm(false);
    console.log("Confirm")
    const formData = {
      id: generateRandomString(3),
      title: title,
      description: description,
      target: type,
      time: convertDateFormat(time),
      announceTime: convertDateFormat(new Date())
    };
    console.log(formData);
    fetch("http://localhost:3001/thongbao", {
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
    if (title == "" || description == "") {
      setMessageError("Vui lòng nhập đầy đủ các trường thông tin bắt buộc!");
      setPopupError(true);
      return;
    }
    setPopupConfirm(true);
  };

  return (
    <div className="s-Screen">
      <AdministratorHeader />
      <div className="flex">
        <SidebarAdministrator tab={"Thông báo"} />
        <div className="w-[82%] bg-[#f5f5f5] px-8 py-4 pb-4">
          <h1 className="text-2xl font-bold text-left ">Gửi thông báo</h1>

          <div className=" w-full h-max rounded-lg flex flex-col">
            <div className="flex justify-start items-center mt-[43px] ml-[118px] mb-[62px] mr-[98px]">
              <div className="text-xl font-['Nunito_Sans'] font-bold w-1/3 text-start">
                Tiêu đề
              </div>
              <h3 className="text-red-500 mr-2 text-base font-semibold">(*)</h3>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder=""
                className="border-solid border-1 border-black text-[#adaaaa] shadow-[2px_2px_4px_1px_rgba(0,_0,_0,_0.5)]  w-2/3 h-10 items-start px-3 rounded-lg mr-1"
              />
            </div>
            <div className="flex flex-row  justify-start items-start ml-[118px] mb-[62px] mr-[98px]">
              <h2 className="text-xl font-['Nunito_Sans'] font-bold w-1/3 text-start">
                Nội dung
              </h2>
              <h3 className="text-red-500 mr-2 text-base font-semibold">(*)</h3>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                rows={5}
                cols={50}
                placeholder="Nội dung của thông báo..."
                className="border-solid text-[#adaaaa] shadow-[2px_2px_4px_1px_rgba(0,_0,_0,_0.5)] bg-white flex flex-row  w-2/3 h-50 items-start px-3 rounded-lg mr-2"
              />
            </div>
            <div className="flex  justify-start items-center ml-[118px] mb-[62px] mr-[98px]">
              <h2 className="text-xl font-['Nunito_Sans'] font-bold w-1/3 text-start">
                Đối tượng gửi
              </h2>
              <h3 className="text-red-500 mr-2 text-base font-semibold">(*)</h3>
              <div className="border-solid text-[#adaaaa] shadow-[2px_2px_4px_1px_rgba(0,_0,_0,_0.5)] bg-white flex flex-row w-1/3 h-10 px items-start mr-2">
                <select
                  name="role"
                  id="role"
                  className="w-full h-12 px-5"
                  onChange={(e) => setType(e.target.value)}
                >
                  {type === "Admin" ? (
                    <>
                      <option value="Resident">Dân cư</option>
                      <option selected value="Admin">
                        Quản trị
                      </option>
                      <option value="Manager">Quản lý</option>
                    </>
                  ) : (
                    ""
                  )}

                  {type === "Manager" ? (
                    <>
                      <option value="Resident">Dân cư</option>
                      <option value="Admin">Quản trị</option>
                      <option selected value="Manager">
                        Quản lý
                      </option>
                    </>
                  ) : (
                    ""
                  )}

                  {type === "Resident" ? (
                    <>
                      <option value="Resident">Dân cư</option>
                      <option value="Admin">Quản trị</option>
                      <option value="Manager">Quản lý</option>
                    </>
                  ) : (
                    ""
                  )}
                  {!type && (
                    <>
                      <option value="Resident">Dân cư</option>
                      <option value="Admin">Quản trị</option>
                      <option value="Manager">Quản lý</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className="flex justify-start items-center mt-[43px] ml-[118px] mb-[62px] mr-[98px]">
              <h2 className="text-xl font-['Nunito_Sans'] font-bold w-1/3 text-start">
                Thời gian
              </h2>
              <h3 className="text-red-500 mr-2 text-base font-semibold">(*)</h3>
              <input
                onChange={(e) => setTime(e.target.value)}
                type="date"
                placeholder=""
                className="border-solid pt-2 border-1 border-black text-[#adaaaa] shadow-[2px_2px_4px_1px_rgba(0,_0,_0,_0.5)] bg-white  w-1/3 h-10 items-start px-3 rounded-lg mr-2"
              />
            </div>

            <div className="flex justify-center items-center gap-10 ">
              <button className="flex flex-row  cursor-pointer items-start " onClick={() => navigate("/homepageAdmin")}>
                <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-full h-16 items-start pt-5 px-8 border-0 rounded-lg">
                  huỷ
                </div>
              </button>

              <button className="flex flex-row  cursor-pointer items-center justify-center "
                onClick={() => handleSubmit()}
              >
                <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] flex flex-row w-full h-16 items-start pt-5 px-8 rounded-lg">
                  Gửi
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <PopupConfirm
          isOpen={popupConfirm}
          onClose={handleClosePopup}
          onConfirm={handleConfirmAction}
          message={"Bạn có chắc chắn muốn gửi thông báo : " + title + " đến "+ type}
        />
        <PopupError
          isOpen={popupError}
          onClose={handleClosePopup}
          message={messageError}
        />
        <PopupSuccess
          isOpen={popupSuccess}
          onClose={handleSuccess}
          message="Gửi thông báo thành công"
        />
    </div>
  );
}
export default SendNotifications;