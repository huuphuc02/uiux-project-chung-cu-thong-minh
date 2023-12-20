import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("Resident");
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
              <option value="Resident">Dân cư</option>
              <option value="Admin">Quản trị</option>
              <option value="Manager">Quản lý</option>
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
            ></input>
          </div>
          <div className="flex flex-col gap-5 w-full items-start">
            <div className="flex flex-row justify-between w-full items-start">
              <label id="MtKhu" className="text-xl font-bold leading-[24px]">
                Mật khẩu
              </label>
              <button id="QunMtKhu" className="leading-[24px] text-[#99b7f0]">
                Quên mật khẩu
              </button>
            </div>
            <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between w-full h-12 items-start">
              <input
                type="password"
                id="Text1"
                className="pl-5 leading-[24px] mr-2 h-12 w-full text-[#212121]"
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
          onClick={() => {
            console.log(role);
            navigate(`/homepage${role}`);
          }}
          className="justify-center hover:bg-[#5387E9] text-xl uppercase text-white bg-[#99b7f0] flex flex-row w-full h-12 items-start pt-3 px-5 rounded-lg"
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default Login;
