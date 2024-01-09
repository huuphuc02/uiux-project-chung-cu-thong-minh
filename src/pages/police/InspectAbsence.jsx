import { useNavigate } from "react-router-dom";
import PoliceHeader from "../../components/police/PoliceHeader";
import SidebarPolice from "../../components/police/SidebarPolice";
import { Fragment, useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import PopupAbsenceDetail from "../../components/police/PopupAbsenceDetail";
import PopupSuccess from "../../components/PopupSuccess";
import { generateRandomString } from "../../utility";

function InspectAbsence() {
  const navigate = useNavigate();
  const [listDangKy, setListDangKy] = useState([]);
  const [listCuDan, setListCuDan] = useState([]);
  const [listCanHo, setListCanHo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [inspectDetail, setInspectDetail] = useState(false);
  const [selectedResidence, setSelectedResidence] = useState({});
  const [selectedAbsenceInfo, setSelectedAbsenceInfo] = useState({});
  const [selectedAppartment, setSelectedAppartment] = useState("");
  const [popupSuccess, setPopupSuccess] = useState(false);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleClosePopup = () => {
    // Xử lý khi component con được đóng
    setInspectDetail(false);
  };
  const handleConfirmAction = () => {
    setInspectDetail(false);
    const tamvang = {
      id: generateRandomString(3),
      MSCD: selectedAbsenceInfo.MSCD,
      ngayBatDau: selectedAbsenceInfo.ngayBatDau,
      ngayKetThuc: selectedAbsenceInfo.ngayKetThuc,
    };
    fetch(`http://localhost:3001/tamvang`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(tamvang),
    })
      .then((response) => {
        response.json();
        console.log(tamvang);
        setPopupSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
    fetch(`http://localhost:3001/dangkytamvang/${selectedAbsenceInfo.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDeleteAction = () => {
    setInspectDetail(false);
    fetch(`http://localhost:3001/dangkytamvang/${selectedAbsenceInfo.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        response.json();
      })
      .catch((error) => {
        console.log(error);
      });
    location.reload();
  };
  const handleSuccess = () => {
    setPopupSuccess(false);
    setInspectDetail(false);
    location.reload();
  };

  useEffect(() => {
    const getListDangKy = async () => {
      let response = await fetch(`http://localhost:3001/dangkytamvang`);
      const data = await response.json();
      let listCuDanArray = [];
      let listAppartmentArray = [];
      for (let i in data) {
        response = await fetch(
          `http://localhost:3001/cudan?ID=${data[i].MSCD}`
        );
        const cudan = await response.json();
        listCuDanArray.push(cudan[0]);
        response = await fetch(
          `http://localhost:3001/chungcu-cudan?MSCD=${data[i].MSCD}`
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
      setListCuDan(listCuDanArray);
      setListCanHo(listAppartmentArray);
      setListDangKy(data);
    };
    getListDangKy();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(listDangKy.length / 10));
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const slicedData = listDangKy.slice(startIndex, endIndex);
  }, [listDangKy, currentPage]);

  return (
    <div className="h-screen">
      <PoliceHeader />
      <div className="flex">
        <SidebarPolice tab={"Tạm vắng"} />
        <div id="NewRootRoot" className="flex flex-row w-[82%] items-start">
          <div className="bg-[#f5f5f5] flex flex-col gap-6 w-full font-['Nunito_Sans'] items-start pt-6">
            <div className="flex flex-row gap-3 w-full items-center justify-between">
              <div className="text-2xl font-bold ml-8 text-center">
                Danh sách đăng ký tạm vắng
              </div>
            </div>
            <div className="flex flex-col ml-8 w-full h-max items-start pl-5 py-5">
              <div className="flex flex-col ml-1 w-full items-start"></div>
              <div className="flex flex-col w-4/5 items-start mt-2 mb-4">
                <div className="flex flex-col ml-8 w-full h-max items-start pl-5">
                  <div className="flex flex-col ml-1 w-full items-start">
                    <div>
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
                                Ngày bắt đầu
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Ngày kết thúc
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Căn hộ
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Lý do
                              </th>
                            </tr>
                          </thead>
                          <tbody className="font-medium cursor-pointer overflow-y-scroll">
                            {listDangKy.length ? (
                              listDangKy.map((dangky, key) => {
                                return (
                                  <tr
                                    className="bg-[#b1c9f1] border-b"
                                    key={key}
                                  >
                                    <td className="px-6 py-4 ">
                                      {key + 1 + 10 * (currentPage - 1)}
                                    </td>
                                    <td
                                      onClick={() => {
                                        setInspectDetail(true);
                                        setSelectedResidence(
                                          listCuDan[
                                            key + 10 * (currentPage - 1)
                                          ]
                                        );
                                        setSelectedAbsenceInfo(dangky);
                                        setSelectedAppartment(
                                          listCanHo[
                                            key + 10 * (currentPage - 1)
                                          ]
                                        );
                                      }}
                                      className="px-6 py-4"
                                    >
                                      {
                                        listCuDan[key + 10 * (currentPage - 1)]
                                          .fullname
                                      }
                                    </td>
                                    <td className="px-6 py-4">
                                      {dangky.ngayBatDau}
                                    </td>
                                    <td className="px-6 py-4">
                                      {dangky.ngayKetThuc}
                                    </td>
                                    <td className="px-6 py-4">
                                      {listCanHo[key + 10 * (currentPage - 1)]}
                                    </td>
                                    <td className="px-6 py-4">{dangky.lyDo}</td>
                                  </tr>
                                );
                              })
                            ) : (
                              <h3 className="mt-10">
                                Không tìm thấy cư dân đăng ký
                              </h3>
                            )}
                          </tbody>
                        </table>
                      </div>
                      {listDangKy.length ? (
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
        <PopupAbsenceDetail
          isOpen={inspectDetail}
          onClose={handleClosePopup}
          onConfirm={handleConfirmAction}
          onDelete={handleDeleteAction}
          residence={selectedResidence}
          appartment={selectedAppartment}
          absence={selectedAbsenceInfo}
        />
        <PopupSuccess
          isOpen={popupSuccess}
          onClose={handleSuccess}
          message="Duyệt đơn đăng ký tạm vắng thành công!"
        />
      </div>
    </div>
  );
}

export default InspectAbsence;
