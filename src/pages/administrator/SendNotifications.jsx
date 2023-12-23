import { useNavigate } from "react-router-dom";
import AdministratorHeader from "../../components/AdministratorHeader";
import SidebarAdministrator from "../../components/SidebarAdministrator";
function SendNotifications() {
    const navigate = useNavigate()
    return (
        <div className="s-Screen">
            <AdministratorHeader />
            <div className="flex">
                <SidebarAdministrator />
                <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-[#d9d9d9] flex flex-col justify-center gap-20 w-full font-['Nunito_Sans'] items-start px-16 py-4">
                        <div className="flex flex-col ml-4 gap-12 w-full items-start">
                            <div className="flex flex-row justify-between mb-1 w-2/3 items-start">
                                <div className="text-2xl font-bold mt-32">Tiêu đề</div>
                                <div className="flex flex-col gap-10 w-3/5 items-start">
                                    <div className="text-5xl font-bold capitalize">Gửi thông báo</div>
                                    <input
                                        type="text"
                                        name="search"
                                        id="search"
                                        placeholder=""
                                        className="text-[#adaaaa] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row mt-8 gap-3 w-4/5 h-10 items-start px-3 rounded-lg mr-2"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row justify-between ml-px w-full items-start">
                                <div className="text-2xl font-bold mt-2 w-1/7 m1-[1px]">Nội dung</div>
                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    placeholder=""
                                    className="text-[#adaaaa] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row mt-4 gap-3 w-3/4 h-40 items-start px-3 rounded-lg mr-2"
                                />

                            </div>
                            <div className="flex flex-row gap-20 w-4/5 font-['Nunito_Sans'] items-start mb-1 ml-px">
                                <div className="text-2xl font-bold mt-4">Đối tượng gửi</div>
                                <div className="text-[#adaaaa] mt-px shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between w-3/5 h-11 items-start mt-2">
                                    <select
                                        name="role"
                                        id="role"
                                        className="w-full h-12 px-5"
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <option value="Resident">Dân cư</option>
                                        <option value="Admin">Quản trị</option>
                                        <option value="Manager">Quản lý</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between ml-px w-3/5 font-['Nunito_Sans'] items-start">
                                <div className="text-2xl font-bold mt-4">Thời gian</div>
                                <input
                                        type="text"
                                        name="search"
                                        id="search"
                                        placeholder=""
                                        className="text-[#adaaaa] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row mt-3 gap-3 w-3/5 h-10 items-start px-3 rounded-lg ml-[-2px]"
                                    />
                            </div>
                        </div>
                        <div className="flex flex-row ml-64 gap-16 w-2/5 items-start">
                            <div className="text-center text-xl uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-2/5 h-16 items-start pt-5 px-8 border-0 rounded-lg">
                                huỷ
                            </div>
                            <div className="text-center text-xl uppercase text-white bg-[#99b7f0] flex flex-row w-2/5 h-16 items-start pt-5 px-8 rounded-lg">
                                Gửi
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default SendNotifications;