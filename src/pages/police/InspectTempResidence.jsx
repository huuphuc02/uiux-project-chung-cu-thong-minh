import { useNavigate } from "react-router-dom";
import PoliceHeader from "../../components/police/PoliceHeader";
import SidebarPolice from "../../components/police/SidebarPolice";
import { Fragment, useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import PopupTempDetail from "../../components/police/PopupTempDetail";

function InspectTempResidence() {
    const navigate = useNavigate();
    const [listDangKy, setListDangKy] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [inspectDetail, setInspectDetail] = useState(false);
    const [selectedResidence, setSelectedResidence] = useState({});

    useEffect(() => {
        const getListDangKy = async () => {
            let response = await fetch(`http://localhost:3001/dangkytamtru`);
            const data = await response.json();
            setListDangKy(data);
        };
        getListDangKy();
    }, []);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };
    const handleClosePopup = () => {
        // Xử lý khi component con được đóng
        setInspectDetail(false);
    };
    const handleConfirmAction = () => {
        setInspectDetail(false);
        
    }
    
    const handleDeleteAction = () => {
        setInspectDetail(false);
    }

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
                <SidebarPolice />
                <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-[#d9d9d9] flex flex-col gap-6 w-full font-['Nunito_Sans'] items-start pt-6 pb-12 px-5">
                        <div className="flex flex-row gap-3 w-full items-center pt-6 pb-12 px-5 justify-between">
                            <div className="text-3xl font-bold capitalize ml-8 text-center">Danh sách đăng ký tạm trú</div>

                        </div>
                        <div className="bg-white flex flex-col ml-8 gap-1 w-full h-[1024px] items-start pl-5 py-5">
                            <div className="flex flex-col ml-1 gap-10 w-full items-start"></div>
                            <div className="flex flex-col w-4/5 items-start mt-2 mb-4">
                                <div className="bg-white flex flex-col ml-8 gap-12 w-full h-[761px] items-start pl-5 py-5">
                                    <div className="flex flex-col ml-1 gap-10 w-full items-start">
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
                                                                    <tr className="bg-[#b1c9f1] border-b" key={key}>
                                                                        <td className="px-6 py-4 ">
                                                                            {(key + 1)+10*(currentPage-1)}
                                                                        </td>
                                                                        <td
                                                                        onClick={()=>{
                                                                            setInspectDetail(true);
                                                                            setSelectedResidence(dangky);
                                                                        }}
                                                                        className="px-6 py-4">{dangky.fullname}</td>
                                                                        <td className="px-6 py-4">{dangky.ngayBatDau}</td>
                                                                        <td className="px-6 py-4">{dangky.ngayKetThuc}</td>
                                                                        <td className="px-6 py-4">{dangky.canHo}</td>
                                                                        <td className="px-6 py-4">{dangky.lyDo}</td>
                                                                    </tr>
                                                                );
                                                            })
                                                        ) : (
                                                            <h3 className="mt-10">Không tìm thấy cư dân đăng ký</h3>
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
                <PopupTempDetail
                    isOpen={inspectDetail}
                    onClose={handleClosePopup}
                    onConfirm={handleConfirmAction}
                    onDelete={handleDeleteAction}
                    residence={selectedResidence}
                />
            </div>

        </div>
    );
}

export default InspectTempResidence;
