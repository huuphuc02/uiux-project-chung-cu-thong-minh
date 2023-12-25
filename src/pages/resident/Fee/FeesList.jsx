import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import SidebarResident from "../../../components/SidebarResident";
import { Fragment, useEffect, useState } from "react";
import Pagination from "../../../components/Pagination";

function FeesList() {
  const navigate = useNavigate();
  const [listFees, setListFees] = useState([]);
  const [apartment, setApartment] = useState({});
  useEffect(() => {
    setApartment(JSON.parse(localStorage.getItem("apartment")));
    const getListFees = async () => {
      let response = await fetch(`http://localhost:3000/khoanphi`);
      const data = await response.json();
      console.log(apartment.ID);
      let list = data.filter(
        (fee) => fee.apartmentId == apartment.ID || fee.apartmentId == "All"
      );
      const currentDate = new Date();
      list = list.filter((item) => {
        const [month, day, year] = item.deadline.split("/");
        const itemDate = new Date(`${year}-${month}-${day}`);
        return itemDate > currentDate;
      });
      console.log(listFees);
      list.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
      setListFees(list);
    };

    getListFees();
  }, []);
  return (
    <div>
      <Header />
      <div className="flex">
        <SidebarResident />
        <div className="w-[82%] bg-[#f5f5f5] px-8 py-4">
          <h1 className="text-[22px] font-bold text-left">
            Danh sách khoản phí
          </h1>
          <div className="bg-white py-8 px-8">
            <div className="relative">
              <table className="h-4 w-full text-sm text-left rtl:text-right">
                <thead className="text-sm text-white bg-[#445f99] ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Loại khoản phí
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tên khoản phí
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Số tiền (VND)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Hạn đóng
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium cursor-pointer overflow-y-scroll">
                  {listFees
                    ? listFees.map((fee, key) => {
                        return (
                          <tr className="bg-[#b1c9f1] border-b" key={key}>
                            <td scope="row" className="px-6 py-4 ">
                              {fee.type}
                            </td>
                            <td className="px-6 py-4">{fee.feeName}</td>
                            <td className="px-6 py-4">{fee.cost}</td>
                            <td className="px-6 py-4">{fee.deadline}</td>
                          </tr>
                        );
                      })
                    : Fragment}
                </tbody>
              </table>
            </div>
            <Pagination length={listFees.length} />
            <div className="text-center text-lg font-bold self-center mt-10 ml-56 mb-6 relative">
              <div className="flex">
                <label>Tổng tiền: </label>
                <span className="absolute left-64">
                  {listFees
                    .reduce((accumulator, fee) => {
                      return accumulator + fee.cost;
                    }, 0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  VND
                </span>
              </div>
              <div className="flex">
                <label>Số khoản phí quá hạn đóng: </label>
                <span className="absolute left-64">0</span>
              </div>
              <div className="flex">
                <label>Số khoản phí còn hạn đóng: </label>
                <span className="absolute left-64">{listFees.length}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="items-center mt-6 mb-6 bg-white px-6 py-2 text-[#99b7f0] border-[#99b7f0] rounded-lg h-10"
              onClick={() => navigate("/homePageResident")}
            >
              QUAY LẠI
            </button>
            <button
              id="ButtonRoot"
              className="cursor-pointer items-start text-center font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] justify-center py-2 px-4 h-10 mt-6 mb-6 ml-8 rounded-lg"
              onClick={() => navigate("/payFee")}
            >
              THANH TOÁN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeesList;
