import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AdministratorHeader from '../../components/AdministratorHeader';
import SidebarAdministrator from '../../components/SidebarAdministrator';
function FeesStatistics() {
    const navigate = useNavigate();
    const [feesData, setFeesData] = useState([]);

    useEffect(() => {
        // Fetch data from the JSON server when the component mounts
        fetch('http://localhost:3001/KhoanPhi')
            .then(response => response.json())
            .then(data => setFeesData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className='h-Screen'>
            <AdministratorHeader />
            <div className='flex'>
                <SidebarAdministrator />
                <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-[#d9d9d9] flex flex-col gap-6 w-full font-['Nunito_Sans'] items-start pt-6 pb-12 px-5">
                        <div className="text-4xl font-bold capitalize ml-8">Thống kê khoản phí</div>
                        <div className="bg-white flex flex-col ml-1.3 gap-12 w-full h-[761px] items-start pl-5 py-5">
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
                                            <div className="text-lg font-semibold text-[#777777] mt-2 ml-9">
                                                Lọc theo loại phí:
                                            </div>
                                            <div className="relative flex flex-row justify-end pt-3 w-20 items-start">
                                                <select className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-30 h-10 bg-white absolute top-0 left-0 flex flex-row items-start pt-3 px-2 rounded-lg">
                                                    <option value="1">Phí quản lý</option>
                                                    <option value="2">Phí gửi xe</option>
                                                    <option value="3">Phí dịch vụ</option>
                                                    <option value="4">Phí bảo trì</option>
                                                    <option value="5">Phí thuê</option>
                                                    <option value="6">Tiền điện, nước</option>
                                                    <option value="7">Phí thiết bị</option>
                                                    <option value="8">Phí bảo hiểm</option>
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
                                                {[101, 102, 103, 104, 105, 201, 202, 203, 204, 205, 301, 302, 303, 304, 305, 401, 402, 403, 404, 405].map((optionValue) => (
                                                    <option key={optionValue} value={optionValue}>
                                                        {optionValue}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-1 gap-4 w-1/2 items-start ml-[40px]">
                                    <div className="text-lg font-semibold text-[#777777] mt-2 ml-9">
                                        Lọc theo tháng:
                                    </div>
                                    <div className="relative flex flex-row justify-end pt-3 w-20 items-start">
                                        <select className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-30 h-10 bg-white absolute top-0 left-0 flex flex-row items-start pt-3 px-2 rounded-lg ml-15">
                                            <option value="1">Tháng 1</option>
                                            <option value="2">Tháng 2</option>
                                            <option value="3">Tháng 3</option>
                                            <option value="4">Tháng 4</option>
                                            <option value="5">Tháng 5</option>
                                            <option value="6">Tháng 6</option>
                                            <option value="7">Tháng 7</option>
                                            <option value="8">Tháng 8</option>
                                            <option value="9">Tháng 9</option>
                                            <option value="10">Tháng 10</option>
                                            <option value="11">Tháng 11</option>
                                            <option value="12">Tháng 12</option>
                                        </select>
                                    </div>
                                    <div className="text-lg font-semibold text-[#777777] mt-2 ml-9">
                                        Lọc theo năm:
                                    </div>
                                    <div className="relative flex flex-row justify-end pt-3 w-20 items-start">
                                        <select className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-30 h-10 bg-white absolute top-0 left-0 flex flex-row items-start pt-3 px-2 rounded-lg ml-15">
                                            <option value="1">2021</option>
                                            <option value="2">2022</option>
                                            <option value="3">2023</option>
                                        </select>
                                        <table className="w-full border-collapse border border-[#d9d9d9] mt-6">
                                            <thead>
                                                <tr>
                                                    <th className="border border-[#d9d9d9] p-2">Loại khoản phí</th>
                                                    <th className="border border-[#d9d9d9] p-2">Tên khoản phí</th>
                                                    <th className="border border-[#d9d9d9] p-2">Căn hộ</th>
                                                    <th className="border border-[#d9d9d9] p-2">Số tiền</th>
                                                    <th className="border border-[#d9d9d9] p-2">Hạn đóng</th>
                                                    {/* Add more table headers based on your data structure */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {feesData.map(item => (
                                                    <tr key={item.id}>
                                                        <td className="border border-[#d9d9d9] p-2">{item.type}</td>
                                                        <td className="border border-[#d9d9d9] p-2">{item.feeName}</td>
                                                        <td className="border border-[#d9d9d9] p-2">{item.apartmentId}</td>
                                                        <td className="border border-[#d9d9d9] p-2">{item.cost}</td>
                                                        <td className="border border-[#d9d9d9] p-2">{item.deadline}</td>
                                                        {/* Add more table cells based on your data structure */}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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


export default FeesStatistics;