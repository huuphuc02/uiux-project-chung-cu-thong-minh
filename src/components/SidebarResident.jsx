function SidebarResident() {
  return (
    <div id="NewRootRoot" className="flex flex-row w-1/5 items-start">
      <div className="bg-white flex flex-col gap-16 w-full items-start pt-4 pb-4">
          <div className="flex flex-col gap-6 items-start">
            <div className="bg-[#99b7f0] items-center flex flex-row gap-6 w-full h-16 px-4 cursor-pointer">
              <img
                src="https://file.rendit.io/n/XZWscRXGASvVuDSsfZMI.svg"
                alt="OutlinedOtherLocationHome"
                className="w-10"
              />
              <span
                id="TrangCh"
                className="text-xl font-semibold text-white mt-1"
              >
                Trang chủ
              </span>
            </div>
            <div className="flex flex-row px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] hover:text-white">
              <img
                src="https://file.rendit.io/n/iufyY4eJ3GoguopL2vOx.svg"
                alt="Vector"
                className="w-10"
              />
              <span className="mb-2 text-xl font-semibold text-[#a3a0a0]">
                  Nộp phí
                </span>
                <img
                  src="https://file.rendit.io/n/GvjZN3Kb66bw6pP6Nbix.svg"
                  alt="Ellipse"
                  id="Ellipse"
                  className="ml-2 w-4"
                />
            </div>
          <div className="flex flex-row gap-6 items-center cursor-pointer px-4 py-4 w-full hover:bg-[#99b7f0]">
            <img
              src="https://file.rendit.io/n/PSiDjxX6nrW7Wcrk1Jtg.svg"
              alt="Vector1"
              className="w-10"
            />
            <span className="text-xl font-semibold text-[#a3a0a0]">Lịch sử</span>
          </div>
          <div className="flex flex-row gap-4 items-center cursor-pointer w-full px-4 hover:bg-[#99b7f0]">
            <img
              src="https://file.rendit.io/n/awWdrMe5AXDBgOYlzQHr.svg"
              alt="Vector2"
              className="w-10"
            />
            <span className="text-xl font-semibold text-[#a3a0a0] w-1/2 text-left mt-3 ml-2">
              Tạm trú tạm vắng
            </span>
          </div>
          <div className="flex flex-row gap-6 items-center cursor-pointer w-full px-4 py-4 hover:bg-[#99b7f0]">
            <img
              src="https://file.rendit.io/n/D1hrof5cdEEznu4EQwjR.svg"
              alt="Settingssvgrepocom"
              id="Settingssvgrepocom"
              className="w-10"
            />
            <div className="text-xl font-semibold text-[#a3a0a0] mt-2">
              Cài đặt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarResident;
