import AdministratorHeader from "../../components/administrator/AdministratorHeader";
import Pagination from "../../components/Pagination";
import SidebarAdministrator from "../../components/administrator/SidebarAdministrator";
import { LuSearch } from "react-icons/lu";
import { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import ModalNewFee from "../../components/manager/ModalNewFee";
import { useNavigate } from "react-router-dom";
function FeesStatistics() {
  const navigate = useNavigate();
  const [isShowNewFee, setShowNewFee] = useState(false);
  const location = useLocation();
  const [listFees, setListFees] = useState([]);
  const [filteredFees, setFilteredFees] = useState(listFees);
  const [keySearch, setKeySearch] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedFeeType, setSelectedFeeType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  useEffect(() => {
    // setApartment(JSON.parse(localStorage.getItem("apartment")));
    const getListFees = async () => {
      let response = await fetch(`http://localhost:3001/khoanphi`);
      const data = await response.json();
      const currentDate = new Date();
      let list = data.filter((item) => {
        const [day, month, year] = item.deadline.split("/");
        const itemDate = new Date(`${year}-${month}-${day}`);
        return itemDate < currentDate;
      });
      list.sort(
        (a, b) =>
          new Date(parseDate(b.deadline)) - new Date(parseDate(a.deadline))
      );
      setListFees(list);
      console.log(listFees);
    };

    getListFees();
  }, []);

  // Handler khi bấm vào trang số
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    console.log(keySearch);
    const filteredResults = listFees.filter((fee) => {
      const itemDate = fee.deadline.split("/").reverse().join("-");
      const itemMonth = itemDate.slice(0, 7);
      // const current = (new Date())
      const matchesMonth = !selectedMonth || itemMonth == selectedMonth;
      const matchedFeeType = !selectedFeeType || fee.type == selectedFeeType;
      const matchesKeyword = fee.feeName
        .toLowerCase()
        .includes(keySearch.toLowerCase());
      return matchedFeeType && matchesKeyword && matchesMonth;
    });
    filteredResults.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
    setTotalPages(Math.ceil(filteredResults.length / 10));
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const slicedData = filteredResults.slice(startIndex, endIndex);
    setFilteredFees(slicedData);
    console.log(filteredResults);
  }, [keySearch, listFees, selectedFeeType, selectedMonth, currentPage]);

  useEffect(() => {
    if (location.state) {
      setShowNewFee(location.state.isShowNewFee);
    }
  }, []);

  return (
    <div>
      <AdministratorHeader />
      <div className="flex">
        <SidebarAdministrator tab={"Thống kê"} />
        <div className="w-[82%] bg-[#f5f5f5] relative">
          {isShowNewFee && (
            <ModalNewFee
              isShowNewFee={isShowNewFee}
              setShowNewFee={setShowNewFee}
            />
          )}
          <div className="w-full px-8 py-4 pb-4 ">
            <h1 className="text-4xl font-bold text-left">Thống kê khoản phí</h1>

            <div className="flex mt-6 justify-between">
              <div className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/3 rounded-lg h-10 items-center pl-2 py-2">
                <LuSearch />
                <input
                  value={keySearch}
                  onChange={(e) => {
                    setKeySearch(e.target.value);
                  }}
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
                <input
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  type="month"
                  className="text-sm w-full h-10 rounded-lg text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
                />
              </div>
              <div className="ml-4 justify-center items-center flex w-[35%]">
                <label
                  className="font-semibold text-[#777777] w-full"
                  htmlFor="month"
                >
                  Lọc theo loại phí
                </label>
                <select
                  value={selectedFeeType}
                  onChange={(e) => setSelectedFeeType(e.target.value)}
                  className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-full rounded-lg h-10 items-start px-4 pt-2"
                >
                  <option value="">Tất cả</option>
                  <option value="Tiền điện, nước, internet">
                    Tiền điện, nước, internet
                  </option>
                  <option value="Phí bảo trì">Phí bảo trì</option>
                  <option value="Phí bảo hiểm">Phí bảo hiểm</option>
                  <option value="Phí dịch vụ">Phí dịch vụ</option>
                  <option value="Phí thuê">Phí thuê</option>
                  <option value="Phí gửi xe">Phí gửi xe</option>
                  <option value="Phí quản lý">Phí quản lý</option>
                </select>
              </div>
            </div>
            <div className="z-0 mt-4">
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
                  {filteredFees.length ? (
                    filteredFees.map((fee, key) => {
                      return (
                        <tr className="bg-[#b1c9f1] border-b" key={key}>
                          <td scope="row" className="px-6 py-4 ">
                            {fee.type}
                          </td>
                          <td className="px-6 py-4">{fee.feeName}</td>
                          <td className="px-6 py-4">{fee.cost * 40}</td>
                          <td className="px-6 py-4">{fee.deadline}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <h3 className="mt-10">Không tìm thấy khoản phí</h3>
                  )}
                </tbody>
              </table>
            </div>
            
            {filteredFees.length ? (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageClick={handlePageClick}
              />
            ) : (
              Fragment
            )}
            <button
                  id="ButtonRoot"
                  className="flex flex-row w-30px h-[20px] cursor-pointer items-start mb-4"
                  onClick={() => navigate("/statisticAdmin")}
                >
                  <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-[#99b7f0] border-solid border-[#99b7f0] bg-white flex flex-row w-full h-12 items-start pt-2 px-4 border rounded-lg">
                    Quay lại
                  </div>
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeesStatistics;
