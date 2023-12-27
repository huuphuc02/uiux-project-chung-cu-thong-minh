import ManagerHeader from "../../components/manager/ManagerHeader";
import Pagination from "../../components/Pagination";
import SidebarManager from "../../components/SidebarManager";
import { LuSearch } from "react-icons/lu";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ModalNewFee from "../../components/manager/ModalNewFee";

function FeeManager() {
  const [isShowNewFee, setShowNewFee] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setShowNewFee(location.state.isShowNewFee)
    }
  }, [])

  const months = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <div>
      <ManagerHeader />
      <div className="flex">
        <SidebarManager />
        <div className="w-[82%] bg-[#f5f5f5] relative">
          {isShowNewFee && <ModalNewFee isShowNewFee={isShowNewFee} setShowNewFee={setShowNewFee} />}
          <div className="w-full px-8 py-4 pb-4 ">
            <h1 className="text-4xl font-bold text-left">Khoản thu</h1>
            <div className="flex justify-end">
              <button
                id="ButtonRoot"
                className="cursor-pointer items-start text-center font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] justify-center py-2 px-4 h-10 ml-8 rounded-lg"
                onClick={() => {
                  setShowNewFee(!isShowNewFee)
                }}
              >
                THÊM MỚI
              </button>
            </div>

            <div className="flex mt-6 justify-between">
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
            <div className="mt-4 z-0">
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
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Phí bảo trì
                    </td>
                    <td className="px-6 py-4">Phí thay mới hệ thống đèn</td>
                    <td className="px-6 py-4">3.000. 000</td>
                    <td className="px-6 py-4">11:23:00 25/11/2023</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Tiền nước
                    </td>
                    <td className="px-6 py-4">Tiền nước tháng 11/2023</td>
                    <td className="px-6 py-4">20.000.000</td>
                    <td className="px-6 py-4">11:23:00 25/11/2023</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Tiền điện
                    </td>
                    <td className="px-6 py-4">Tiền điện tháng 11/2023</td>
                    <td className="px-6 py-4">500.000</td>
                    <td className="px-6 py-4">11:23:00 25/11/2023</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Tiền Internet
                    </td>
                    <td className="px-6 py-4">Tiền internet tháng 11/2023</td>
                    <td className="px-6 py-4">100.000</td>
                    <td className="px-6 py-4">11:23:00 25/11/2023</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Tiền Internet
                    </td>
                    <td className="px-6 py-4">Tiền internet tháng 11/2023</td>
                    <td className="px-6 py-4">100.000</td>
                    <td className="px-6 py-4">11:23:00 25/11/2023</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Tiền Internet
                    </td>
                    <td className="px-6 py-4">Tiền internet tháng 11/2023</td>
                    <td className="px-6 py-4">100.000</td>
                    <td className="px-6 py-4">11:23:00 25/11/2023</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Tiền Internet
                    </td>
                    <td className="px-6 py-4">Tiền internet tháng 11/2023</td>
                    <td className="px-6 py-4">100.000</td>
                    <td className="px-6 py-4">11:23:00 25/11/2023</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Tiền Internet
                    </td>
                    <td className="px-6 py-4">Tiền internet tháng 11/2023</td>
                    <td className="px-6 py-4">100.000</td>
                    <td className="px-6 py-4">11:23:00 25/11/2023</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Tiền Internet
                    </td>
                    <td className="px-6 py-4">Tiền internet tháng 11/2023</td>
                    <td className="px-6 py-4">100.000</td>
                    <td className="px-6 py-4">11:23:00 25/11/2023</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Tiền Internet
                    </td>
                    <td className="px-6 py-4">Tiền internet tháng 11/2023</td>
                    <td className="px-6 py-4">100.000</td>
                    <td className="px-6 py-4">11:23:00 25/11/2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default FeeManager;
