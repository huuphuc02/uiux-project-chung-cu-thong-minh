function Header() {
  return (
    <div id="NewRootRoot" className="flex flex-row w-full items-start">
      <div className="border-solid border-b border-[#e2e2e2] pl-2 bg-white flex flex-row gap-56 w-full items-center">
        <div className="flex flex-row gap-12 w-3/5 items-start">
          <div className="flex flex-row items-center w-2/5">
            <img
              src="https://file.rendit.io/n/Kfv6Ijyi67YATraEbp0v.png"
              alt="ActionTextRotationDown icon"
              className="w-16"
            />
            <span className="text-xl font-bold mt-2 w-3/5">
              Chung cư thông minh
            </span>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="text-[#adaaaa] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row mt-4 gap-3 w-3/5 h-10 items-start px-3 rounded-lg"
          />
        </div>
        <div className="flex flex-row mt-3 gap-8 w-2/5 items-start">
          <div className="flex flex-row mt-3 items-start cursor-pointer">
            <img
              src="https://file.rendit.io/n/iBFcxEGp8ZRjB80YBCkZ.png"
              alt="Image1"
              id="Image1"
              className="w-6"
            />
            <span id="ThngBo" className="text-lg text-[#777676]">
              Thông báo
            </span>
          </div>
          <div className="flex flex-row gap-4 w-3/5 items-start">
            <img
              src="https://file.rendit.io/n/bsosJvLrPusOJgxMZnsr.svg"
              alt="Ellipse"
              id="Ellipse"
              className="mb-1 w-12"
            />
            <div className="cursor-pointer flex flex-row gap-2 w-3/5 items-center">
              <div id="LHuTiCDn1" className="font-semibold text-left">
                Lê Hữu Tài
                <br />
                <span className="text-[#686868]">
                  Cư dân
                </span>
              </div>
              <span className="ml-4 text-center text-4xl">...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
