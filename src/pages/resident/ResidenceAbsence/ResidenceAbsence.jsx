/* eslint-disable react/jsx-no-target-blank */
import { useNavigate } from "react-router-dom";
import Header from "../../../components/resident/Header";
import SidebarResident from "../../../components/resident/SidebarResident";

function ResidenceAbsence() {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <SidebarResident tab={"Vắng trú"} />
        <div className="flex flex-col w-[82%] min-h-screen items-start bg-[#f5f5f5]">
          <div className="flex flex-col w-full items-start mb-16">
            <h1 className="text-[22px] font-bold ml-1">
              Lịch sử đăng ký tạm trú tạm vắng
            </h1>
            <div className="relative mt-3">
              <table className="h-4 w-full min-w-[1000px] text-sm text-left rtl:text-right">
                <thead className="text-sm text-white bg-[#445f99] ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      STT
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Loại
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Thời gian đăng ký
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Trạng thái
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium cursor-pointer overflow-y-scroll">
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      1
                    </td>
                    <td className="px-6 py-4">Tạm vắng</td>
                    <td className="px-6 py-4">23/12/2023</td>
                    <td className="px-6 py-4">Chờ phê duyệt</td>
                  </tr>
                  <tr className="bg-[#b1c9f1] border-b">
                    <td scope="row" className="px-6 py-4 ">
                      2
                    </td>
                    <td className="px-6 py-4">Tạm vắng</td>
                    <td className="px-6 py-4">20/12/2022</td>
                    <td className="px-6 py-4">Hết thời hạn</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-row gap-12 w-full items-start">
            <div className="flex flex-col gap-4 w-[47%] items-start">
              <h1 className="text-[22px] font-bold ml-1">
                Đăng ký tạm trú tạm vắng
              </h1>
              <div className="relative flex flex-row w-full items-start">
                <div className="bg-[#99b7f0] relative flex flex-col justify-center gap-6 w-full h-48 items-center rounded-lg">
                  <div className="relative w-1/3 items-center justify-center">
                    <h2 className="text-center text-[22px] text-white h-10">
                      Tạm trú
                    </h2>
                    <a
                      className="text-center text-xl underline text-[#efecec]"
                      href="https://luatvietnam.vn/hanh-chinh/thu-tuc-dang-ky-tam-tru-570-28204-article.html"
                      target="_blank"
                    >
                      Thủ tục tạm trú
                    </a>
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
            <div className="flex flex-col w-[47%] items-start">
              <div className="bg-[#99b7f0] relative flex flex-col justify-center gap-6 w-full mt-12 h-48 items-center rounded-lg">
                <div className="w-1/2 items-center">
                  <h2
                    id="TmVng1"
                    className="text-center text-[22px] text-white h-10 justify-center"
                  >
                    Tạm vắng
                  </h2>
                  <a
                    id="ThTcTmVng"
                    className="text-center text-xl underline text-[#efecec]"
                    href="https://namnhun.laichau.gov.vn/cai-cach-hanh-chinh/quy-dinh-ve-khai-bao-tam-vang-va-huong-dan-thuc-hien-khai-bao-tam-vang-truc-tuyen-qua-cong-dich--610697"
                    target="_blank"
                  >
                    Thủ tục tạm vắng
                  </a>
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
