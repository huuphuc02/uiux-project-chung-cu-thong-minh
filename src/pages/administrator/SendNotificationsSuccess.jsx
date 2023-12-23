import { useNavigate } from "react-router-dom";
import AdministratorHeader from "../../components/AdministratorHeader";
import SidebarAdministrator from "../../components/SidebarAdministrator";
function SendNotificationsSuccess() {
    const navigate = useNavigate()

    return (
        <div className="h-Screen">
            <AdministratorHeader />
            <div className="flex">
                <SidebarAdministrator />
                <div className="text-5xl font-['Nunito_Sans'] font-bold capitalize w-full mt-8">
                    Gửi thông báo
                    <div id="NewRootRoot" className="flex flex-row w-full items-start">
                        <div className="bg-white flex flex-row justify-end gap-12 w-full font-['Nunito_Sans'] items-start pt-10 px-6 rounded-lg">
                            <div className="flex flex-col justify-between mt-32 w-1/6 h-[352px] items-start">
                                <div className="flex flex-col gap-8 w-full h-24 items-start ">
                                    <div id="Tiu" className="text-2xl font-bold">
                                        Tiêu đề:{" "}
                                    </div>
                                    <div id="NiDung" className="text-2xl font-bold">
                                        Nội dung:{" "}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 w-full items-start">
                                    <div id="ITng" className="text-2xl font-bold">
                                        Đối tượng:{" "}
                                    </div>
                                    <div id="ThiGian" className="text-2xl font-bold">
                                        Thời gian:{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col mb-[143px] gap-24 w-3/4 items-start">
                                <div className="text-3xl font-bold capitalize">
                                    bạn đã gửi thông báo thành công
                                </div>
                                <div className="flex flex-col ml-32 gap-8 w-5/6 items-start">
                                    <div id="SKinGingSinhTiChungC" className="text-2xl font-semibold">
                                        Sự kiện Giáng Sinh tại Chung cư{" "}
                                    </div>
                                    <div className="flex flex-col justify-between gap-6 w-full items-start">
                                        <div className="text-2xl font-semibold w-full">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.{" "}
                                        </div>
                                        <div id="CDn" className="text-2xl font-semibold mt-4">
                                            Cư dân{" "}
                                        </div>
                                        <div id="Element1" className="text-2xl font-semibold">
                                            20/12/2023{" "}
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
export default SendNotificationsSuccess;