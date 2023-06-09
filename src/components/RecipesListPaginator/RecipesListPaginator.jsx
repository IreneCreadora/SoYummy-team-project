import React from 'react';

export const RecipesListPaginator = ({
  total,
  current_page,
  per_page,
  handlePaginationClick,
  pageIncrement,
  pageDecrement,
  isLoading,
}) => {
  const pageNumber = [];
  const allPage = Math.ceil(total / per_page);

  for (let i = 1; i <= allPage; i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <div className="relative flex justify-center mb-[100px]  dark:bg-transparent z-[19] ">
        <nav
          className="inline-flex items-center -space-x-px "
          aria-label="Pagination"
        >
          <ul className="flex items-center border border-gray-300 rounded-3xl shadow-custom text-[12px] py-[14px] max-h-[55px]">
            <button
              disabled={current_page === 1 ? true : false}
              className={`nextBtn  ${
                current_page === 1
                  ? 'hover:text-[#A9A9A9] cursor-not-allowed'
                  : 'hover:text-gray-700'
              }`}
              onClick={pageDecrement}
            >
              <span className="sr-only">Previous</span>

              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            {pageNumber.map(item => {
              return (
                <button
                  onClick={handlePaginationClick}
                  key={item}
                  aria-current="page"
                  className={`${
                    item === current_page ? 'currentPage' : 'paginationPage'
                  } ${
                    isLoading && item === current_page
                      ? 'loadingPagination'
                      : ''
                  }`}
                >
                  {item}
                </button>
              );
            })}

            <button
              disabled={current_page === allPage ? true : false}
              className={`prevBtn  ${
                current_page === allPage
                  ? 'hover:text-[#A9A9A9] cursor-not-allowed'
                  : 'hover:text-gray-700'
              }`}
              onClick={pageIncrement}
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
};
