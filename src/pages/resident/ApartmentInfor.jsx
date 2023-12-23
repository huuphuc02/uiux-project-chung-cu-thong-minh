import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import SidebarResident from "../../components/SidebarResident";

function Apartment() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="flex">
        <SidebarResident />
        <div className="bg-[#f5f5f5] w-[82%] h-max p-4">
          <h1 id="ThngTinCnHRoot" className="text-[22px] font-bold text-left">
            Thông tin căn hộ
          </h1>
          <div className="bg-white py-5 pl-20">
            <div className="flex mb-4 relative">
              <label id="CnH2" className="text-lg font-bold">
                Căn hộ:
              </label>
              <span
                id="Element2"
                className="text-lg font-medium leading-[26px] absolute left-48"
              >
                203
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="TaNh2" className="text-lg font-bold">
                Tòa nhà:
              </label>
              <span className="text-lg font-medium leading-[26px]  absolute left-48">
                A1
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="Tng1" className="text-lg font-bold">
                Tầng:
              </label>
              <span className="text-lg font-medium leading-[26px]  absolute left-48">
                2
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="DinTch3" className="text-lg font-bold">
                Diện tích:
              </label>
              <span className="text-lg font-medium leading-[26px] absolute left-48">
                80 m2
              </span>
            </div>
            <div>
              <label
                id="DanhSchTHNHVIN6"
                className="flex mb-4 flex-row justify-between  items-start text-lg font-bold "
              >
                Danh sách thành viên
              </label>
            </div>
            <div className="relative w-4/5">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-sm text-white bg-[#445f99] ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Họ và tên
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Ngày sinh
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Giới tính
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quan hệ với chủ hộ
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium cursor-pointer">
                  <tr
                    className="bg-[#b1c9f1] border-b"
                    onClick={() => navigate("/residentInfo")}
                  >
                    <td scope="row" className="px-6 py-4 ">
                      Lê Hữu Tài
                    </td>
                    <td className="px-6 py-4">23/09/1980</td>
                    <td className="px-6 py-4">Nam</td>
                    <td className="px-6 py-4">Chủ hộ</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Trần Mai Duyên
                    </td>
                    <td className="px-6 py-4">11/8/1982</td>
                    <td className="px-6 py-4">Nữ</td>
                    <td className="px-6 py-4">Vợ</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Lê Hữu Đức
                    </td>
                    <td className="px-6 py-4">05/09/2003</td>
                    <td className="px-6 py-4">Nam</td>
                    <td className="px-6 py-4">Con trai</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Lê Thùy Linh
                    </td>
                    <td className="px-6 py-4">29/11/2006</td>
                    <td className="px-6 py-4">Nữ</td>
                    <td className="px-6 py-4">Con gái</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apartment;
