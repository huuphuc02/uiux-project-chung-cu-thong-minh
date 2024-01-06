/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
function SidebarAdministrator({ tab }) {
  const navigate = useNavigate();
  return (
    <div id="NewRootRoot" className="flex flex-row w-[20%] items-start">
      <div className="bg-white flex flex-col gap-16 w-full items-start pt-4 pb-4">
        <div className="flex flex-col gap-6 items-start">
          <div
            className={
              tab == "Trang chủ"
                ? "bg-[#99b7f0] items-center flex flex-row gap-6 w-full h-[74px] px-4 cursor-pointer text-white"
                : "flex text-[#a3a0a0] flex-row px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] bg-white hover:text-white"
            }
            onClick={() => {
              navigate("/homepageAdmin");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 53 51"
              fill="none"
              className={"fill-gray-400"}
            >
              <path
                d="M6.51562 19.0967L26.062 4.24365L45.6083 19.0967V42.4373C45.6083 43.5628 45.1507 44.6422 44.3361 45.4381C43.5215 46.2339 42.4167 46.681 41.2647 46.681H10.8593C9.70725 46.681 8.60243 46.2339 7.78784 45.4381C6.97326 44.6422 6.51563 43.5628 6.51562 42.4373V19.0967Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.5464 46.6811V25.4624H32.5773V46.6811"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span id="TrangCh" className="font-semibold mt-1">
              Trang chủ
            </span>
          </div>
          <div
            className={
              tab == "Thông báo"
                ? "bg-[#99b7f0] text-white items-center flex flex-row gap-6 w-full h-[74px] px-4 cursor-pointer"
                : "flex flex-row text-[#a3a0a0] px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] hover:text-white"
            }
            onClick={() => navigate("/SendNotifications")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 54 54"
              fill="none"
            >
              <path
                d="M22.0026 31.9865L51.1897 2.81015M22.8322 33.2985L29.4504 46.5352C31.0499 49.7338 31.8495 51.3333 32.8569 51.7621C33.7312 52.1343 34.7306 52.0667 35.5472 51.5807C36.4879 51.0206 37.0656 49.3282 38.2214 45.9438L50.726 9.32267C51.7332 6.37377 52.2364 4.8993 51.8919 3.9239C51.592 3.07537 50.9247 2.40789 50.0763 2.1081C49.1007 1.7635 47.6263 2.26698 44.6772 3.27391L8.05608 15.7787C4.67168 16.9344 2.97947 17.5122 2.41929 18.453C1.93314 19.2694 1.86577 20.2688 2.23796 21.1429C2.66684 22.1503 4.2662 22.9502 7.46493 24.5494L20.7014 31.1678C21.2286 31.4314 21.4922 31.563 21.7203 31.739C21.9231 31.8953 22.1047 32.077 22.2608 32.2795C22.4371 32.5079 22.5687 32.7715 22.8322 33.2985Z"
                stroke="#A3A0A0"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mb-2 font-semibold">Gửi thông báo</span>
            <img
              src="https://file.rendit.io/n/hUcHKod0fWeTRVMWtaVt.svg"
              alt="Ellipse"
              id="Ellipse"
              className="ml-2 w-4"
            />
          </div>
          <div
            className={
              tab == "Thống kê"
                ? "bg-[#99b7f0] text-white items-center flex flex-row gap-6 w-full h-[74px] px-4 cursor-pointer"
                : "flex flex-row text-[#a3a0a0] px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] hover:text-white"
            }
            // className="flex flex-row gap-6 items-center cursor-pointer w-full px-4 py-4 hover:bg-[#99b7f0]"
            onClick={() => navigate("/statisticAdmin")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M5 35C2.25 35 0 37.25 0 40V45C0 47.75 2.25 50 5 50H10C12.75 50 15 47.75 15 45V40C15 37.25 12.75 35 10 35H5ZM10 45H5V40H10V45Z"
                fill="#A3A0A0"
              />
              <path
                d="M22.5 22.5C19.75 22.5 17.5 24.75 17.5 27.5V45C17.5 47.75 19.75 50 22.5 50H27.5C30.25 50 32.5 47.75 32.5 45V27.5C32.5 24.75 30.25 22.5 27.5 22.5H22.5ZM27.5 45H22.5V27.5H27.5V45Z"
                fill="#A3A0A0"
              />
              <path
                d="M50 5C50 2.25 47.75 0 45 0H40C37.25 0 35 2.25 35 5V45C35 47.75 37.25 50 40 50H45C47.75 50 50 47.75 50 45V5ZM45 45H40V5H45V45Z"
                fill="#A3A0A0"
              />
            </svg>
            <span className="font-semibold">Thống kê</span>
          </div>
          <div
            className={
              tab == "Cài đặt"
                ? "bg-[#99b7f0] text-white items-center flex flex-row gap-6 w-full h-[74px] px-4 cursor-pointer"
                : "flex flex-row text-[#a3a0a0] px-4 gap-6 items-center py-4 cursor-pointer w-full hover:bg-[#99b7f0] hover:text-white"
            }
            // className="flex flex-row gap-6 items-center cursor-pointer w-full px-4 py-4 hover:bg-[#99b7f0]"
            onClick={() => navigate("/setting")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M30 37.5C34.1421 37.5 37.5 34.1421 37.5 30C37.5 25.8579 34.1421 22.5 30 22.5C25.8579 22.5 22.5 25.8579 22.5 30C22.5 34.1421 25.8579 37.5 30 37.5Z"
                stroke="#A3A0A0"
                strokeWidth="3.75"
              />
              <path
                d="M9.31848 26.598C10.5715 27.3402 11.3777 28.6048 11.3777 29.9998C11.3777 31.395 10.5715 32.6595 9.31848 33.4017C8.46582 33.9067 7.91646 34.3105 7.52561 34.7907C6.66937 35.843 6.29148 37.1725 6.47508 38.4873C6.61276 39.4733 7.23051 40.482 8.46601 42.4998C9.70153 44.5173 10.3193 45.526 11.1562 46.1315C12.272 46.9388 13.6823 47.295 15.0768 47.122C15.7133 47.043 16.3587 46.7962 17.2488 46.3527C18.5573 45.7007 20.1222 45.6747 21.4039 46.3725C22.6855 47.0702 23.4438 48.3608 23.4991 49.755C23.5368 50.7038 23.6329 51.3542 23.8786 51.9135C24.4169 53.1385 25.4493 54.112 26.7487 54.6195C27.7234 55 28.9588 55 31.4298 55C33.9009 55 35.1363 55 36.111 54.6195C37.4103 54.112 38.4429 53.1385 38.9812 51.9135C39.2267 51.3542 39.3229 50.7037 39.3606 49.7552C39.4158 48.3607 40.1741 47.0702 41.4559 46.3725C42.7375 45.675 44.3022 45.701 45.6105 46.353C46.5009 46.7965 47.1463 47.0432 47.7827 47.1222C49.1772 47.2955 50.5876 46.939 51.7034 46.1317C52.5403 45.5265 53.1581 44.5175 54.3937 42.5C54.9437 41.6018 55.3714 40.9035 55.6885 40.318M53.541 33.402C52.2881 32.6598 51.482 31.3952 51.4817 30.0002C51.4817 28.605 52.2881 27.3402 53.541 26.598C54.3938 26.093 54.9429 25.6892 55.3338 25.209C56.19 24.1569 56.5678 22.8273 56.3843 21.5125C56.2467 20.5265 55.6289 19.5177 54.3932 17.5001C53.1578 15.4825 52.54 14.4737 51.7031 13.8683C50.5873 13.061 49.1769 12.7048 47.7824 12.8778C47.146 12.9569 46.5006 13.2035 45.6105 13.6471C44.3019 14.2991 42.7372 14.3251 41.4557 13.6274C40.1741 12.9298 39.4158 11.6393 39.3606 10.2451C39.3229 9.2963 39.2267 8.64588 38.9812 8.08658C38.4429 6.86145 37.4103 5.88808 36.111 5.3806C35.1363 5 33.9009 5 31.4298 5C28.9588 5 27.7234 5 26.7487 5.3806C25.4493 5.88808 24.4169 6.86145 23.8786 8.08658C23.6329 8.64583 23.5368 9.2962 23.4991 10.2449C23.4438 11.6392 22.6854 12.9298 21.4038 13.6274C20.1221 14.3251 18.5574 14.299 17.2491 13.647C16.3588 13.2034 15.7134 12.9567 15.0768 12.8777C13.6823 12.7046 12.2721 13.0609 11.1562 13.8682C10.3193 14.4736 9.70156 15.4824 8.46603 17.5C7.91601 18.3982 7.4884 19.0965 7.17108 19.6818"
                stroke="#A3A0A0"
                strokeWidth="3.75"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-semibold  w-1/2 text-left mt-3 ml-2">
              Cài đặt
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarAdministrator;
