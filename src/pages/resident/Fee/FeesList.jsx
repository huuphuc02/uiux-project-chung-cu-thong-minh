import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import SidebarResident from "../../../components/SidebarResident";

function FeesList() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="flex">
        <SidebarResident />
        <div className="w-[82%] bg-[#f5f5f5] px-8 py-4">
          <h1 className="text-[22px] font-bold text-left">
            Danh sách khoản phí
          </h1>
          <div className="bg-white py-8 px-8">
            <div className="relative">
              <table className="h-4 w-full text-sm text-left rtl:text-right">
                <thead className="text-sm text-white bg-[#445f99] ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Loại khoản phí
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tên khoản phí
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Số tiền (VND)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Hạn đóng
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium cursor-pointer overflow-y-scroll">
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Phí bảo trì
                    </td>
                    <td className="px-6 py-4">Phí thay mới hệ thống đèn</td>
                    <td className="px-6 py-4">300. 000</td>
                    <td className="px-6 py-4">28/11/2023</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Tiền nước
                    </td>
                    <td className="px-6 py-4">Tiền nước tháng 11/2023</td>
                    <td className="px-6 py-4">200.000</td>
                    <td className="px-6 py-4">8/12/2023</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Tiền điện
                    </td>
                    <td className="px-6 py-4">Tiền điện tháng 11/2023</td>
                    <td className="px-6 py-4">500.000</td>
                    <td className="px-6 py-4">8/12/2023</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      Tiền Internet
                    </td>
                    <td className="px-6 py-4">Tiền internet tháng 11/2023</td>
                    <td className="px-6 py-4">100.000</td>
                    <td className="px-6 py-4">10/12/2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center text-lg font-bold self-center mt-10 ml-56 mb-6 relative">
              <div className="flex">
                <label>Tổng tiền: </label>
                <span className="absolute left-64">1.200.000 VND</span>
              </div>
              <div className="flex">
                <label>Số khoản phí quá hạn đóng: </label>
                <span className="absolute left-64">1</span>
              </div>
              <div className="flex">
                <label>Số khoản phí còn hạn đóng: </label>
                <span className="absolute left-64">3</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="items-center mt-6 mb-6 bg-white px-6 py-2 text-[#99b7f0] border-[#99b7f0] rounded-lg h-10"
              onClick={() => navigate("/homePageResident")}
            >
              QUAY LẠI
            </button>
            <button
              id="ButtonRoot"
              className="cursor-pointer items-start text-center font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] justify-center py-2 px-4 h-10 mt-6 mb-6 ml-8 rounded-lg"
              onClick={() => navigate("/payFee")}
            >
              THANH TOÁN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeesList;