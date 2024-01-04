import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function SidebarManager({ tab }) {
  const navigate = useNavigate();


  return (
    <div id="NewRootRoot" className="flex flex-row w-[18%] items-start pr-2.5">
      <div className="bg-white flex flex-col gap-16 w-full items-start pt-4 pb-4">
        <div className="flex flex-col gap-6 items-start">
          <div
            className={
              tab == "Trang chủ"
                ? "bg-[#99b7f0] items-center flex flex-row gap-6 w-full h-[74px] px-4 cursor-pointer text-white"
                : "flex text-[#a3a0a0] flex-row px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] bg-white hover:text-white"
            }
            onClick={() => {
              navigate("/homePageManager")
            }}
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 50 50"
              fill="none"
              className={ "fill-gray-400"}
            >
              <path
                d="M6.25 18.75L25 4.16663L43.75 18.75V41.6666C43.75 42.7717 43.311 43.8315 42.5296 44.6129C41.7482 45.3943 40.6884 45.8333 39.5833 45.8333H10.4167C9.3116 45.8333 8.25179 45.3943 7.47039 44.6129C6.68899 43.8315 6.25 42.7717 6.25 41.6666V18.75Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.75 45.8333V25H31.25V45.8333"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span id="TrangCh" className="font-semibold  mt-1">
              Trang chủ
            </span>
          </div>

          <div
             className={
              tab == "Hộ khẩu"
                ? "bg-[#99b7f0] text-white items-center flex flex-row gap-6 w-full h-[74px] px-4 cursor-pointer "
                : "flex flex-row text-[#a3a0a0] px-4 gap-6 items-center py-3 cursor-pointer w-full hover:bg-[#99b7f0] hover:text-white"
            }
            onClick={() => {
              navigate("/familyRegister")
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 59 38" fill="none">
              <path d="M47 24.011C52.5228 24.011 57 28.7497 57 32.3038C57 34.2666 55.321 35.8579 53.25 35.8579H52M42 16.9028C46.1423 16.9028 49.5 13.7204 49.5 9.79467C49.5 5.86896 46.1423 2.68652 42 2.68652M12 24.011C6.47715 24.011 2 28.7497 2 32.3038C2 34.2666 3.67893 35.8579 5.75 35.8579H7M17 16.9028C12.8579 16.9028 9.5 13.7204 9.5 9.79467C9.5 5.86896 12.8579 2.68652 17 2.68652M40.75 35.8579H18.25C16.1789 35.8579 14.5 34.2666 14.5 32.3038C14.5 26.3804 22 24.011 29.5 24.011C37 24.011 44.5 26.3804 44.5 32.3038C44.5 34.2666 42.821 35.8579 40.75 35.8579ZM37 9.79467C37 13.7204 33.6423 16.9028 29.5 16.9028C25.3577 16.9028 22 13.7204 22 9.79467C22 5.86896 25.3577 2.68652 29.5 2.68652C33.6423 2.68652 37 5.86896 37 9.79467Z" stroke="#A3A0A0" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className="font-semibold  w-1/2 text-left">Nhân Khẩu hộ khẩu</span>
          </div>


          <div
          className={
              tab == "Thông báo"
                ? "bg-[#99b7f0] text-white items-center flex flex-row gap-6 w-full h-[74px] px-4 cursor-pointer"
                : "flex flex-row text-[#a3a0a0] px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] hover:text-white"
            }
            // className="flex flex-row gap-6 items-center cursor-pointer px-4 py-4 w-full hover:bg-[#99b7f0]"
            onClick={() => navigate("/announce")}
          >
            {/* <img
              src="https://file.rendit.io/n/vhha8KyHeTcAZ9gLJbQD.svg"
              alt="Vector1"
              className="w-8"
            /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 54 51" fill="none">
              <path d="M22.0026 30.4198L51.1897 2.76783M22.8322 31.6633L29.4504 44.2084C31.0499 47.2399 31.8495 48.7558 32.8569 49.1622C33.7312 49.515 34.7306 49.4509 35.5472 48.9903C36.4879 48.4594 37.0656 46.8555 38.2214 43.6479L50.726 8.94009C51.7332 6.14525 52.2364 4.74782 51.8919 3.82339C51.592 3.01919 50.9247 2.38658 50.0763 2.10246C49.1007 1.77585 47.6263 2.25303 44.6772 3.20735L8.05608 15.0588C4.67168 16.1541 2.97947 16.7018 2.41929 17.5934C1.93314 18.3671 1.86577 19.3143 2.23796 20.1427C2.66684 21.0975 4.2662 21.8556 7.46493 23.3712L20.7014 29.6439C21.2286 29.8937 21.4922 30.0184 21.7203 30.1852C21.9231 30.3334 22.1047 30.5056 22.2608 30.6975C22.4371 30.914 22.5687 31.1637 22.8322 31.6633Z" stroke="#A3A0A0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className="font-semibold ">Gửi thông báo</span>
          </div>

          <div
           className={
              tab == "Khoản thu"
                ? "bg-[#99b7f0] text-white items-center flex flex-row gap-6 w-full h-[74px] px-4 cursor-pointer"
                : "flex flex-row text-[#a3a0a0] px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] hover:text-white"
            }
            // className="flex flex-row gap-6 items-center cursor-pointer w-full px-4 py-4 hover:bg-[#99b7f0]"
            onClick={() => navigate("/feeManager")}
          >
            {/* <img
              src="https://file.rendit.io/n/MIfePN900jroITk4Amr7.svg"
              alt="Vector2"
              className="w-8"
            /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 56 44" fill="none">
              <path d="M28 31.2236C32.7229 31.2236 36.5516 26.9804 36.5516 21.7461C36.5516 16.5118 32.7229 12.2686 28 12.2686C23.277 12.2686 19.4484 16.5118 19.4484 21.7461C19.4484 26.9804 23.277 31.2236 28 31.2236Z" stroke="#A3A0A0" stroke-width="5" />
              <path d="M51.3401 18.3793C52.4467 19.8683 53 20.6126 53 21.7461C53 22.8796 52.4467 23.6239 51.3401 25.1128C47.2921 30.5599 38.3636 40.7012 28 40.7012C17.6362 40.7012 8.70771 30.5599 4.6597 25.1128C3.55323 23.6239 3 22.8796 3 21.7461C3 20.6126 3.55323 19.8683 4.6597 18.3793C8.70771 12.9324 17.6362 2.79102 28 2.79102C38.3636 2.79102 47.2921 12.9324 51.3401 18.3793Z" stroke="#A3A0A0" stroke-width="5" />
            </svg>

            <span className="font-semibold ">
              Xem khoản thu
            </span>
          </div>
          <div
           className={
              tab == "Thống kê"
                ? "bg-[#99b7f0] text-white items-center flex flex-row gap-6 w-full h-[74px] px-4 cursor-pointer"
                : "flex flex-row text-[#a3a0a0] px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] hover:text-white"
            }
          // className="flex flex-row gap-6 items-center cursor-pointer w-full px-4 py-4 hover:bg-[#99b7f0]"
            onClick={() => navigate("/statistics")}
          >
            {/* <img
              src="https://file.rendit.io/n/J7HUYVV5s0YfdV9Whctb.svg"
              alt="Settingssvgrepocom"
              id="Settingssvgrepocom"
              className="w-8"
            /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 50 48" fill="none">
              <path d="M5 33.1714C2.25 33.1714 0 35.3038 0 37.9102V42.6489C0 45.2552 2.25 47.3877 5 47.3877H10C12.75 47.3877 15 45.2552 15 42.6489V37.9102C15 35.3038 12.75 33.1714 10 33.1714H5ZM10 42.6489H5V37.9102H10V42.6489Z" fill="#A3A0A0" />
              <path d="M22.5 21.3245C19.75 21.3245 17.5 23.4569 17.5 26.0632V42.6489C17.5 45.2552 19.75 47.3877 22.5 47.3877H27.5C30.25 47.3877 32.5 45.2552 32.5 42.6489V26.0632C32.5 23.4569 30.25 21.3245 27.5 21.3245H22.5ZM27.5 42.6489H22.5V26.0632H27.5V42.6489Z" fill="#A3A0A0" />
              <path d="M50 4.73877C50 2.13244 47.75 0 45 0H40C37.25 0 35 2.13244 35 4.73877V42.6489C35 45.2552 37.25 47.3877 40 47.3877H45C47.75 47.3877 50 45.2552 50 42.6489V4.73877ZM45 42.6489H40V4.73877H45V42.6489Z" fill="#A3A0A0" />
            </svg>
            <div className="font-semibold">Thống kê</div>
          </div>
          <div className="flex flex-row gap-6 items-center cursor-pointer w-full px-4 py-4 hover:bg-[#99b7f0]">
            <img
              src="https://file.rendit.io/n/UJOuDzByRvGBLZHI8uE4.svg"
              alt="Settingssvgrepocom"
              id="Settingssvgrepocom"
              className="w-8"
            />
            <div className="font-semibold text-[#a3a0a0] ">Cài đặt</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarManager;
