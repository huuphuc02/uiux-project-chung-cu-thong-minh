/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

function ModalNewApartment(props) {
  const ref = useRef(null);
  // eslint-disable-next-line react/prop-types
  const { isShowNewApartment, setShowNewApartment } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickOutside = () => { setShowNewApartment(!isShowNewApartment) }


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);



  return (
    <div className="flex flex-row w-full h-full items-center justify-center bg-black/30 absolute z-100 " >
      <div className="bg-[#f5f5f5] w-[70%] h-[70%] info-box overflow-auto rounded-lg " ref={ref}>
        <div className="flex flex-col justify-between gap-5 w-full items-center">
          <h1 id="NgKTmTr" className="text-[22px] font-bold mt-6">
            Thêm mới hộ khẩu
          </h1>
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold ml-4">
                Họ và tên (*):
              </label>
              <input
                // defaultValue={resident.fullname}
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
              ></input>
            </div>
            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                CCCD (*):
              </label>
              <input
                // defaultValue={resident.CCCD}
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
              ></input>
            </div>

            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                Ngày sinh (*):
              </label>
              <input
                type="date"
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4 pt-2"
              ></input>
            </div>

            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                Giới tính (*):
              </label>
              {/* <input
                // defaultValue={resident.gender}
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
              ></input> */}
              <div className='w-1/2 flex justify-start'>
                <div className="text-[#adaaaa] mt-px shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between w-[40%] items-start">
                  <select
                    name="role"
                    id="role"
                    className="w-full h-10 px-5"

                  >
                    <option value="">Nam</option>
                    <option value="">Nữ</option>
                    <option value="">Khác</option>
                  </select>
                </div>
              </div>

            </div>
            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                SĐT liên hệ (*):
              </label>
              <input
                // defaultValue={resident.Sdt}
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
              ></input>
            </div>
            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                Tòa nhà (*):
              </label>
              {/* <input
                // defaultValue={resident.gender}
                className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-1/2 h-10 items-start px-4"
              ></input> */}
              <div className='w-1/2 flex justify-start'>
                <div className="text-[#adaaaa] mt-px shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between w-[40%] items-start">
                  <select
                    name="role"
                    id="role"
                    className="w-full h-10 px-5"
                  >
                    <option value="">A1</option>
                    <option value="">A2</option>
                  </select>
                </div>
              </div>

            </div>
            <div className="flex flex-row justify-between w-[90%] items-start">
              <label className="text-md font-bold mt-2 ml-4">
                Căn hộ (*):
              </label>
              <div className="w-1/2">
                <input className="text-[#a6a6a6] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-2/3 h-10 items-start px-4"></input>
              </div>
            </div>

          </div>
          <div className="flex flex-row gap-8 w-1/3 items-start">
            <button
              className="text-center text-md uppercase text-[#99b7f0] border-solid border-[#5387e9] bg-white flex flex-row w-1/2 h-10 items-start pt-2 pl-8 border-0 rounded-lg"
              onClick={onClickOutside}
            >
              huỷ
            </button>
            <button
              className="text-center text-md uppercase text-white bg-[#99b7f0] flex flex-row w-1/2 h-10 items-start pt-2 pl-10 rounded-lg"
              onClick={() => {
                alert(
                  "Tạo hộ khẩu mới thành công!"
                );
                setShowNewApartment(!isShowNewApartment)
              }}
            >
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}



export default ModalNewApartment;
