import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import SidebarResident from "../../../components/SidebarResident";
import { useEffect, useState } from "react";

function PayFee() {
  const navigate = useNavigate();
  const [listFees, setListFees] = useState([]);
  const [apartment, setApartment] = useState({});
  const [selectedFee, setSelectedFee] = useState(listFees[0]?.feeName);
  const [paymentMethod, setPaymentMethod] = useState("Tài khoản ngân hàng");
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
        const [month, day, year] = item.deadline.split("/");
        const itemDate = new Date(`${year}-${month}-${day}`);
        return itemDate > currentDate;
      });
      console.log(listFees);
      list.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
      setListFees(list);
    };

    getListFees();
  }, []);
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
                <select
                  value={selectedFee}
                  onChange={(e) => setSelectedFee(e.target.value)}
                  className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4 pt-2"
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
                  value={
                    listFees.find((fee) => fee?.feeName == selectedFee)?.cost
                  }
                  className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-center px-4"
                ></input>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <label className="text-lg font-bold mt-2 ml-[144px]">
                  Phương thức thanh toán:
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4 pt-2"
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
                onClick={() => {
                  const selected = listFees.find(
                    (fee) => fee?.feeName == selectedFee
                  );
                  console.log(selected);
                  const queryParams = {
                    fee: selected?.feeName,
                    cost: selected?.cost,
                    method: paymentMethod,
                  };
                  navigate("/paymentResult", { state: queryParams });
                }}
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
