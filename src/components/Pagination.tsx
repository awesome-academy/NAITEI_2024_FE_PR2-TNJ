import React from 'react';

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: Props): JSX.Element | null {
  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  const getPageNumbers = () => {
    let startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + 4, totalPages);

    if (endPage - startPage < 4) {
      startPage = Math.max(endPage - 4, 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="justify-center flex items-center space-x-2 mt-9 mb-32 text-[0.9rem]">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`h-[19px] w-[38px] rounded-[4px] text-[8px] scale-y-[2] ${
          currentPage === 1
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-gray-200'
        }`}
      >
        {'<'}
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`h-[38px] w-[38px] rounded-[4px] ${
            page === currentPage
              ? 'bg-primary text-white font-bold'
              : 'hover:bg-gray-200 text-[#414247] bg-[rgba(65,66,71,0.08)]'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`h-[19px] w-[38px] rounded-[4px] text-[8px] scale-y-[2] ${
          currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-gray-200'
        }`}
      >
        {'>'}
      </button>
    </div>
  );
}

export default Pagination;
