import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import SidebarResident from "../../components/SidebarResident";
import { useEffect, useState } from "react";

function ResidentInfor() {
  const navigate = useNavigate();
  const [resident, setResident] = useState({});
  useEffect(() => {
    setResident(JSON.parse(localStorage.getItem("resident")));
  }, []);
  return (
    <div>
      <Header name={resident.fullname} role="Cư dân" />
      <div className="flex">
        <SidebarResident />
        <div className="bg-[#f5f5f5] w-[82%] h-max p-4">
          <h1
            id="ThngTinCnHRoot"
            className="text-[22px] font-extrabold text-left"
          >
            Thông tin nhân khẩu
          </h1>
          <div className="bg-white py-5 pl-40">
            <div className="flex mb-4 relative">
              <label id="CnH2" className="text-lg font-bold">
                Họ và tên:
              </label>
              <span
                id="Element2"
                className="text-lg font-medium leading-[26px] absolute left-48"
              >
                {resident.fullname}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="TaNh2" className="text-lg font-bold">
                CCCD:
              </label>
              <span className="text-lg font-medium leading-[26px]  absolute left-48">
                {resident.CCCD}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="Tng1" className="text-lg font-bold">
                Ngày sinh:
              </label>
              <span className="text-lg font-medium leading-[26px]  absolute left-48">
                {resident.dob}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="DinTch3" className="text-lg font-bold">
                Giới tính:
              </label>
              <span className="text-lg font-medium leading-[26px] absolute left-48">
                {resident.gender}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="DinTch31" className="text-lg font-bold">
                Dân tộc:
              </label>
              <span className="text-lg font-medium leading-[26px] absolute left-48">
                {resident.ethnic}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="DinTch32" className="text-lg font-bold">
                Tôn giáo:
              </label>
              <span className="text-lg font-medium leading-[26px] absolute left-48">
                {resident.religion}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="DinTch33" className="text-lg font-bold">
                Nghề nghiệp:
              </label>
              <span className="text-lg font-medium leading-[26px] absolute left-48">
                {resident.job}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="DinTch34" className="text-lg font-bold">
                Quê quán:
              </label>
              <span className="text-lg font-medium leading-[26px] absolute left-48">
                {resident.hometown}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="DinTch35" className="text-lg font-bold">
                Địa chỉ thường trú:
              </label>
              <span className="text-lg font-medium leading-[26px] absolute left-48">
                30 Tạ Quang Bửu, Hai Bà Trưng, Hà Nội
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="DinTch36" className="text-lg font-bold">
                Tình trạng cư trú:
              </label>
              <span className="text-lg font-medium leading-[26px] absolute left-48">
                {resident.residenceStatus}
              </span>
            </div>
          </div>
          <button
            className="items-center mt-6 mb-6 bg-white px-6 py-2 text-[#99b7f0] border-[#99b7f0] hover:bg-[#99b7f0] hover:text-white rounded-lg"
            onClick={() => {
              navigate("/apartmentInfo");
            }}
          >
            QUAY LẠI
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResidentInfor;
