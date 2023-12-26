import { useEffect, useRef } from 'react';

function ModalDetailApartment(props) {
  const ref = useRef(null);
  // eslint-disable-next-line react/prop-types
  const { isShowDetailApartment, setShowDetailApartment } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickOutside = () => { setShowDetailApartment(!isShowDetailApartment) }

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
      <div className="bg-white w-[70%] h-[70%] info-box" ref={ref}>
        
      </div>
    </div>
  )
}



export default ModalDetailApartment;
