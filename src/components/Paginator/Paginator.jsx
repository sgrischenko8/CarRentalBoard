import ReactPaginate from 'react-paginate';

const Shevron = ({ rotate }) => {
  return (
    <svg
      transform={rotate}
      width="24"
      height="24"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#121417"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PaginatedItems = ({ setCurrentPage, pageCount }) => {
  return (
    <ReactPaginate
      onPageChange={(e) => setCurrentPage(e.selected + 1)}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      activeClassName={'item current '}
      breakLabel={'...'}
      containerClassName={'pagination'}
      disabledClassName={'disabled-page'}
      marginPagesDisplayed={2}
      nextClassName={'item next '}
      nextLabel={<Shevron rotate={'rotate(270)'} />}
      pageClassName={'item pagination-page '}
      pageRangeDisplayed={2}
      previousClassName={'item previous'}
      previousLabel={<Shevron rotate={'rotate(90)'} />}
    />
  );
};
