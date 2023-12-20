import Header from "../../components/Header";
import SidebarResident from "../../components/SidebarResident";

function BuildingInfor() {
  return (
    <div>
      <Header />
      <div className="flex">
        <SidebarResident />
        <div
          id="ThongTinChungCuRoot"
          className="bg-[#f5f5f5] flex flex-col pb-4 gap-6 w-[82%] pl-2 pt-2"
        >
          <div className="gap-4">
            <h1 className="text-[22px] text-left font-bold ml-1">
              Thông tin chung cư
            </h1>
            <div className="flex flex-row gap-2 w-full items-start mb-2">
              <div className="flex flex-col gap-3 w-3/5 items-start">
                <img
                  src="https://file.rendit.io/n/SsEuPnag3Xjlk3fOQfLd.png"
                  alt="Image1"
                  id="Image1"
                  className="h-[400px] w-full"
                />
              </div>
              <div className="bg-white flex flex-col w-[38%] h-max items-start pt-4 pb-4 px-3 rounded-lg">
                <h2 className="text-[20px] font-bold w-full">
                  Chung cư Sky Light 125D Minh Khai
                </h2>
                <p className="text-lg mt-4 text-left ml-4">
                  Chung cư cao cấp 125D Minh Khai Sky light nằm ở nơi đầu mối
                  giao thông chiến lược. Tòa nhà sẽ là điểm nhấn của tuyến đường
                  Minh Khai với 2 khối chung cư cao cấp và dãy biệt thự liền kề
                  nằm kế bên. Chỉ từ 1,9 tỷ đồng để sở hữu căn hộ tại nội đô sầm
                  uất không còn là mơ ước nữa, Chung cư cao cấp Sky Light tọa
                  lạc tại số 125D Minh Khai sẽ biến ước mơ của gia đình bạn
                  thành hiện thực.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 w-full items-start">
              <img
                src="https://file.rendit.io/n/O4kWzYClwPDsKG8HbXST.png"
                alt="Image3"
                id="Image3"
                className="mt-2"
              />
              <div className="bg-white relative flex flex-row gap-12 w-[65%] items-start pt-6 px-6 rounded-lg">
                <div className="flex flex-col justify-between items-start mt-1">
                  <div className="ml-2 text-lg text-left gap-10">
                    <div className="flex mb-3">
                      <label className=" font-bold">Quận huyện :</label>
                      <p className="absolute left-52">Quận Hai Bà Trưng</p>
                    </div>
                    <div className="flex mb-3">
                      <label id="ChUT" className=" font-bold">
                        Chủ đầu tư :<br />
                      </label>
                      <p className="absolute left-52">
                        Tổng công ty cơ khí xây dựng COMA
                      </p>
                    </div>
                    <div className="flex mb-3">
                      <label id="QuyM" className=" font-bold">
                        Quy mô :<br />
                      </label>
                      <p className="absolute left-52">
                        02 tòa tháp: tòa A1 và A2, mỗi tòa xây 22 tầng
                      </p>
                    </div>
                    <div className="flex mb-3">
                      <label className=" font-bold">
                        Diện tích quy hoạch : <br />
                      </label>
                      <p className="absolute left-52">15.534 m2</p>
                    </div>
                    <div className="flex mb-3">
                      <label className=" font-bold">
                        Năm khánh thành : <br />
                      </label>
                      <p className="absolute left-52">10/2013</p>
                    </div>
                    <div className="flex mb-3">
                      <label className=" font-bold">
                        Địa chỉ dự án : <br />
                      </label>
                      <p className="absolute left-52">
                        125D Minh Khai, Hai bà Trưng, Hà Nội
                      </p>
                    </div>
                    <div className="flex mb-3">
                      <label id="LinH" className=" font-bold">
                        Liên hệ : <br />
                      </label>
                      <p id="Element3" className="absolute left-52">
                        0123456789
                      </p>
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

export default BuildingInfor;
