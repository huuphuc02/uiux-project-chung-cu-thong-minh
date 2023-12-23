import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import SidebarResident from "../../../components/SidebarResident";

function PayFee() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="flex">
        <SidebarResident />
        <div className="w-[82%] bg-[#f5f5f5] px-8 py-4 pb-6">
          <h1 className="text-[22px] font-bold text-left">
            Thanh toán khoản phí
          </h1>
          <div className="mt-16">
            <p className="text-red-500  text-left mb-4">
              Lưu ý: Bạn cần thanh toán khoản phí đã quá hạn (nếu có) rồi mới
              được thanh toán các khoản phí khác
            </p>
            <div className="flex flex-col gap-4 w-4/5 items-start">
              <div className="flex flex-row w-full items-center justify-between">
                <label className="text-lg font-bold ml-[144px]">
                  Khoản phí:
                </label>
                <select className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4 pt-2">
                  <option value="1">Phí thay mới hệ thống đèn</option>
                  <option value="2">Tiền nước tháng 11/2023</option>
                  <option value="3">Tiền điện tháng 11/2023</option>
                  <option value="4">Tiền internet tháng 11/2023</option>
                </select>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <label className="text-lg font-bold mt-2 ml-[144px]">
                  Số tiền (VND):
                </label>
                <input
                  value="200.000"
                  className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-center px-4"
                ></input>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <label className="text-lg font-bold mt-2 ml-[144px]">
                  Phương thức thanh toán:
                </label>
                <select className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4 pt-2">
                  <option value="1">Tài khoản ngân hàng</option>
                  <option value="2">VNPay</option>
                  <option value="3">Paypal</option>
                </select>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <label className="text-lg font-bold mt-2 ml-[144px]">
                  Ngân hàng:
                </label>
                <select className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4 pt-2">
                  <option value="1">Techcombank</option>
                  <option value="2">Vietcombank</option>
                  <option value="3">Viettinbank</option>
                  <option value="4">Agribank</option>
                  <option value="5">MB Bank</option>
                </select>
              </div>
              <div className="flex flex-row justify-between w-full items-start">
                <label className="text-lg font-bold mt-2 ml-[144px]">
                  Số tài khoản:
                </label>
                <input className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"></input>
              </div>
            </div>
            <div className="flex flex-row mt-10 gap-8 items-center justify-center ml-72">
              <button
                className="text-center uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white px-6 h-10 items-start border-0 rounded-lg"
                onClick={() => navigate("/listofFees")}
              >
                quay lại
              </button>
              <button
                className="text-center uppercase text-white bg-[#99b7f0] h-10 items-start px-2 rounded-lg"
                onClick={() => navigate("/paymentResult")}
              >
                thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayFee;
