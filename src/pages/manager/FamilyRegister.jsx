import { useState } from "react";
import ManagerHeader from "../../components/manager/ManagerHeader";
import Pagination from "../../components/Pagination";
import SidebarManager from "../../components/SidebarManager";
import { LuSearch } from "react-icons/lu";
import ModalDetailApartment from "../../components/manager/modalDetailApartment";

function FamilyRegister() {
  const apartment = ["A1", "A2", "A3", "A4", "A5"];
  const [isShowDetailApartment, setShowDetailApartment] = useState(false);

  return (
    <div>
      <ManagerHeader />
      <div className="flex">
        <SidebarManager />
        <div className="w-[82%] bg-[#f5f5f5] relative">
          {isShowDetailApartment && <ModalDetailApartment isShowDetailApartment={isShowDetailApartment} setShowDetailApartment={setShowDetailApartment}/>}
          <div className="w-full px-8 py-4 pb-4 ">
            <h1 className="text-4xl font-bold text-left">Danh sách hộ khẩu</h1>
            <div className="flex mt-6 justify-between">
              <div className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/3 rounded-lg h-10 items-center pl-2 py-2">
                <LuSearch />
                <input
                  placeholder="Tìm theo căn hộ"
                  className="pl-2 ml-2 w-full h-10"
                ></input>
              </div>
              <div className="ml-2 pl-2 justify-center items-center flex">
                <label
                  className="font-semibold text-[#777777] w-full"
                  htmlFor="month"
                >
                  Tòa nhà
                </label>
                <select className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-2 rounded-lg h-10 items-start px-4 pt-2">
                  <option value="0">Tất cả</option>
                  {apartment.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="ml-4 justify-center items-center flex ">
                <button
                  id="ButtonRoot"
                  className="cursor-pointer items-start text-center font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] justify-center py-2 px-4 h-10 ml-8 rounded-lg"
                // onClick={() => navigate("/payFee")}
                >
                  THÊM MỚI
                </button>
              </div>


            </div>
            <div className=" mt-4 z-0">
              <table className="h-4 w-full text-sm text-left rtl:text-right">
                <thead className="text-sm text-white bg-[#445f99] ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      STT
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Căn hộ
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Chủ hộ
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tòa nhà
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium cursor-pointer overflow-y-scroll">
                  <tr className="bg-[#b1c9f1] border-b" onClick={() => setShowDetailApartment(!isShowDetailApartment)}>
                    <td scope="row" className="px-6 py-4 ">
                      1
                    </td>
                    <td className="px-6 py-4">101</td>
                    <td className="px-6 py-4">Nguyễn Văn Tài</td>
                    <td className="px-6 py-4">A1</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      2
                    </td>
                    <td className="px-6 py-4">102</td>
                    <td className="px-6 py-4">Trần Văn Chiến</td>
                    <td className="px-6 py-4">A1</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      3
                    </td>
                    <td className="px-6 py-4">103</td>
                    <td className="px-6 py-4">Nguyễn Thị Bích Ngân</td>
                    <td className="px-6 py-4">A1</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      4
                    </td>
                    <td className="px-6 py-4">104</td>
                    <td className="px-6 py-4">Đào Văn Tư</td>
                    <td className="px-6 py-4">A1</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      5
                    </td>
                    <td className="px-6 py-4">105</td>
                    <td className="px-6 py-4">Vũ Thị Linh</td>
                    <td className="px-6 py-4">A1</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      6
                    </td>
                    <td className="px-6 py-4">106</td>
                    <td className="px-6 py-4">Nguyễn Thị Vân Trang</td>
                    <td className="px-6 py-4">A1</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      7
                    </td>
                    <td className="px-6 py-4">201</td>
                    <td className="px-6 py-4">Phạm Văn Hải</td>
                    <td className="px-6 py-4">A1</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      8
                    </td>
                    <td className="px-6 py-4">202</td>
                    <td className="px-6 py-4">Nguyễn Nam</td>
                    <td className="px-6 py-4">A1</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      9
                    </td>
                    <td className="px-6 py-4">203</td>
                    <td className="px-6 py-4">Hoàng Mai Lan</td>
                    <td className="px-6 py-4">A1</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      10
                    </td>
                    <td className="px-6 py-4">204</td>
                    <td className="px-6 py-4">Lê Hữu Tài</td>
                    <td className="px-6 py-4">A1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Pagination />

          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyRegister;
