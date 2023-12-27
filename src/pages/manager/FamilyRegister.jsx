import { Fragment, useState, useEffect } from "react";
import ManagerHeader from "../../components/manager/ManagerHeader";
import Pagination from "../../components/Pagination";
import SidebarManager from "../../components/SidebarManager";
import { LuSearch } from "react-icons/lu";
import ModalDetailApartment from "../../components/manager/modalDetailApartment";
import ModalNewApartment from "../../components/manager/ModalNewApartment";

function FamilyRegister() {
  const [isShowNewApartment, setShowNewApartment] = useState(false);
  const [isShowDetailApartment, setShowDetailApartment] = useState(false);
  const [listApartments, setlistApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filteredApartments, setFilteredApartments] = useState(listApartments);
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [currentApartment, setCurrentApartment] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/chungcu')
      .then(response => response.json())
      .then(data => {
        setlistApartments(data);
        setFilteredApartments(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);



  useEffect(() => {
    const filteredResults = listApartments.filter((apt) => {
      const matchedBuilding = !selectedBuilding || apt.building == selectedBuilding;
      console.log(matchedBuilding)
      return matchedBuilding
    });

    setTotalPages(Math.ceil(filteredResults.length / 10));
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const slicedData = filteredResults.slice(startIndex, endIndex);
    setFilteredApartments(slicedData);
  }, [currentPage, selectedBuilding, listApartments]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };


  return (
    <div>
      <ManagerHeader />
      <div className="flex">
        <SidebarManager />
        <div className="w-[82%] bg-[#f5f5f5] relative">
          {isShowDetailApartment && <ModalDetailApartment isShowDetailApartment={isShowDetailApartment} setShowDetailApartment={setShowDetailApartment} currentApartment={currentApartment} />}
          {isShowNewApartment && <ModalNewApartment isShowNewApartment={isShowNewApartment} setShowNewApartment={setShowNewApartment} />}
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
                <select className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-2 rounded-lg h-10 items-start px-4 pt-2"
                  value={selectedBuilding}
                  onChange={(e) => setSelectedBuilding(e.target.value)}
                >
                  <option value="">Tất cả</option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                </select>
              </div>
              <div className="ml-4 justify-center items-center flex ">
                <button
                  id="ButtonRoot"
                  className="cursor-pointer items-start text-center font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] justify-center py-2 px-4 h-10 ml-8 rounded-lg"
                  onClick={() => {
                    setShowNewApartment(!isShowNewApartment)
                  }}
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
                  {
                    filteredApartments ? filteredApartments.map((apt, key) => {
                      return (
                        <tr
                          className="bg-[#b1c9f1] border-b"
                          onClick={() => {
                            setCurrentApartment(apt);
                            setShowDetailApartment(!isShowDetailApartment)
                          }}
                          key={key + (currentPage - 1) * 10}
                        >
                          <td scope="row" className="px-6 py-4 ">
                            {key + (currentPage - 1) * 10}
                          </td>
                          <td className="px-6 py-4">{apt.apartment}</td>
                          <td className="px-6 py-4">{apt.HoTen}</td>
                          <td className="px-6 py-4">{apt.building}</td>
                        </tr>
                      );
                    })
                      : Fragment}
                </tbody>
              </table>
            </div>
            {filteredApartments.length ? (
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
  );
}

export default FamilyRegister;
