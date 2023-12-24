import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import SidebarResident from "../../components/SidebarResident";
import { Fragment, useEffect, useState } from "react";

function Apartment() {
  const navigate = useNavigate();
  const [apartment, setApartment] = useState({});
  const [listMembers, setMembers] = useState([]);

  useEffect(() => {
    setApartment(JSON.parse(localStorage.getItem("apartment")));
    const getListMembers = async () => {
      let response = await fetch(
        `http://localhost:3001/chungcu-cudan?MSCH=${4042}`
      );
      const data = await response.json();
      let listMembersArray = [];
      for (let i in data) {
        console.log(data[i]);
        response = await fetch(
          `http://localhost:3001/cudan?ID=${data[i].MSCD}`
        );
        const member = await response.json();
        listMembersArray.push(member[0]);
      }
      setMembers(listMembersArray);
      console.log(listMembers);
    };

    getListMembers();
  }, []);
  return (
    <div>
      <Header />
      <div className="flex">
        <SidebarResident />
        <div className="bg-[#f5f5f5] w-[82%] h-max p-4">
          <h1 id="ThngTinCnHRoot" className="text-[22px] font-bold text-left">
            Thông tin căn hộ
          </h1>
          <div className="bg-white py-5 pl-20">
            <div className="flex mb-4 relative">
              <label id="CnH2" className="text-lg font-bold">
                Căn hộ:
              </label>
              <span
                id="Element2"
                className="text-lg font-medium leading-[26px] absolute left-48"
              >
                {apartment.apartment}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="TaNh2" className="text-lg font-bold">
                Tòa nhà:
              </label>
              <span className="text-lg font-medium leading-[26px]  absolute left-48">
                {apartment.building}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="Tng1" className="text-lg font-bold">
                Tầng:
              </label>
              <span className="text-lg font-medium leading-[26px]  absolute left-48">
                {apartment.floor}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="DinTch3" className="text-lg font-bold">
                Diện tích:
              </label>
              <span className="text-lg font-medium leading-[26px] absolute left-48">
                {apartment.area} m2
              </span>
            </div>
            <div>
              <label
                id="DanhSchTHNHVIN6"
                className="flex mb-4 flex-row justify-between  items-start text-lg font-bold "
              >
                Danh sách thành viên
              </label>
            </div>
            <div className="relative w-4/5">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-sm text-white bg-[#445f99] ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Họ và tên
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Ngày sinh
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Giới tính
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quan hệ với chủ hộ
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium cursor-pointer">
                  {listMembers
                    ? listMembers.map((member, key) => {
                        return (
                          <tr
                            key={key}
                            className="bg-[#b1c9f1] border-b"
                            onClick={() => navigate("/residentInfo")}
                          >
                            <td scope="row" className="px-6 py-4 ">
                              {member?.fullname}
                            </td>
                            <td className="px-6 py-4">{member?.dob}</td>
                            <td className="px-6 py-4">{member?.gender}</td>
                            <td className="px-6 py-4">Chu ho</td>
                          </tr>
                        );
                      })
                    : Fragment}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apartment;
