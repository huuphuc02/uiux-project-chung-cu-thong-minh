import { useNavigate } from "react-router-dom";
import PoliceHeader from "../../components/police/PoliceHeader";
import SidebarPolice from "../../components/police/SidebarPolice";
import { Fragment, useEffect, useState } from "react";
import Pagination from "../../components/Pagination";

function ResidenceAbsence() {
  const navigate = useNavigate();
  const [listTamTru, setListTamTru] = useState([]);
  const [listAppartment, setListAppartment] = useState([]);
  //   const [listTamVang, setListTamVang] = useState([]);

  useEffect(() => {
    const getListTamTru = async () => {
      let response = await fetch(`http://localhost:3001/cudan`);
      const data = await response.json();
      let list = data.filter((cudan) => cudan.residenceStatus == "Tam tru");
      let listAppartmentArray = [];
      for (let i in data) {
        console.log(data[i]);
        response = await fetch(
          `http://localhost:3001/chungcu-cudan?MSCD=${data[i].ID}`
        );
        const chungcu_cudan = await response.json();
        response = await fetch(
          `http://localhost:3001/chungcu?ID=${chungcu_cudan[0].MSCH}`
        );
        const appartment = await response.json();
        var canHo = appartment[0].apartment + appartment[0].building;
        console.log(canHo);
        listAppartmentArray.push(canHo);
      }
      setListAppartment(listAppartmentArray);
      setListTamTru(list);
    };
    getListTamTru();
  }, []);
  return (
    <div className="h-screen">
      <PoliceHeader />
      <div className="flex">
        <SidebarPolice />
        <div id="NewRootRoot" className="flex flex-row w-full items-start">
          <div className="bg-[#d9d9d9] flex flex-col gap-6 w-full font-['Nunito_Sans'] items-start pt-6 pb-12 px-5">
            <div className="flex flex-row gap-3 w-full items-center pt-6 pb-12 px-5 justify-between">
              <div className="text-3xl font-bold capitalize ml-8 text-center">
                Danh sách tạm trú
              </div>
              <div>
                <button className="items-center mt-6 mb-6 bg-white px-6 py-2 text-[#99b7f0] border-[#99b7f0] rounded-lg h-10">
                  Duyệt mới
                </button>
                <button
                  id="ButtonRoot"
                  className="cursor-pointer items-start text-center font-['Nunito_Sans'] text-white bg-[#99b7f0] justify-center py-2 px-4 h-10 mt-6 mb-6 ml-8 rounded-lg"
                >
                  Xuất bảng
                </button>
              </div>
            </div>
            <div className="bg-white flex flex-col ml-8 gap-12 w-full h-[761px] items-start pl-5 py-5">
              <div className="flex flex-col ml-1 gap-10 w-full items-start"></div>
              <div className="flex flex-col w-4/5 items-start mt-2 mb-4">
                <div className="bg-white flex flex-col ml-8 gap-12 w-full h-[761px] items-start pl-5 py-5">
                  <div className="flex flex-col ml-1 gap-10 w-full items-start">
                    <div className="flex flex-row gap-16 w-full items-start">
                      <div className="flex flex-row gap-4 w-3/5 items-start">
                        <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row mb-1 gap-5 w-1/2 h-10 items-start pt-2 px-2 rounded-lg">
                          <input
                            type="text"
                            placeholder="Tìm theo tên cư dân"
                            className="mt-1 w-full px-2 border-none outline-none"
                          />
                          <img
                            src="https://file.rendit.io/n/u9XBBnNX3jjEwudGawBB.svg"
                            alt="SearchIcon"
                            id="SearchIcon"
                            className="mt-1 w-5"
                          />
                        </div>

                        <div className="flex flex-row mt-1 gap-4 w-1/2 items-start">
                          <div className="text-lg font-semibold text-[#777777] mt-2">
                            Lọc theo tháng:
                          </div>
                          <div className="relative flex flex-row justify-end pt-3 w-25 items-start">
                            <input
                              type="month"
                              id="start"
                              name="start"
                              min="2021-01"
                              max="2025-12"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row mt-1 gap-12 w-1/3 items-start mr-4">
                        <div className="text-lg font-semibold text-[#777777] mt-2">
                          Lọc theo căn hộ:
                        </div>
                        <div className="relative flex flex-row justify-end pt-3 w-2/5 items-start">
                          <select className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full h-10 bg-white absolute top-0 left-0 flex flex-row items-start pt-3 px-4 rounded-lg">
                            {[
                              "101A1",
                              "102A1",
                              "103A1",
                              "104A1",
                              "105A1",
                              "201A1",
                              "202A1",
                              "203A1",
                              "204A1",
                              "205A1",
                              "301A1",
                              "302A1",
                              "303A1",
                              "304A1",
                              "305A1",
                              "401A1",
                              "402A1",
                              "403A1",
                              "404A1",
                              "405A1",
                              "101A2",
                              "102A2",
                              "103A2",
                              "104A2",
                              "105A2",
                              "201A2",
                              "202A2",
                              "203A2",
                              "204A2",
                              "205A2",
                              "301A2",
                              "302A2",
                              "303A2",
                              "304A2",
                              "305A2",
                              "401A2",
                              "402A2",
                              "403A2",
                              "404A2",
                              "405A2",
                            ].map((optionValue) => (
                              <option key={optionValue} value={optionValue}>
                                {optionValue}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white py-8 px-8">
                      <div className="relative">
                        <table className="h-5 w-full text-sm text-left rtl:text-right">
                          <thead className="text-sm text-white bg-[#445f99] ">
                            <tr>
                              <th scope="col" className="px-6 py-3">
                                STT
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Họ và tên
                              </th>
                              <th scope="col" className="px-6 py-3">
                                CCCD
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Thời hạn
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Căn hộ
                              </th>
                            </tr>
                          </thead>
                          <tbody className="font-medium cursor-pointer overflow-y-scroll">
                            {listTamTru
                              ? listTamTru.map((cudan, key) => {
                                  return (
                                    <tr
                                      className="bg-[#b1c9f1] border-b"
                                      key={key}
                                    >
                                      <td scope="row" className="px-6 py-4 ">
                                        {key + 1}
                                      </td>
                                      <td className="px-6 py-4">
                                        {cudan.fullname}
                                      </td>
                                      <td className="px-6 py-4">
                                        {cudan.CCCD}
                                      </td>
                                      <td className="px-6 py-4">20/10/2023</td>
                                      <td className="px-6 py-4">
                                        {listAppartment[key]}
                                      </td>
                                    </tr>
                                  );
                                })
                              : Fragment}
                          </tbody>
                        </table>
                      </div>
                      <Pagination length={listTamTru.length} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResidenceAbsence;
