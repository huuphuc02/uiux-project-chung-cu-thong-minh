function PopupTempDetail ({isOpen, onClose, onConfirm,onDelete, residence}){
    return (
        <div className={`${isOpen ? "" : "hidden"}`}>
            <div
                id="popup-modal"
                tabIndex="-1"
                className="bg-opacity-50 bg-gray-800 p-40 px-96 overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center w-full h-screen"
            >
                <div className="relative p-4 w-[600px] max-h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        <button
                        type="button"
                        className="absolute top-3 end-2.5 text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="popup-modal"
                        onClick={onClose}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    <div className="p-4 md:p-5 text-center">
                        <h2 className="mb-5 text-lg font-normal text-black">Đăng ký tạm trú</h2>
                        <div className="flex flex-row gap-2 w-2/3 items-start text-start ml-20 pt-5 pb-13 px-5 justify-start">
                            <h3 className="mb-5 text-lg font-normal text-black">Họ tên:</h3>
                            <h3 className="mb-5 text-lg font-normal text-black ml-20">{residence.fullname}</h3>
                        </div>
                        <div className="flex flex-row gap-3 w-2/3 items-start text-start ml-20 pt-2 pb-15 px-5 justify-start">
                            <h3 className="mb-5 text-lg font-normal text-black">Số CCCD:</h3>
                            <h3 className="mb-5 text-lg font-normal text-black ml-14">{residence.CCCD}</h3>
                        </div>
                        <div className="flex flex-row gap-2 w-2/3 items-start text-start ml-20 pt-2 pb-15 px-5 justify-start">
                            <h3 className="mb-5 text-lg font-normal text-black">Ngày Sinh:</h3>
                            <h3 className="mb-5 text-lg font-normal text-black ml-14">{residence.DoB}</h3>
                        </div>
                        <div className="flex flex-row gap-1 w-2/3 items-start text-start ml-20 pt-2 pb-15 px-5 justify-start">
                            <h3 className="mb-5 text-lg font-normal text-black">Giới tính:</h3>
                            <h3 className="mb-5 text-lg font-normal text-black ml-20">{residence.gender}</h3>
                        </div>
                        <div className="flex flex-row gap-1 w-2/3 items-start text-start ml-20 pt-2 pb-15 px-5 justify-start">
                            <h3 className="mb-5 text-lg font-normal text-black">Số điện thoại:</h3>
                            <h3 className="mb-5 text-lg font-normal text-black ml-10">{residence.phone}</h3>
                        </div>
                        <div className="flex flex-row w-5/6 items-start text-start ml-20 pt-2 pb-15 px-5 justify-start">
                            <h3 className="mb-5 items-start w-2/3 text-lg font-normal text-black">Địa chỉ thường trú:</h3>
                            <h3 className="mb-5 text-lg font-normal text-black ml-10">{residence.thuongTru}</h3>
                        </div>
                        <div className="flex flex-row gap-1 w-2/3 items-start text-center ml-20 pt-2 pb-15 px-5 justify-start">
                            <h3 className="mb-5 text-lg font-normal text-black">Ngày bắt đầu:</h3>
                            <h3 className="mb-5 text-lg font-normal text-black ml-9">{residence.ngayBatDau}</h3>
                        </div>
                        <div className="flex flex-row gap-1 w-2/3 items-start text-center ml-20 pt-2 pb-15 px-5 justify-start">
                            <h3 className="mb-5 text-lg font-normal text-black">Ngày kết thúc:</h3>
                            <h3 className="mb-5 text-lg font-normal text-black ml-8">{residence.ngayKetThuc}</h3>
                        </div>
                        <div className="flex flex-row gap-2 w-2/3 items-start text-center ml-20 pt-2 pb-15 px-5 justify-start">
                            <h3 className="mb-5 text-lg font-normal text-black">Lý do:</h3>
                            <h3 className="mb-5 text-lg font-normal text-black ml-24">{residence.lyDo}</h3>
                        </div>
                        <div className="flex flex-row gap-2 w-2/3 items-start text-center ml-20 pt-2 pb-15 px-5 justify-start">
                            <h3 className="mb-5 text-lg font-normal text-black">Căn hộ:</h3>
                            <h3 className="mb-5 text-lg font-normal text-black ml-20">{residence.canHo}</h3>
                        </div>
                        
                        <button
                            data-modal-hide="popup-modal"
                            type="button"
                            className="text-white bg-[#99b7f0] hover:bg-[#5175b8] font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                            onClick={onConfirm}
                        >Duyệt</button>
                        <button
                            data-modal-hide="popup-modal"
                            type="button"
                            className="text-white bg-gray-500 hover:bg-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
                            onClick={onDelete}
                        >
                            Xóa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PopupTempDetail;