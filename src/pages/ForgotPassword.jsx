function ForgotPassword() {
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
      <div className="flex flex-col justify-center gap-6 w-1/3 items-start mt-10">
        <div className="text-center mb-8 self-center">
          <h1 className="text-xl font-bold">Quên mật khẩu?</h1>
          <span>Mật khẩu sẽ được gửi vào SMS của bạn</span>
        </div>
        <div className="flex flex-col gap-10 w-full items-start mb-8">
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
        </div>
        <button className="justify-center hover:bg-[#5387E9] text-xl uppercase text-white bg-[#99b7f0] flex flex-row w-full h-12 items-start pt-3 px-5 rounded-lg">
          Gửi mật khẩu
        </button>
        <a href="/" className=" text-[#99b7f0] ml-20">
          Quay lại trang đăng nhập
        </a>
      </div>
    </div>
  );
}

export default ForgotPassword;
