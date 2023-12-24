import { useNavigate } from "react-router-dom";
import AdministratorHeader from "../../components/AdministratorHeader";
import SidebarAdministrator from "../../components/SidebarAdministrator";
function Statistics() {
    const navigate = useNavigate()
    return (
        <div className="h-Screen">
            <AdministratorHeader />
            <div className="flex">
                <SidebarAdministrator />
                <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-[#d9d9d9] flex flex-col justify-end gap-6 w-full font-['Nunito_Sans'] items-start pt-3 px-8">
                        <div className="text-3xl font-bold capitalize mt-9 ml-6">Thống kê cư dân</div>
                        <div className="flex flex-row justify-between w-full items-start">
                            <div className="flex flex-col gap-8 w-2/5 items-start ml-5">
                                <div className="bg-white flex flex-row gap-2 w-[370px] h-[141px] items-start pt-4 px-10 rounded-lg mt-1">
                                    <div className="text-6xl font-bold text-[#99b7f0] mt-6">40</div>
                                    <div id="CnH" className="text-[40px] mt-6">
                                        căn hộ{" "}
                                    </div>
                                </div>
                                <div id="NewRootRoot" className="flex flex-row w-full items-start">
                                    <div className="text-center text-xl font-['Nunito_Sans'] uppercase text-white bg-[#5387e9] flex flex-row justify-center pt-3 w-[242px] h-12 items-start rounded-lg">
                                        Xem chi tiết
                                    </div>
                                </div>

                            </div>
                            <div className="relative flex flex-row mt-1 pt-4 w-1/2 items-start">
                                <div className="text-5xl w-5/6 h-[141px] bg-white absolute top-0 left-7 flex flex-row justify-end items-start pt-5 px-12 rounded-lg ml-[-15]">
                                    cư dân
                                </div>
                                <div className="text-center text-6xl font-bold text-[#99b7f0] relative mt-5 mb-4 ml-20">
                                    100
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 w-3/5 font-['Nunito_Sans'] items-start">
                            <div className="flex flex-col w-full items-start">
                                <div className="text-3xl font-bold capitalize text-right ml-6 mb-4">Thống kê khoản phí</div>
                                <div className="bg-white flex flex-row gap-10 w-[600px] font-sans items-start pt-6 pl-6 pr-10 rounded-lg ml-6">
                                    <div className="flex flex-col mt-[288px] gap-1 w-24 items-start">
                                        <div className="flex flex-row gap-3 w-24 items-start">
                                            <img
                                                src="https://file.rendit.io/n/MFiVeFljhRr9dSy4bN1L.svg"
                                                alt="Bullet"
                                                id="Bullet"
                                                className="w-4"
                                            />
                                            <div id="InLt1" className="text-xs font-medium text-black/38">
                                                Điện - 01 <span className="text-xs font-sans">(lt)</span>
                                            </div>
                                        </div>
                                        <div className="font-medium text-black/87 ml-6">12,423</div>
                                    </div>
                                    <div className="flex flex-col mb-6 gap-12 w-3/4 items-start">
                                        <img
                                            src="https://file.rendit.io/n/pzzUJWf2ixxBYwz97Nat.svg"
                                            alt="Doughnut"
                                            id="Doughnut"
                                        />
                                        <div className="flex flex-row ml-1 gap-6 w-full font-sans items-start">
                                            <div className="flex flex-col gap-1 w-1/3 items-start">
                                                <div className="flex flex-row gap-3 w-full items-start">
                                                    <img
                                                        src="https://file.rendit.io/n/4rtyJurxj3cOVHEBlNwO.svg"
                                                        alt="Bullet1"
                                                        id="Bullet1"
                                                        className="w-4"
                                                    />
                                                    <div
                                                        id="PhThuLt1"
                                                        className="text-xs font-medium text-black/38"
                                                    >
                                                        Phụ thu - 01 <span className="text-xs font-sans">(lt)</span>
                                                    </div>
                                                </div>
                                                <div className="font-medium text-black/87 ml-6">12,423</div>
                                            </div>
                                            <div className="flex flex-col mr-px gap-1 w-1/3 items-start">
                                                <div className="flex flex-row gap-3 w-full items-start">
                                                    <img
                                                        src="https://file.rendit.io/n/RNHDRsvagmQ4pNn27VIo.svg"
                                                        alt="Bullet2"
                                                        id="Bullet2"
                                                        className="w-4"
                                                    />
                                                    <div
                                                        id="DchVLt1"
                                                        className="text-xs font-medium text-black/38"
                                                    >
                                                        Dịch vụ - 01 <span className="text-xs font-sans">(lt)</span>
                                                    </div>
                                                </div>
                                                <div className="font-medium text-black/87 ml-6">12,423</div>
                                            </div>
                                            <div className="flex flex-col gap-1 w-24 font-sans items-start">
                                                <div className="flex flex-row gap-3 w-24 items-start">
                                                    <img
                                                        src="https://file.rendit.io/n/eh2tjljTkcBke8qCMQBI.svg"
                                                        alt="Bullet3"
                                                        id="Bullet3"
                                                        className="w-4"
                                                    />
                                                    <div id="NcLt1" className="text-xs font-medium text-black/38">
                                                        Nước - 01 <span className="text-xs font-sans">(lt)</span>
                                                    </div>
                                                </div>
                                                <div className="font-medium text-black/87 ml-6">12,423</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-xl uppercase text-white bg-[#5387e9] flex flex-row justify-center pt-3 w-2/5 h-12 items-start rounded-lg ml-6 mb-3">
                                Xem chi tiết
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Statistics;