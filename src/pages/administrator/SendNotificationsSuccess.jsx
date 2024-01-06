import AdministratorHeader from "../../components/administrator/AdministratorHeader";
import SidebarAdministrator from "../../components/administrator/SidebarAdministrator";
function SendNotificationsSuccess() {
  return (
    <div className="h-Screen">
      <AdministratorHeader />
      <div className="flex">
        <SidebarAdministrator tab={"Thông báo"} />
        <div className=" text-2xl font-['Nunito_Sans'] font-bold text-left w-4/5 mt-4 mb-3">
          Gửi thông báo
          <div id="NewRootRoot" className="flex flex-row w-full items-start">
            <div className="bg-[#f5f5f5] flex flex-row justify-end gap-12 w-full font-['Nunito_Sans'] items-start pt-10 px-6 rounded-lg mt-4">
              <div className="flex flex-col justify-between mt-20 w-1/6 h-[352px] items-start">
                <div className="flex flex-col gap-8 w-full h-24 items-start ">
                  <div id="Tiu" className="text-xl font-bold">
                    Tiêu đề:{" "}
                  </div>
                  <div id="NiDung" className="text-xl font-bold">
                    Nội dung:{" "}
                  </div>
                  <div id="ITng" className="text-xl font-bold">
                    Đối tượng:{" "}
                  </div>
                  <div id="ThiGian" className="text-xl font-bold">
                    Thời gian:{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-[143px] gap-16 w-3/4 items-start">
                <div className="text-xl text-[#00ee43] ml-8 font-bold capitalize">
                  bạn đã gửi thông báo thành công
                </div>
                <div className="flex flex-col ml-32 gap-4 w-5/6 items-start">
                  <div
                    id="SKinGingSinhTiChungC"
                    className="text-xl font-semibold"
                  >
                    Sự kiện Giáng Sinh tại Chung cư{" "}
                  </div>
                  <div className="flex flex-col justify-between gap-6 w-full items-start">
                    <p className="text-xl font-semibold w-full">
                      Tổ chức giáng sinh 2023 cho các em nhỏ trong chung cư
                    </p>
                    <div id="CDn" className="text-xl font-semibold mt-4">
                      Cư dân{" "}
                    </div>
                    <div id="Element1" className="text-xl font-semibold">
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
