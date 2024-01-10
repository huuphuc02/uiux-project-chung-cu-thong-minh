// import { useNavigate } from "react-router-dom";
import ManagerHeader from "../../components/manager/ManagerHeader";
import SidebarManager from "../../components/manager/SidebarManager";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import { useNavigate } from "react-router-dom";
function Statistics() {
  const navigate = useNavigate();
  return (
    <div className="s-Screen">
      <ManagerHeader />
      <div className="flex">
        <SidebarManager tab={"Thống kê"} />
        <div className="w-[82%] bg-[#f5f5f5] px-8 py-4 pb-4">
          <h1 className="text-2xl font-bold text-left mb-[26px]">
            Thống kê cư dân
          </h1>
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
                  100
                </div>
                <div id="CDn" className="text-5xl mt-10">
                  cư dân
                  {"  "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start">
            <div
              className="text-center text-xl font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] flex flex-row  h-14 items-start pt-4 pl-10 pr-12 rounded-lg cursor-pointer"
              onClick={() => navigate("/familyRegister")}
            >
              Xem chi tiết
            </div>
          </div>

          <h1 className="text-2xl font-bold text-left my-[26px]">
            Thống kê khoản phí
          </h1>
          <div className="bg-white w-full h-[385px] rounded-lg flex flex-col justify-center items-center">
            <div className="w-full h-full p-8">
              <Doughnut
                data={{
                  labels: [
                    "Phí bảo trì",
                    "Phí quản lý",
                    "Phí dịch vụ",
                    "Phí gửi xe",
                    "Phí thuê",
                    "Tiền điện, nước, internet",
                  ],
                  datasets: [
                    {
                      label: "Triệu vnd",
                      backgroundColor: [
                        "#99B7F0",
                        "#8e5ea2",
                        "#3cba9f",
                        "#e8c3b9",
                        "#5388D8",
                        "#f4be37",
                        "#FF9F40",
                      ],
                      data: [78.4, 80.7, 87.54, 56.82, 120.3, 278.9],
                    },
                  ],
                }}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>

          <div className="flex flex-row items-start mt-8">
            <div
              className="text-center text-xl font-['Nunito_Sans'] uppercase text-white bg-[#99b7f0] flex flex-row  h-14 items-start pt-4 pl-10 pr-12 rounded-lg cursor-pointer"
              onClick={() => navigate("/feeManager")}
            >
              Xem chi tiết
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Statistics;
