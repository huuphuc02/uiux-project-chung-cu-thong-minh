import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OverlayPolice() {
  return (
    <div
      id="OverlayttincudanRoot"
      className="overflow-hidden z-20 bg-white flex flex-row w-1/5 items-start rounded-lg absolute right-10"
    >
      <div className="bg-white flex flex-col justify-center mr-0 pl-5 gap-8 w-full h-full pb-4 pt-2 items-start rounded-lg">
        <a id="NgXut" href="/" className="font-bold text-[#99b7f0] ml-28">
          Đăng xuất &#62;
        </a>
      </div>
    </div>
  );
}

export default OverlayPolice;
