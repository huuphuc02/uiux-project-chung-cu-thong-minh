/* eslint-disable react/prop-types */
import { LuSearch } from "react-icons/lu";
import OverlayResident from "./OverlayResident";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupNotification from "./PopupNotification";

function Header() {
  const [overlay, setOverlay] = useState(false);
  const [popupNoti, setPopupNoti] = useState(false);
  const navigate = useNavigate();
  const [resident, setResident] = useState({});

  useEffect(() => {
    setResident(JSON.parse(localStorage.getItem("resident")));
  }, []);
  return (
    <div id="NewRootRoot" className="w-full items-start">
      <div className="border-solid border-b border-[#e2e2e2] pl-2 bg-white flex flex-row gap-16 w-full items-center">
        <div className="flex flex-row gap-12 w-3/5 items-start">
          <div
            className="flex flex-row items-center w-2/5"
            onClick={() => navigate("/homepageResident")}
          >
            <img
              src="https://file.rendit.io/n/Kfv6Ijyi67YATraEbp0v.png"
              alt="ActionTextRotationDown icon"
              className="w-16 cursor-pointer"
            />
            <span className="text-xl font-bold mt-2 w-2/5 cursor-pointer">
              Chung cư thông minh
            </span>
          </div>
          <div className="text-[#adaaaa] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row mt-4 w-3/5 h-10 items-center pl-2 rounded-lg py-2">
            <LuSearch />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="w-full h-10 pl-2 ml-2"
            />
          </div>
        </div>
        <div className="flex flex-row mt-3 gap-8 w-2/5 items-start">
          <div
            className="flex flex-row mt-3 items-start cursor-pointer"
            onClick={() => setPopupNoti(!popupNoti)}
          >
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
            <div className="cursor-pointer flex flex-row gap-2 w-4/5 items-center">
              <div
                id="LHuTiCDn1"
                className="font-semibold text-left"
                onClick={() => navigate("/residentInfo")}
              >
                {resident.fullname}
                <br />
                <span className="text-[#686868]">Cư dân</span>
              </div>
              <span
                className="ml-4 text-center text-4xl"
                onClick={() => setOverlay(!overlay)}
              >
                ...
              </span>
            </div>
          </div>
        </div>
      </div>
      {overlay && <OverlayResident />}
      {popupNoti && <PopupNotification />}
    </div>
  );
}

export default Header;
