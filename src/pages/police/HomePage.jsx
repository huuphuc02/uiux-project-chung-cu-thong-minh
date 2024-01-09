import { useNavigate } from "react-router-dom";
import PoliceHeader from "../../components/police/PoliceHeader";
import SidebarPolice from "../../components/police/SidebarPolice";
import { useEffect,useState } from "react";

function HomePage() {
  const navigate = useNavigate();
  const [numberResidence, setNumberResidence] = useState(0);
  useEffect(()=>{
    const getNumberResidence = async () => {
      let response = await fetch('http://localhost:3001/cudan');
      const data = await response.json();
      const length = data.length;
      setNumberResidence(length);
    };
    getNumberResidence();
  }, []);
  return (
    <div className="h-screen">
      <PoliceHeader />
      <div className="flex">
        <SidebarPolice tab={"Trang chủ"}/>
        <div className="flex flex-col w-4/5 items-start mt-2 mb-4">
          <div className="flex gap-28 mb-[38px]">
            <div className="flex flex-row w-full items-start">
              <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#fffefe] flex flex-row gap-2 w-full h-[141px] font-['Nunito_Sans'] items-start pt-4 px-10 rounded-lg">
                <div className="text-6xl font-bold text-[#99b7f0] mt-5">40</div>
                <div id="CnH" className="text-5xl mt-8">
                  căn hộ{" "}
                </div>
              </div>
            </div>

            <div className="flex flex-row w-full items-start">
              <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-center pt-4 gap-4 w-full h-[141px] font-['Nunito_Sans'] items-start rounded-lg">
                <div className="text-center text-6xl font-bold text-[#99b7f0] mt-6">
                  {numberResidence}
                </div>
                <div id="CDn" className="text-5xl mt-10">
                  cư dân
                  {"  "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full items-start">
            <div className="flex flex-col ml-1 gap-2 w-full items-start">
              <h1 className="text-[35px] font-bold">Thống kê</h1>
            </div>
            {/* <div className="flex flex-row gap-12 w-full items-start">
              <div className="flex flex-col gap-4 w-1/2 items-start">
                <div className="text-[22px] font-bold ml-1">
                  Đăng ký tạm trú tạm vắng
                </div>
                <div className="relative flex flex-row w-full items-start">
                  <div className="bg-[#99b7f0] relative flex flex-col cursor-pointer justify-center gap-6 w-full h-48 items-center rounded-lg">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
