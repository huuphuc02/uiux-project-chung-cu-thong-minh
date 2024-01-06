/* eslint-disable react/prop-types */
function PopupSuccess({ isOpen, onClose, message }) {
  return (
    <div className={`${isOpen ? "" : "hidden"}`}>
      <div
        id="popup-modal"
        tabIndex="-1"
        className="bg-opacity-50 bg-gray-800 p-40 px-96 overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center w-full h-screen"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="p-4 md:p-5 text-center">
              <img
                src="src\assets\images\success.png"
                alt="error"
                className="w-12 rounded-3xl ml-40 mb-2"
              />
              <h3 className="mb-5 text-lg font-normal text-black">{message}</h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-gray-500 hover:bg-gray-700 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                onClick={onClose}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupSuccess;
