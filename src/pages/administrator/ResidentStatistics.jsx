import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdministratorHeader from "../../components/administrator/AdministratorHeader";
import SidebarAdministrator from "../../components/administrator/SidebarAdministrator";

function ResidentStatistics() {
  const navigate = useNavigate();
  const [cuDanData, setCuDanData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const [chungCuResponse, cuDanResponse, chungCuCuDanResponse] =
        await Promise.all([
          fetch("http://localhost:3001/chungcu"),
          fetch("http://localhost:3001/cudan"),
          fetch("http://localhost:3001/chungcu-cudan"),
        ]);

      const [chungCu, cuDan, chungCuCuDan] = await Promise.all([
        chungCuResponse.json(),
        cuDanResponse.json(),
        chungCuCuDanResponse.json(),
      ]);

      displayTable(chungCu, cuDan, chungCuCuDan);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function displayTable(chungCu, cuDan, chungCuCuDan) {
    const combinedData = cuDan.map((cuDanData, index) => {
      const chungCuData = chungCuCuDan.find(
        (data) => data.MSCD === cuDanData.ID && data.MSCH
      );
      if (cuDanData && chungCuData) {
        const chungCuInfo = chungCu.find(
          (chungcu) => chungcu.ID === chungCuData.MSCH
        );
        return {
          id: index + 1,
          fullname: cuDanData.fullname,
          apartment: chungCuInfo.apartment,
          building: chungCuInfo.building,
        };
      } else {
        console.warn("No matching data found for index:", index);
        return null;
      }
    });

    setCuDanData(combinedData.filter((data) => data !== null));
  }

  const totalPages = Math.ceil(cuDanData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = cuDanData.slice(startIndex, endIndex);

  return (
    <div className="h-Screen">
      <AdministratorHeader />
      <div className="flex">
        <SidebarAdministrator tab={"Thống kê"} />
        <div id="NewRootRoot" className="flex flex-row w-4/5 items-start">
          <div className="bg-[#f5f5f5] flex flex-col gap-6 w-full font-['Nunito_Sans'] items-start pt-6 pb-12 px-5">
            <div className="text-2xl font-bold capitalize ml-4">
              Thống kê cư dân
            </div>
            <div className="flex flex-col ml-1.3 gap-12 w-full h-[761px] items-start pl-5 py-5">
              <div className="flex flex-col ml-1 gap-10 w-full items-start">
                <div className="flex flex-row gap-16 w-full items-start">
                  <div className="flex flex-row gap-4 w-3/5 items-start">
                    <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row mb-1 gap-5 w-2/5 h-10 items-start pt-2 px-2 rounded-lg">
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
                      <div className="text-lg font-semibold text-[#777777] mt-2 ml-4">
                        Lọc theo tòa nhà:
                      </div>
                      <div className="relative flex flex-row justify-end pt-3 w-20 items-start">
                        <select className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-20 h-10 bg-white absolute top-0 left-0 flex flex-row items-start pt-3 px-2 rounded-lg">
                          <option value="1">A1</option>
                          <option value="2">A2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row mt-1 gap-12 w-2/5 items-start mr-4">
                    <div className="text-lg font-semibold text-[#777777] mt-2 ml-[-15px]">
                      Lọc theo căn hộ:
                    </div>
                    <div className="relative flex flex-row justify-end pt-3 w-2/5 items-start">
                      <select className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full h-10 bg-white absolute top-0 left-0 flex flex-row items-start pt-3 px-4 rounded-lg">
                        {[
                          101, 102, 103, 104, 105, 201, 202, 203, 204, 205, 301,
                          302, 303, 304, 305, 401, 402, 403, 404, 405,
                        ].map((optionValue) => (
                          <option key={optionValue} value={optionValue}>
                            {optionValue}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <table className="h-4 w-full text-sm text-left rtl:text-right border-collapse border border-[#d9d9d9]">
                  <thead className="text-sm text-white bg-[#445f99] ">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 border border-[#d9d9d9]"
                      >
                        STT
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 border border-[#d9d9d9]"
                      >
                        Họ và tên
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 border border-[#d9d9d9]"
                      >
                        Căn hộ
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 border border-[#d9d9d9]"
                      >
                        Tòa nhà
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    id="tableBody"
                    className="font-medium bg-[#b1c9f1] cursor-pointer overflow-y-scroll"
                  >
                    {currentData.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-3 border border-[#d9d9d9]">
                          {item.id}
                        </td>
                        <td className="px-6 py-3 border border-[#d9d9d9]">
                          {item.fullname}
                        </td>
                        <td className="px-6 py-3 border border-[#d9d9d9]">
                          {item.apartment}
                        </td>
                        <td className="px-6 py-3 border border-[#d9d9d9]">
                          {item.building}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  id="ButtonRoot"
                  className="flex flex-row w-full h-[20px] cursor-pointer items-start"
                  onClick={() => navigate("/statisticAdmin")}
                >
                  <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-[#99b7f0] border-solid border-[#99b7f0] bg-white flex flex-row w-full h-12 items-start pt-2 px-4 border rounded-lg">
                    Quay lại
                  </div>
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="mr-2 px-4 py-2 bg-gray-300 ml-[200px]"
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="ml-2 px-4 py-2 bg-gray-300"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResidentStatistics;
