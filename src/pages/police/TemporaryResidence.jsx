import { useNavigate } from "react-router-dom";
import PoliceHeader from "../../components/police/PoliceHeader";
import SidebarPolice from "../../components/police/SidebarPolice";
import { Fragment, useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { LuSearch } from "react-icons/lu";
import { CSVLink, CSVDownload } from "react-csv";

function TemporaryResidence() {
  const navigate = useNavigate();
  const [listTamTru, setListTamTru] = useState([]);
  const [filteredTamTru, setFilteredTamTru] = useState([listTamTru]);
  const [listAppartment, setListAppartment] = useState([]);
  const [filteredAppartment, setFilteredAppartment] = useState([
    listAppartment,
  ]);
  const [listNgayBatDau, setListNgayBatDau] = useState([]);
  const [filteredStart, setFilteredStart] = useState([listNgayBatDau]);
  const [listNgayKetThuc, setListNgayKetThuc] = useState([]);
  const [filteredEnd, setFilteredEnd] = useState([listNgayKetThuc]);
  const [keySearch, setKeySearch] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedApartment, setSelectedApartment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [exportTamTru, setExportTamtru] = useState([]);

  const headers = [
    {label: "STT", key: "stt"},
    {label: "Họ và tên", key: "fullname"},
    {label: "CCCD", key: "cccd"},
    {label: "Ngày bắt đầu", key: "startday"},
    {label: "Ngày kết thúc", key: "endday"},
    {label: "Căn hộ", key: "apartment"}
  ];
  const data=[];

  useEffect(() => {
    const getListTamTru = async () => {
      let response = await fetch(`http://localhost:3001/cudan`);
      const data = await response.json();
      let list = data.filter((cudan) => cudan.residenceStatus == "Tam tru");
      let listAppartmentArray = [];
      let listNgayBatDauArray = [];
      let listNgayKetThucArray = [];
      for (let i in list) {
        response = await fetch(
          `http://localhost:3001/chungcu-cudan?MSCD=${list[i].ID}`
        );
        const chungcu_cudan = await response.json();
        response = await fetch(
          `http://localhost:3001/chungcu?ID=${chungcu_cudan[0].MSCH}`
        );
        const appartment = await response.json();
        var canHo = appartment[0].apartment + appartment[0].building;
        listAppartmentArray.push(canHo);
        response = await fetch(
          `http://localhost:3001/tamtru?MSCD=${list[i].ID}`
        );
        const tamtru = await response.json();
        listNgayBatDauArray.push(tamtru[0].ngayBatDau);
        listNgayKetThucArray.push(tamtru[0].ngayKetThuc);
      }
      setListNgayBatDau(listNgayBatDauArray);
      setListNgayKetThuc(listNgayKetThucArray);
      setListAppartment(listAppartmentArray);
      setListTamTru(list);
    };
    getListTamTru();
  }, []);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // console.log(keySearch);
    let filteredApartmentArray = [];
    let filteredNgayBatDauArray = [];
    let filteredNgayKetThucArray = [];
    const filteredResults = listTamTru.filter((cudan, key) => {
      const matchesKeyword =
        cudan.fullname.toLowerCase().includes(keySearch.toLowerCase()) ||
        cudan.CCCD.toString().toLowerCase().includes(keySearch.toLowerCase());
      const matchedAppartment =
        !selectedApartment || listAppartment[key] == selectedApartment;
      const itemDate1 = listNgayBatDau[key].split("/").reverse().join("-");
      const itemDate2 = listNgayKetThuc[key].split("/").reverse().join("-");
      const itemMonth1 = itemDate1.slice(0, 7);
      const itemMonth2 = itemDate2.slice(0, 7);
      const matchedMonth =
        !selectedMonth ||
        itemMonth2 == selectedMonth ||
        itemMonth1 == selectedMonth;
      if (matchedAppartment) {
        if (!selectedApartment) {
          if (matchedMonth && matchesKeyword) {
            filteredNgayBatDauArray.push(listNgayBatDau[key]);
            filteredNgayKetThucArray.push(listNgayKetThuc[key]);
            filteredApartmentArray.push(listAppartment[key]);
          }
        } else {
          filteredApartmentArray.push(listAppartment[key]);
          if (matchedMonth) {
            filteredNgayBatDauArray.push(listNgayBatDau[key]);
            filteredNgayKetThucArray.push(listNgayKetThuc[key]);
          }
        }
      }
      return matchesKeyword && matchedAppartment && matchedMonth;
    });
    // const filteredResults = filteredApartment
    setTotalPages(Math.ceil(filteredResults.length / 10));
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const slicedData = filteredResults.slice(startIndex, endIndex);
    setFilteredTamTru(slicedData);
    setExportTamtru(filteredResults);
    setFilteredAppartment(filteredApartmentArray);
    setFilteredStart(filteredNgayBatDauArray);
    setFilteredEnd(filteredNgayKetThucArray);
    // console.log(listTamTru);
  }, [
    keySearch,
    listTamTru,
    selectedApartment,
    selectedMonth,
    currentPage,
    listAppartment,
    listNgayBatDau,
    listNgayKetThuc,
  ]);

  const add_item_csv = () =>{  
    for(let i =0; i<exportTamTru.length;i++){
      let result ={
          stt: i,
          fullname: exportTamTru[i].fullname,
          cccd: exportTamTru[i].CCCD,
          startday:filteredStart[i],
          endday: filteredEnd[i],
          apartment: filteredAppartment[i]
    };
      data.push(result);
    }
  };
  

  return (
    <div className="h-screen">
      <PoliceHeader />
      <div className="flex">
        <SidebarPolice tab={"Tạm trú"} />
        <div id="NewRootRoot" className="flex flex-row w-[82%] items-start">
          <div className="bg-[#f5f5f5] flex flex-col w-full font-['Nunito_Sans'] items-start">
            <div className="flex ml-6 flex-row w-full items-center justify-start">
              <div className="text-2xl font-bold ml-8 text-center">
                Danh sách tạm trú
              </div>
              <div className="w-1/3">
                <button
                  border="3px solid #99b7f0"
                  onClick={() => navigate("/inspectTemporaryResidence")}
                  className="items-center mt-6 mb-6 bg-white px-6 py-2 text-[#99b7f0] btn_primary rounded-lg h-10"
                >
                  Duyệt mới
                </button>
                {add_item_csv()}
                <CSVLink data={data} headers={headers}
                  id="ButtonRoot"
                  className="cursor-pointer items-start text-center font-['Nunito_Sans'] text-white bg-[#99b7f0] justify-center py-2 px-4 h-10 mt-6 mb-6 ml-8 rounded-lg"
                  filename="Danh-sach-tam-tru.csv"
                >
                  Xuất bảng
                </CSVLink>
              </div>
            </div>
            <div className="flex flex-col mb-4 pl-6 gap-4 w-full h-max items-start">
              <div className="flex flex-col gap-10 w-full items-start"></div>
              <div className="flex flex-col w-4/5 items-start">
                <div className="flex flex-col ml-8 gap-4 w-full h-max items-start">
                  <div className="flex flex-col w-full items-start">
                    <div className="flex flex-row gap-24 w-full items-start">
                      <div className="flex flex-row gap-4 w-full items-start">
                        <div className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 rounded-lg h-10 items-center pl-2 py-2">
                          <LuSearch />
                          <input
                            value={keySearch}
                            onChange={(e) => {
                              setKeySearch(e.target.value);
                            }}
                            placeholder="Tìm theo tên cư dân, CCCD"
                            className="pl-2 ml-2 w-full h-10"
                          ></input>
                        </div>

                        <div className="flex flex-row mt-1 gap-2 w-1/2 items-start">
                          <div className="text-lg w-1/2 font-semibold text-[#777777] mt-2">
                            Lọc theo tháng:
                          </div>
                          <div className="relative flex flex-row justify-end pt-3 w-1/2 items-start">
                            <input
                              value={selectedMonth}
                              onChange={(e) => setSelectedMonth(e.target.value)}
                              type="month"
                              id="start"
                              name="start"
                              min="2021-01"
                              max="2025-12"
                            />
                          </div>
                        </div>
                      
                      <div className="flex flex-row mt-1 w-1/2 items-start mr-4">
                        <div className="text-lg w-1/2 font-semibold text-[#777777] mt-2">
                          Lọc theo căn hộ:
                        </div>
                        <div className="relative flex flex-row justify-end pt-3 w-2/5 items-start">
                          <select
                            value={selectedApartment}
                            onChange={(e) =>
                              setSelectedApartment(e.target.value)
                            }
                            className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full h-10 bg-white absolute top-0 left-0 flex flex-row items-start pt-3 px-4 rounded-lg"
                          >
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
                            <option value="" selected disabled hidden></option>
                          </select>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative py-5">
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
                                Ngày bắt đầu
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Ngày kết thúc
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Căn hộ
                              </th>
                            </tr>
                          </thead>
                          <tbody className="font-medium cursor-pointer overflow-y-scroll">
                            {filteredTamTru.length ? (
                              filteredTamTru.map((cudan, key) => {
                                return (
                                  <tr
                                    className="bg-[#b1c9f1] border-b"
                                    key={key}
                                  >
                                    <td className="px-6 py-4 ">
                                      {key + 1 + 10 * (currentPage - 1)}
                                    </td>
                                    <td className="px-6 py-4">
                                      {cudan.fullname}
                                    </td>
                                    <td className="px-6 py-4">{cudan.CCCD}</td>
                                    <td className="px-6 py-4">
                                      {
                                        filteredStart[
                                          key + 10 * (currentPage - 1)
                                        ]
                                      }
                                    </td>
                                    <td className="px-6 py-4">
                                      {
                                        filteredEnd[
                                          key + 10 * (currentPage - 1)
                                        ]
                                      }
                                    </td>
                                    <td className="px-6 py-4">
                                      {
                                        filteredAppartment[
                                          key + 10 * (currentPage - 1)
                                        ]
                                      }
                                    </td>
                                  </tr>
                                );
                              })
                            ) : (
                              <h3 className="mt-10">
                                Không tìm thấy cư dân tạm trú
                              </h3>
                            )}
                          </tbody>
                        </table>
                      </div>
                      {filteredTamTru.length ? (
                        <Pagination
                          totalPages={totalPages}
                          currentPage={currentPage}
                          onPageClick={handlePageClick}
                        />
                      ) : (
                        Fragment
                      )}
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

export default TemporaryResidence;
