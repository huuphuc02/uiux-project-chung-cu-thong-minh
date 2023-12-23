import { useNavigate } from "react-router-dom";
import AdministratorHeader from "../../components/AdministratorHeader";
import SidebarAdministrator from "../../components/SidebarAdministrator";
function Setting() {
    const navigate = useNavigate()
    return (
        <div className="h-Screen">
            <AdministratorHeader />
            <div className="flex">
                <SidebarAdministrator />
                <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-white flex flex-col justify-center gap-6 w-full font-['Nunito_Sans'] items-start pt-10 pb-8 px-4">
                        <div className="text-3xl font-bold capitalize ml-8">cài đặt tài khoản</div>
                        <div className="bg-white flex flex-row ml-6 gap-20 w-full items-start pt-16 px-24">
                            <div className="flex flex-col mt-12 gap-16 w-1/4 items-start">
                                <div className="flex flex-col ml-px gap-12 w-4/5 items-start">
                                    <div className="flex flex-col gap-10 w-full items-start">
                                        <div className="flex flex-col gap-8 w-2/3 items-start">
                                            <div className="text-2xl font-bold">Họ và tên:</div>
                                            <div className="flex flex-col mb-px gap-6 w-full font-['Nunito_Sans'] items-start">
                                                <div className="text-2xl font-bold">Chức vụ</div>
                                                <div className="text-2xl font-bold">Ngày sinh:</div>
                                            </div>
                                            <div className="text-2xl font-bold">Giới tính:</div>
                                        </div>
                                        <div className="text-2xl font-bold mb-px">Tên đăng nhập:</div>
                                        <div className="text-2xl font-bold">Mật khẩu cũ:</div>
                                    </div>
                                    <div className="text-2xl font-bold">Mật khẩu mới:</div>
                                </div>
                                <button
                                    id="ButtonRoot"
                                    className="flex flex-row w-full cursor-pointer items-start"
                                >
                                    <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-full h-16 items-start pt-5 px-10 border-0 rounded-lg">
                                        huỷ
                                    </div>
                                </button>
                            </div>
                            <div className="flex flex-col gap-12 w-1/4 items-start mt-12 mb-16">
                                <div className="flex flex-col gap-10 w-full items-start">
                                    <div className="flex flex-col ml-1 gap-8 w-full items-start">
                                        <div className="text-2xl font-semibold">Nguyễn Hoàng Hiệp</div>
                                        <div className="flex flex-col mb-px gap-6 w-2/3 font-['Nunito_Sans'] items-start">
                                            <div className="text-2xl font-semibold">Quản trị viên</div>
                                            <div className="text-2xl font-semibold">23/09/1980</div>
                                        </div>
                                        <div className="text-2xl font-semibold">Nam</div>
                                    </div>
                                    <div className="flex flex-col gap-8 w-full h-[205px] items-start">
                                        <div className="text-2xl font-semibold mb-px ml-1">Kinh</div>
                                        <div className="border-solid border-[#5387e9] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between w-full items-start pt-1 pl-5 pr-2 border">
                                            <div className="relative flex flex-row mb-2 pl-px w-16 items-start">
                                                <div className="text-sm text-[#777777] absolute top-0 left-0 h-5 w-16">
                                                    Password
                                                </div>
                                                <div
                                                    id="Text2"
                                                    className="leading-[24px] text-[#212121] relative mt-4"
                                                >
                                                    •••••••|
                                                </div>
                                            </div>
                                            <img
                                                src="https://file.rendit.io/n/1dPfQmBfz9So0ylZJlvU.svg"
                                                alt="Group2"
                                                className="mt-2 w-6"
                                            />
                                        </div>
                                        <div className="border-solid border-[#5387e9] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between w-full font-['Nunito_Sans'] items-start pt-1 pl-5 pr-2 border">
                                            <div className="relative flex flex-row mb-2 pl-px w-16 items-start">
                                                <div className="text-sm text-[#777777] absolute top-0 left-0 h-5 w-16">
                                                    Password
                                                </div>
                                                <div
                                                    id="Text1"
                                                    className="leading-[24px] text-[#212121] relative mt-4"
                                                >
                                                    •••••••|
                                                </div>
                                            </div>
                                            <img
                                                src="https://file.rendit.io/n/1dPfQmBfz9So0ylZJlvU.svg"
                                                alt="Group"
                                                className="mt-2 w-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    id="ButtonRoot"
                                    className="relative flex flex-row justify-center w-full cursor-pointer font-['Nunito_Sans'] items-start"
                                >
                                    <div className="w-full h-16 bg-[#99b7f0] absolute top-0 left-0 rounded-lg" />
                                    <div
                                        id="Gi"
                                        className="text-center text-xl uppercase text-white relative w-3/5 mt-2 mb-0"
                                    >
                                        lưu thông tin
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Setting;