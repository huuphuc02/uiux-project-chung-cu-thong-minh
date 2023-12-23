import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import SidebarResident from "../../../components/SidebarResident";

function ResidenceAbsence() {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <SidebarResident />
        <div className="flex flex-col w-[82%] items-start mb-4">
          <div className="flex flex-col gap-3 w-full items-start">
            <img
              src="https://file.rendit.io/n/PK3kkNhDEvLADNM0od7k.png"
              alt="Image1"
              id="Image1"
              className="w-full"
            />
          </div>
          <div className="flex flex-row gap-12 w-full items-start">
            <div className="flex flex-col gap-4 w-1/2 items-start">
              <div className="text-[22px] font-bold ml-1">
                Đăng ký tạm trú tạm vắng
              </div>
              <div className="relative flex flex-row w-full items-start">
                <div className="bg-[#99b7f0] relative flex flex-col justify-center gap-6 w-full h-48 items-center rounded-lg">
                  <div className="relative w-1/3 items-center justify-center">
                    <h2 className="text-center text-[22px] text-white h-10">
                      Tạm trú
                    </h2>
                    <h3 className="text-center text-xl underline text-[#efecec]">
                      Thủ tục tạm trú
                    </h3>
                  </div>
                  <button
                    className="text-center text-lg uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-1/3 h-14 pl-9 items-start pt-4 border-0 rounded-lg"
                    onClick={() => navigate("/residence")}
                  >
                    đăng ký
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 items-start">
              <div className="bg-[#99b7f0] relative flex flex-col justify-center gap-6 w-full mt-12 h-48 items-center rounded-lg">
                <div className="w-1/2 items-center">
                  <h2
                    id="TmVng1"
                    className="text-center text-[22px] text-white h-10 justify-center"
                  >
                    Tạm vắng
                  </h2>
                  <h3
                    id="ThTcTmVng"
                    className="text-center text-xl underline text-[#efecec]"
                  >
                    Thủ tục tạm vắng
                  </h3>
                </div>
                <button
                  className="text-center text-lg uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-1/3 pl-9 h-14 items-start pt-4 border-0 rounded-lg"
                  onClick={() => navigate("/absence")}
                >
                  đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResidenceAbsence;
