/* eslint-disable react/prop-types */
function Pagination({ totalPages, currentPage, onPageClick }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  console.log(totalPages);
  return (
    <nav aria-label="Page navigation example" className="mt-6 mx-80">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            onClick={() => onPageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 rounded-s-lg hover:bg-[#99b7f0] hover:text-gray-700 "
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {pages.map((page, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => onPageClick(page)}
                disabled={currentPage === page}
                aria-current="page"
                className={
                  currentPage === page
                    ? "z-10 flex bg-[#b1c9f1] items-center justify-center px-3 h-8 leading-tight text-gray-500"
                    : "z-10 flex items-center justify-center px-3 h-8 leading-tight text-gray-500"
                }
              >
                {page}
              </button>
            </li>
          );
        })}
        <li>
          <button
            onClick={() => onPageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500  rounded-e-lg hover:bg-[#99b7f0] hover:text-gray-700"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
