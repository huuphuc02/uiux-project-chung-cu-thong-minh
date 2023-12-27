import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OverlayAdministrator() {
  const navigate = useNavigate();
  const [apartment, setApartment] = useState({});

  useEffect(() => {
    setApartment(JSON.parse(localStorage.getItem("apartment")));
  }, []);
  return (
    <div
      id="OverlayttincudanRoot"
      className="overflow-hidden z-20 bg-white flex flex-row w-1/5 items-start rounded-lg absolute right-10"
    >
      <div className="bg-white flex flex-col justify-center mr-0 pl-5 gap-8 w-full h-full pb-4 pt-2 items-start rounded-lg">
        <div className="flex flex-col ml-px gap-4 w-full items-start">
          <div className="font-semibold flex">
            <label htmlFor="apartment">Căn hộ: </label>
            <span className="ml-2">
              203
              A1
            </span>
          </div>
          <div className="flex flex-col gap-4 w-full items-start">
            <span
              className="font-semibold cursor-pointer"
              onClick={() => navigate("/apartmentInfo")}
            >
              Thành viên căn hộ
            </span>
            <div className="flex flex-row gap-4 w-full items-start">
              <img
                src="https://file.rendit.io/n/nG9yx35GVWXxUWRLpGDf.svg"
                alt="Ellipse1"
                id="Ellipse1"
                className="w-14"
              />
              <img
                src="https://file.rendit.io/n/0lY5jQiOGPg9rr5ctcft.svg"
                alt="Ellipse2"
                id="Ellipse2"
                className="mr-px w-14"
              />
              <img
                src="https://file.rendit.io/n/fizanKgitVaqU3TAumis.svg"
                alt="Ellipse"
                id="Ellipse"
                className="w-14"
              />
            </div>
          </div>
        </div>
        <a id="NgXut" href="/" className="font-bold text-[#99b7f0] ml-28">
          Đăng xuất &#62;
        </a>
      </div>
    </div>
  );
}

export default OverlayAdministrator;
