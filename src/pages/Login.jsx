import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import api from "../services/api";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("Resident");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log(phoneNumber);
      console.log(password);
      console.log(role);
      const response = await fetch(`http://localhost:3001/account`);
      const accounts = await response.json();
      const user = accounts.find(
        (account) => account.Sdt == phoneNumber && account.Password === password
      );

      if (user) {
        console.log(role);
        if (role == "Resident") {
          let response = await fetch(
            `http://localhost:3001/cudan?Sdt=${phoneNumber}`
          );
          const currentUser = await response.json();
          console.log(currentUser);
          localStorage.setItem("resident", JSON.stringify(currentUser[0]));
          response = await fetch(
            `http://localhost:3001/chungcu-cudan?MSCD=${currentUser[0]?.ID}`
          );
          const ap = await response.json();
          response = await fetch(
            `http://localhost:3001/chungcu?ID=${ap[0]?.MSCH}`
          );
          const apartment = await response.json();
          console.log(apartment);
          localStorage.setItem("apartment", JSON.stringify(apartment[0]));
          navigate("/homepageResident");
        } else if (role == "Admin") {
          const response = await fetch(
            `http://localhost:3001/quantri?Sdt=${phoneNumber}`
          );
          const currentUser = await response.json();
          console.log(currentUser);
          localStorage.setItem("admin", JSON.stringify(currentUser));
          navigate("/homePageAdmin");
        } else if (role == "Manager") {
          const response = await fetch(
            `http://localhost:3001/quanly?Sdt=${phoneNumber}`
          );
          const currentUser = await response.json();
          console.log(currentUser);
          localStorage.setItem("manager", JSON.stringify(currentUser));
          navigate("/homePageManager");
        } else if (role == "Police") {
          const response = await fetch(
            `http://localhost:3001/congan?Sdt=${phoneNumber}`
          );
          const currentUser = await response.json();
          console.log(currentUser);
          localStorage.setItem("police", JSON.stringify(currentUser));
          navigate("/homePagePolice");
        }
      } else {
        alert("Phone number or password is incorrect");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div
      id="LoginRoot"
      className="bg-white flex flex-row justify-between w-full h-max items-start pt-10 pl-24 pr-28"
    >
      <div className="relative flex flex-row w-2/5 items-start pt-20">
        <img
          src="https://file.rendit.io/n/4gkBeBcgGe0h12lnuBHc.png"
          alt="ActionTextRotationDown icon"
          className="relative mb-6"
        />
        <h2
          id="ChungCThngMinh"
          className="text-center text-6xl font-bold text-[#99b7f0] absolute top-24 left-[150px] h-[176px] w-[338px]"
        >
          Chung cư thông minh
        </h2>
      </div>
      <div className="flex flex-col justify-between gap-12 w-1/3 items-start">
        <div className="flex flex-col gap-4 w-full items-start">
          <label
            id="Label1"
            className="text-xl font-bold leading-[24px] text-[#191d23]"
          >
            Vai trò
          </label>
          <div className="text-[#adaaaa] mt-px shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between w-full h-12 items-start">
            <select
              name="role"
              id="role"
              className="w-full h-12 px-5"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Resident">Cư dân</option>
              <option value="Admin">Quản trị</option>
              <option value="Manager">Quản lý</option>
              <option value="Police">Công an</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full items-start">
          <div className="flex flex-col gap-4 w-full items-start">
            <label
              id="Label"
              className="text-xl font-bold leading-[24px] text-[#191d23]"
            >
              Số điện thoại
            </label>
            <input
              type="text"
              defaultValue="0123456789"
              className="text-[#adaaaa] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-full h-12 items-start px-5"
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-5 w-full items-start">
            <div className="flex flex-row justify-between w-full items-start">
              <label id="MtKhu" className="text-xl font-bold leading-[24px]">
                Mật khẩu
              </label>
              <button
                id="QunMtKhu"
                className="leading-[24px] text-[#99b7f0]"
                onClick={() => navigate("/resetpw")}
              >
                Quên mật khẩu
              </button>
            </div>
            <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between w-full h-12 items-start">
              <input
                type="password"
                id="Text1"
                className="pl-5 leading-[24px] mr-2 h-12 w-full text-[#212121]"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <img
                src="https://file.rendit.io/n/vSKVapmggcl7QPTeULIj.svg"
                alt="Group2"
                className="w-6 pt-4 mr-3"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="justify-center hover:bg-[#5387E9] text-xl uppercase text-white bg-[#99b7f0] flex flex-row w-full h-12 items-start pt-3 px-5 rounded-lg"
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default Login;
