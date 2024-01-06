// import { useNavigate } from "react-router-dom";
import AdministratorHeader from "../../components/administrator/AdministratorHeader";
import SidebarAdministrator from "../../components/administrator/SidebarAdministrator";
function ChangePasswordSuccess() {
  // const navigate = useNavigate();
  return (
    <div className="h-Screen">
      <AdministratorHeader />
      <div className="flex">
        <SidebarAdministrator />
        <div id="NewRootRoot" className="flex flex-row w-full items-start">
          <div className="bg-[#d9d9d9] flex flex-col justify-center gap-6 w-full font-['Nunito_Sans'] items-start pt-10 pb-8 px-10">
            <div className="text-3xl font-bold capitalize ml-2 text-[#00ee43]">
              Bạn đã đổi mật khẩu thành công
            </div>
            <div className="bg-white flex flex-row ml-1 gap-20 w-full items-start pt-16 px-24">
              <div className="flex flex-col mt-12 gap-16 w-1/2 items-start">
                <div className="flex flex-col ml-px gap-12 w-4/5 items-start">
                  <div className="flex flex-col gap-10 w-full items-start">
                    <div className="flex flex-col gap-8 w-full items-start">
                      <div className="text-2xl font-bold">Họ và tên:</div>
                      <div className="flex flex-col mb-px gap-6 w-full font-['Nunito_Sans'] items-start mt-3">
                        <div className="text-2xl font-bold">Chức vụ</div>
                        <div className="text-2xl font-bold mt-6">
                          Ngày sinh:
                        </div>
                      </div>
                      <div className="text-2xl font-bold mt-2">Giới tính:</div>
                    </div>
                    <div className="text-2xl font-bold mr-9">
                      Tên đăng nhập:
                    </div>
                    <div className="text-2xl font-bold mt-2">Mật khẩu:</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12 w-1/2 items-start mt-12 mb-16">
                <div className="flex flex-col gap-10 w-full items-start">
                  <div className="flex flex-col ml-1 gap-8 w-full items-start">
                    <div className="text-2xl font-semibold">
                      Nguyễn Quốc Thành
                    </div>
                    <div className="flex flex-col mb-px gap-6 w-2/3 font-['Nunito_Sans'] items-start">
                      <div className="text-2xl font-semibold mt-3">
                        Quản trị viên
                      </div>
                      <div className="text-2xl font-semibold mt-7">
                        23/09/1980
                      </div>
                    </div>
                    <div className="text-2xl font-semibold mt-2">Nam</div>
                  </div>
                  <div className="flex flex-col gap-8 w-full h-[205px] items-start">
                    <div className="text-2xl font-semibold mb-px ml-1">
                      Kinh
                    </div>
                    <div
                      id="NewRootRoot"
                      className="flex flex-row w-full items-start"
                    >
                      <div className="border-solid border-[#cecece] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between w-full font-['Nunito_Sans'] items-start pt-1 pl-5 pr-2 border">
                        <div className="relative flex flex-row mb-2 pl-2 w-16 items-start">
                          <div className="text-sm text-[#777777] absolute top-0 left-0 h-5 w-16">
                            Password
                          </div>
                          <div
                            id="Text1"
                            className="leading-[24px] text-[#8f8f8f] relative mt-4"
                          >
                            •••••••
                          </div>
                        </div>
                        <img
                          src="https://file.rendit.io/n/hCCwI60Un6WrraSTr3pE.svg"
                          alt="Group"
                          id="Group"
                          className="bg-white mt-2 w-6"
                        />
                      </div>
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
export default ChangePasswordSuccess;
