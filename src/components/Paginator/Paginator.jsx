import ReactPaginate from 'react-paginate';

export const PaginatedItems = ({ setCurrentPage, pageCount }) => {
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
};
