/* eslint-disable react/prop-types */
function PopupError({ isOpen, onClose, message }) {
  return (
    <div className={`${isOpen ? "" : "hidden"}`}>
      <div
        id="popup-modal"
        tabIndex="-1"
        className="bg-opacity-50 bg-gray-800 p-40 px-96 overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center w-full h-screen"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <img
                src="src\assets\images\error.png"
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
                OK, đã hiểu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupError;
