import { useNavigate } from "react-router-dom";
import Header from "../../../components/resident/Header";
import SidebarResident from "../../../components/resident/SidebarResident";
import { useEffect, useState } from "react";
import PopupConfirm from "../../../components/PopupConfirm";
import PopupError from "../../../components/PopupError";
import { getCurrentDate } from "../../../utility";

function PayFee() {
  const navigate = useNavigate();
  const [listFees, setListFees] = useState([]);
  const [apartment, setApartment] = useState({});
  const [selectedFee, setSelectedFee] = useState(listFees[0]?.feeName);
  const [paymentMethod, setPaymentMethod] = useState("Tài khoản ngân hàng");
  const [bank, setBank] = useState("");
  const [stk, setStk] = useState("");
  const [popupConfirm, setPopupConfirm] = useState(false);
  const [popupError, setPopupError] = useState(false);
  const [payingFees, setPayingFees] = useState([]);

  const handleClosePopup = () => {
    setPopupConfirm(false);
    setPopupError(false);
  };

  const handleConfirmAction = async () => {
    setPopupConfirm(false);
    const selected = listFees.find((fee) => fee?.feeName == selectedFee);
    selected.deadline = getCurrentDate();
    console.log(selected);
    console.log(payingFees);
    const newPayingFees = payingFees.filter((fee) => fee?.id != selected?.id);
    console.log(newPayingFees);

    await localStorage.setItem("payingFees", JSON.stringify(newPayingFees));
    console.log(payingFees);
    const paidFees = JSON.parse(localStorage.getItem("paidFees"));
    paidFees.push(selected);
    localStorage.setItem("paidFees", JSON.stringify(paidFees));
    const queryParams = {
      fee: selected?.feeName,
      cost: selected?.cost,
      method: paymentMethod,
    };
    navigate("/paymentResult", { state: queryParams });
  };

  const handleSubmit = () => {
    if (paymentMethod == "Tài khoản ngân hàng" && (bank == "" || stk == "")) {
      setPopupError(true);
      return;
    }
    setPopupConfirm(true);
  };

  useEffect(() => {
    setApartment(JSON.parse(localStorage.getItem("apartment")));
    const getListFees = async () => {
      let response = await fetch(`http://localhost:3001/khoanphi`);
      const data = await response.json();
      console.log(apartment.ID);
      let list = data.filter(
        (fee) => fee.apartmentId == apartment.ID || fee.apartmentId == "All"
      );
      const currentDate = new Date();
      list = list.filter((item) => {
        const [day, month, year] = item.deadline.split("/");
        const itemDate = new Date(`${year}-${month}-${day}`);
        return itemDate > currentDate;
      });
      console.log(listFees);
      list.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
      setListFees(list);
      localStorage.setItem("payingFees", JSON.stringify(list));
      setPayingFees(list);
    };
    const payFees = JSON.parse(localStorage.getItem("payingFees"));
    if (payFees.length > 0) {
      setListFees(payFees);
      setPayingFees(payFees); //
    } else getListFees();
  }, []);
  return (
    <div>
      <Header />
      <div className="flex">
        <SidebarResident tab={"Nộp phí"} />
        <div className="w-[82%] bg-[#f5f5f5] min-h-screen px-8 py-4 pb-6">
          <h1 className="text-[22px] font-bold text-left">
            Thanh toán khoản phí
          </h1>
          <div className="mt-12">
            <p className="text-red-500 text-sm text-left mb-4 ml-[144px] w-2/3">
              Chọn khoản phí và phương thức thanh toán. Nếu thanh toán bằng tài
              khoản ngân hàng, vui lòng chọn ngân hàng và nhập số tài khoản
            </p>
            <div className="flex flex-col gap-4 w-4/5 items-start">
              <div className="flex flex-row w-full items-center justify-between">
                <label className="text-lg font-bold ml-[144px]">
                  Khoản phí:
                </label>
                <select
                  required
                  value={selectedFee}
                  onChange={(e) => setSelectedFee(e.target.value)}
                  className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4 pt-2"
                >
                  {listFees.map((fee, key) => {
                    return (
                      <option key={key} value={fee.feeName}>
                        {fee.feeName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <label className="text-lg font-bold mt-2 ml-[144px]">
                  Số tiền (VND):
                </label>
                <input
                  defaultValue="15000"
                  disabled
                  value={
                    listFees.find((fee) => fee?.feeName == selectedFee)?.cost
                  }
                  className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-center px-4"
                ></input>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <label className="text-lg font-bold mt-2 ml-[144px]">
                  Phương thức thanh toán:
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4 pt-2"
                >
                  <option selected value="Tài khoản ngân hàng">
                    Tài khoản ngân hàng
                  </option>
                  <option value="VNPay">VNPay</option>
                  <option value="Paypal">Paypal</option>
                </select>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <label className="text-lg font-bold mt-2 ml-[144px]">
                  Ngân hàng:
                </label>
                <select
                  disabled={paymentMethod != "Tài khoản ngân hàng"}
                  onChange={(e) => setBank(e.target.value)}
                  className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4 pt-2"
                >
                  <option value="0">Chọn ngân hàng</option>
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
                <input
                  onChange={(e) => setStk(e.target.value)}
                  disabled={paymentMethod != "Tài khoản ngân hàng"}
                  className="text-black shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
                ></input>
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
                onClick={() => {
                  handleSubmit();
                }}
              >
                thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
      <PopupConfirm
        isOpen={popupConfirm}
        onClose={handleClosePopup}
        onConfirm={handleConfirmAction}
        message="Bạn có chắc chắn muốn thanh toán khoản phí này?"
      />
      <PopupError
        isOpen={popupError}
        onClose={handleClosePopup}
        message="Vui lòng nhập đầy đủ thông tin!"
      />
    </div>
  );
}

export default PayFee;
