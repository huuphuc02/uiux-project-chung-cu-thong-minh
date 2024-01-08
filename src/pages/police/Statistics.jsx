import { useNavigate } from "react-router-dom";
import PoliceHeader from "../../components/police/PoliceHeader";
import SidebarPolice from "../../components/police/SidebarPolice";
import { Fragment, useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { LuSearch } from "react-icons/lu";

function Statistics() {
  const navigate = useNavigate();
  const [listCuDan, setListCuDan] = useState([]);
  const [filteredCuDan, setFilteredCuDan] = useState([]);
  const [keySearch, setKeySearch] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedEthnic, setSelectedEthnic] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getListCuDan = async () => {
      let response = await fetch(`http://localhost:3001/cudan`);
      const data = await response.json();
      setListCuDan(data);
    };
    getListCuDan();
  }, []);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(()=> {
    console.log(keySearch);

    const filteredResults = listCuDan.filter((cudan) => {
      const matchedKeyword = cudan.fullname.toLowerCase().includes(keySearch.toLowerCase()) || cudan.CCCD.toString().toLowerCase().includes(keySearch.toLowerCase());
      const matchedGender = !selectedGender || cudan.gender == selectedGender;
      const matchedEthnic = !selectedEthnic || cudan.ethnic == selectedEthnic;
      return matchedKeyword && matchedGender && matchedEthnic;
    });

    setTotalPages(Math.ceil(filteredResults.length / 10));
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const slicedData = filteredResults.slice(startIndex, endIndex);
    setFilteredCuDan(slicedData);
  }, [keySearch, listCuDan, selectedEthnic,selectedGender,currentPage]);

  return (
    <div className="h-screen">
      <PoliceHeader />
      <div className="flex">
        <SidebarPolice />
        <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-[#d9d9d9] flex flex-col gap-6 w-full font-['Nunito_Sans'] items-start pt-6 pb-12 px-5">
                        <div className="flex flex-row gap-3 w-full items-center pt-6 pb-12 px-5 justify-between">
                            <div className="text-3xl font-bold capitalize ml-8 text-center">Thống kê nhân khẩu</div>
                            {/* <div>
                                <button id="ButtonRoot"
                                    className="cursor-pointer items-start text-center font-['Nunito_Sans'] text-white bg-[#99b7f0] justify-center py-2 px-4 h-10 mt-6 mb-6 ml-8 rounded-lg">
                                    Xuất bảng
                                </button>
                            </div> */}
                        </div>
                        <div className="bg-white flex flex-col ml-8 gap-12 w-full h-[1400px] items-start pl-5 py-5">
                            <div className="flex flex-col ml-1 gap-10 w-full items-start"></div>
                            <div className="flex flex-col w-4/5 items-start mt-2 mb-4">
                                <div className="bg-white flex flex-col ml-8 gap-12 w-full h-[761px] items-start pl-5 py-5">
                                    <div className="flex flex-col ml-1 gap-10 w-full items-start">
                                        <div className="flex flex-row gap-16 w-full items-start">
                                            <div className="flex flex-row gap-4 w-1/2 items-start">
                                                <div className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-2/3 rounded-lg h-10 items-center pl-2 py-2">
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

                                                <div className="flex flex-row mt-1 gap-4 w-1/2 items-start">
                                                    <div className="text-lg font-semibold text-[#777777] mt-2">
                                                        Lọc theo giới tính:
                                                    </div>
                                                    <div className="relative flex flex-row justify-end pt-3 w-25 items-start">
                                                        <select
                                                            value={selectedGender}
                                                            onChange={(e) => setSelectedGender(e.target.value)}
                                                            className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full h-10 bg-white absolute top-0 left-0 flex flex-row items-start pt-3 px-8 rounded-lg">
                                                              <option key="Nu" value="Nu">Nu</option>
                                                              <option key="Nam" value="Nam">Nam</option>
                                                              <option value="" selected disabled hidden></option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="flex flex-row mt-1 gap-12 w-1/3 items-start mr-4">
                                                <div className="text-lg font-semibold text-[#777777] mt-2">
                                                    Lọc theo dân tộc:
                                                </div>
                                                <div className="relative flex flex-row justify-end pt-3 w-2/5 items-start">
                                                    <select
                                                    value={selectedEthnic}
                                                    onChange={(e) => setSelectedEthnic(e.target.value)}
                                                    className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full h-10 bg-white absolute top-0 left-0 flex flex-row items-start pt-3 px-4 rounded-lg"
                                                    >
                                                        {["Kinh","Muong","Tay","H'Mong"].map((optionValue) => (
                                                                <option key={optionValue} value={optionValue}>
                                                                    {optionValue}
                                                                </option>
                                                            ))}
                                                        <option value="" selected disabled hidden></option>
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
                                                                Ngày sinh
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Giới tính
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Dân tộc
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Tôn giáo
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Nghề nghiệp
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Số điện thoại
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="font-medium cursor-pointer overflow-y-scroll">
                                                        {filteredCuDan.length ? (
                                                            filteredCuDan.map((cudan, key) => {
                                                                return (
                                                                    <tr className="bg-[#b1c9f1] border-b" key={key}>
                                                                        <td className="px-6 py-4 ">
                                                                            {(key + 1)+10*(currentPage-1)}
                                                                        </td>
                                                                        <td className="px-6 py-4">{cudan.fullname}</td>
                                                                        <td className="px-6 py-4">{cudan.CCCD}</td>
                                                                        <td className="px-6 py-4">{cudan.dob}</td>
                                                                        <td className="px-6 py-4">{cudan.gender}</td>
                                                                        <td className="px-6 py-4">{cudan.religion}</td>
                                                                        <td className="px-6 py-4">{cudan.ethnic}</td>
                                                                        <td className="px-6 py-4">{cudan.job}</td>
                                                                        <td className="px-6 py-4">{cudan.Sdt}</td>
                                                                    </tr>
                                                                );
                                                            })
                                                        ) : (
                                                            <h3 className="mt-10">Không tìm thấy cư dân</h3>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                            {filteredCuDan.length ? (
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

export default Statistics;
