import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import SidebarResident from "../../../components/SidebarResident";

function PaymentResult() {
  const location = useLocation();
  const queryParams = location.state;
  const navigate = useNavigate();
  const getCurrentDateTime = () => {
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedDateTime = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;

    return formattedDateTime;
  };

  const generateRandomString = (length) => {
    const characters = "ABCDEF123456";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  };
  return (
    <div>
      <Header />
      <div className="flex">
        <SidebarResident tab={"Nộp phí"} />
        <div className="w-[82%] bg-[#f5f5f5] px-8 py-4 pb-24">
          <h1 className="text-[22px] font-bold text-left">
            Kết quả thanh toán
          </h1>
          <div className="text-center mt-10">
            <p className="text-green-600 font-semibold text-lg">
              Bạn đã thanh toán thành công {queryParams.fee}
            </p>
            <div className="text-center leading-10 text-lg font-bold ml-64 w-1/2 mt-10 mb-6 relative">
              <div className="flex">
                <label>Số tiền: </label>
                <span className="absolute left-64">{queryParams.cost} VND</span>
              </div>
              <div className="flex">
                <label>Phương thức thanh toán: </label>
                <span className="absolute left-64">{queryParams.method}</span>
              </div>
              <div className="flex">
                <label>Mã giao dịch: </label>
                <span className="absolute left-64">
                  {generateRandomString(12)}
                </span>
              </div>
              <div className="flex">
                <label>Thời gian thực hiện: </label>
                <span className="absolute left-64">{getCurrentDateTime()}</span>
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
