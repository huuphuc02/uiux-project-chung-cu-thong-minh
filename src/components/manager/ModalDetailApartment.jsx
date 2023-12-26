import { useEffect, useRef, useState } from 'react';

function ModalDetailApartment(props) {
  const ref = useRef(null);
  // eslint-disable-next-line react/prop-types
  const { isShowDetailApartment, setShowDetailApartment, currentApartment } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickOutside = () => { setShowDetailApartment(!isShowDetailApartment) }

  const [listMembers, setMembers] = useState([]);
  const [relations, setRelations] = useState([]);

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


  useEffect(() => {
    const getListMembers = async () => {
      let response = await fetch(
        `http://localhost:3001/chungcu-cudan?MSCH=${currentApartment.ID}`
      );
      const data = await response.json();
      let listMembersArray = [];
      let listRelationsArray = [];
      console.log(data);
      for (let i in data) {
        console.log(data[i]);
        response = await fetch(
          `http://localhost:3001/cudan?ID=${data[i].MSCD}`
        );
        const member = await response.json();
        listMembersArray.push(member[0]);
        listRelationsArray.push(data[i].QHChuHo);
      }
      setMembers(listMembersArray);
      setRelations(listRelationsArray);
    };

    getListMembers();
  }, [currentApartment.ID]);

  return (
    <div className="flex flex-row w-full h-full items-center justify-center bg-black/30 absolute z-100 " >
      <div className="bg-[#f5f5f5] w-[70%] h-[70%] info-box overflow-auto rounded-lg " ref={ref}>
        <div className="bg-[#f5f5f5] w-full h-max p-8">
          <h1 id="ThngTinCnHRoot" className="text-[22px] font-bold text-left">
            Thông tin căn hộ
          </h1>
          <div className="bg-white py-5 pl-20">
            <div className="flex mb-4 relative">
              <label id="CnH2" className="text-lg font-bold">
                Căn hộ:
              </label>
              <span
                id="Element2"
                className="text-lg font-medium leading-[26px] absolute left-48"
              >
                {currentApartment.apartment}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="TaNh2" className="text-lg font-bold">
                Tòa nhà:
              </label>
              <span className="text-lg font-medium leading-[26px]  absolute left-48">
                {currentApartment.building}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="Tng1" className="text-lg font-bold">
                Tầng:
              </label>
              <span className="text-lg font-medium leading-[26px]  absolute left-48">
                {currentApartment.floor}
              </span>
            </div>
            <div className="flex mb-4 relative">
              <label id="DinTch3" className="text-lg font-bold">
                Diện tích:
              </label>
              <span className="text-lg font-medium leading-[26px] absolute left-48">
                {currentApartment.area} m2
              </span>
            </div>
            <div>
              <label
                id="DanhSchTHNHVIN6"
                className="flex mb-4 flex-row justify-between  items-start text-lg font-bold "
              >
                Danh sách thành viên
              </label>
            </div>
            <div className="relative w-4/5">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-sm text-white bg-[#445f99] ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Họ và tên
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Ngày sinh
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Giới tính
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quan hệ với chủ hộ
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium cursor-pointer">
                  {listMembers
                    ? listMembers.map((member, key) => {
                      return (
                        <tr
                          key={key}
                          className="bg-[#b1c9f1] border-b"
                          onClick={() => {
                            const queryParams = {
                              resident: member,
                            };
                            navigate("/residentInfo", {
                              state: queryParams,
                            });
                          }}
                        >
                          <td scope="row" className="px-6 py-4 ">
                            {member?.fullname}
                          </td>
                          <td className="px-6 py-4">{member?.dob}</td>
                          <td className="px-6 py-4">{member?.gender}</td>
                          <td className="px-6 py-4">{relations[key]}</td>
                        </tr>
                      );
                    })
                    : Fragment}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default ModalDetailApartment;
