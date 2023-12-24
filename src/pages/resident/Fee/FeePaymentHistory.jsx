import { Fragment, useEffect, useState } from "react";
import Header from "../../../components/Header";
import Pagination from "../../../components/Pagination";
import SidebarResident from "../../../components/SidebarResident";
import { LuSearch } from "react-icons/lu";

function FeePaymentHistory() {
  const months = Array.from({ length: 12 }, (_, index) => index + 1);
  const [listFees, setListFees] = useState([]);
  const [apartment, setApartment] = useState({});
  useEffect(() => {
    setApartment(JSON.parse(localStorage.getItem("apartment")));
    const getListFees = async () => {
      let response = await fetch(`http://localhost:3001/khoanphi`);
      const data = await response.json();
      console.log(apartment.ID);
      let list = data.filter(
        (fee) => fee.apartmentId == apartment.ID || fee.apartmentId == "All"
      );
      list.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
      setListFees(list);
      console.log(listFees);
    };

    getListFees();
  }, []);
  return (
    <div>
      <Header />
      <div className="flex">
        <SidebarResident />
        <div className="w-[82%] bg-[#f5f5f5] px-8 py-4 pb-4">
          <h1 className="text-[22px] font-bold text-left">Lịch sử đóng phí</h1>
          <div className="flex mt-6">
            <div className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/3 rounded-lg h-10 items-center pl-2 py-2">
              <LuSearch />
              <input
                placeholder="Tìm theo tên khoản phí"
                className="pl-2 ml-2 w-full h-10"
              ></input>
            </div>
            <div className="ml-2 pl-2 justify-center items-center flex">
              <label
                className="font-semibold text-[#777777] w-full"
                htmlFor="month"
              >
                Lọc theo tháng
              </label>
              <select className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-2 rounded-lg h-10 items-start px-4 pt-2">
                <option value="0">Tất cả</option>
                {months.map((value) => (
                  <option key={value} value={value}>
                    Tháng {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="ml-4 justify-center items-center flex w-[35%]">
              <label
                className="font-semibold text-[#777777] w-full"
                htmlFor="month"
              >
                Lọc theo loại phí
              </label>
              <select className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-full rounded-lg h-10 items-start px-4 pt-2">
                <option value="0">Tất cả</option>
                <option value="1">Phí bảo trì</option>
                <option value="2">Tiền điện</option>
                <option value="3">Tiền nước</option>
                <option value="4">Tiền internet</option>
              </select>
            </div>
          </div>
          <div className="relative mt-4">
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
                    Thời gian nộp
                  </th>
                </tr>
              </thead>
              <tbody className="font-medium cursor-pointer overflow-y-scroll">
                {listFees
                  ? listFees.slice(0, 10).map((fee, key) => {
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
        </div>
      </div>
    </div>
  );
}

export default FeePaymentHistory;
