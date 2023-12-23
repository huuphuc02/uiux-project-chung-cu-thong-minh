import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import SidebarResident from "../../../components/SidebarResident";

function PaymentResult() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="flex">
        <SidebarResident />
        <div className="w-[82%] bg-[#f5f5f5] px-8 py-4 pb-24">
          <h1 className="text-[22px] font-bold text-left">
            Kết quả thanh toán
          </h1>
          <div className="text-center mt-10">
            <p className="text-green-600 font-semibold text-lg">
              Bạn đã thanh toán thành công Phí thay mới hệ thống đèn
            </p>
            <div className="text-center leading-10 text-lg font-bold ml-64 w-1/2 mt-10 mb-6 relative">
              <div className="flex">
                <label>Số tiền: </label>
                <span className="absolute left-64">300.000 VND</span>
              </div>
              <div className="flex">
                <label>Phương thức thanh toán: </label>
                <span className="absolute left-64">Tài khoản ngân hàng</span>
              </div>
              <div className="flex">
                <label>Mã giao dịch: </label>
                <span className="absolute left-64">ABCDEF123456</span>
              </div>
              <div className="flex">
                <label>Thời gian thực hiện: </label>
                <span className="absolute left-64">10:20:30 01/12/2023</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-16 gap-8 items-center justify-center">
            <button
              className="text-center uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white px-6 h-10 items-start border-0 rounded-lg"
              onClick={() => navigate("/homePageResident")}
            >
              về trang chủ
            </button>
            <button
              className="text-center uppercase text-white bg-[#99b7f0] h-10 items-start px-2 rounded-lg"
              onClick={() => navigate("/listofFees")}
            >
              tiếp tục thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentResult;
