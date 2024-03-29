import { useNavigate } from "react-router-dom";
import AdministratorHeader from "../../components/administrator/AdministratorHeader";
import SidebarAdministrator from "../../components/administrator/SidebarAdministrator";
function Setting() {
  const navigate = useNavigate();
  return (
    <div className="h-Screen">
      <AdministratorHeader />
      <div className="flex">
        <SidebarAdministrator tab={"Cài đặt"} />
        <div id="NewRootRoot" className="flex flex-row w-[82%] items-start">
          <div className="bg-[#f5f5f5] flex flex-col justify-center w-full font-['Nunito_Sans'] items-start pt-4 pb-4 px-10">
            <div className="text-2xl font-bold ml-2">Cài đặt tài khoản</div>
            <div className=" flex flex-row ml-1 gap-2 w-full items-start px-24">
              <div className="flex flex-col mt-12 gap-6 w-1/2 items-start">
                <div className="flex flex-col ml-px gap-8 w-4/5 items-start">
                  <div className="flex flex-col gap-10 w-full items-start">
                    <div className="flex flex-col gap-8 w-full items-start">
                      <div className="text-xl font-bold">Họ và tên:</div>
                      <div className="flex flex-col mb-px gap-6 w-full font-['Nunito_Sans'] items-start mt-3">
                        <div className="text-xl font-bold">Chức vụ</div>
                        <div className="text-xl font-bold mt-6">Ngày sinh:</div>
                      </div>
                      <div className="text-xl font-bold mt-2">Giới tính:</div>
                    </div>
                    <div className="text-xl font-bold mr-9">Tên đăng nhập:</div>
                    <div className="text-xl font-bold">Mật khẩu cũ:</div>
                  </div>
                  <div className="text-xl font-bold">Mật khẩu mới:</div>
                </div>
                <div
                  className="text-center text-xl uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-2/5 h-16 items-start pt-5 pl-10 mt-20 ml-56 border-0 rounded-lg mb-5"
                  onClick={() => navigate("/homepageAdmin")}
                >
                  huỷ
                </div>
              </div>
              <div className="flex flex-col gap-12 w-1/2 items-start mt-12 mb-16">
                <div className="flex flex-col gap-10 w-full items-start">
                  <div className="flex flex-col ml-1 gap-8 w-full items-start">
                    <div className="text-xl font-semibold">
                      Nguyễn Quốc Thành
                    </div>
                    <div className="flex flex-col mb-px gap-6 w-2/3 font-['Nunito_Sans'] items-start">
                      <div className="text-xl font-semibold mt-3">
                        Quản trị viên
                      </div>
                      <div className="text-xl font-semibold mt-7">
                        23/09/1980
                      </div>
                    </div>
                    <div className="text-xl font-semibold mt-2">Nam</div>
                  </div>
                  <div className="flex flex-col gap-8 w-full h-[205px] items-start">
                    <div className="text-xl font-semibold mb-px ml-1">Kinh</div>
                    <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between w-full h-12 items-start">
                      <input
                        type="password"
                        id="Text1"
                        className="pl-5 leading-[24px] mr-2 h-12 w-full text-[#212121]"
                      ></input>
                      <img
                        src="https://file.rendit.io/n/vSKVapmggcl7QPTeULIj.svg"
                        alt="Group2"
                        className="w-6 pt-4 mr-3"
                      />
                    </div>

                    <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between w-full h-12 items-start">
                      <input
                        type="password"
                        id="Text1"
                        className="pl-5 leading-[24px] mr-2 h-12 w-full text-[#212121]"
                      ></input>
                      <img
                        src="https://file.rendit.io/n/vSKVapmggcl7QPTeULIj.svg"
                        alt="Group2"
                        className="w-6 pt-4 mr-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-row justify-center ml-6 w-full items-start">
                  <div className="w-4/5 h-16 bg-[#99b7f0] absolute top-0 left-0 rounded-lg ml-3" />
                  <div
                    id="Gi"
                    className="text-center text-2xl uppercase text-white relative mt-4 w-4/5 mr-8"
                    onClick={() => navigate("/changePasswordSuccess")}
                  >
                    lưu thông tin
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
export default Setting;
