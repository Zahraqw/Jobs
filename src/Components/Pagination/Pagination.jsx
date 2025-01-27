import React from "react";
import { Pagination as ReactBootstrapPagination } from "react-bootstrap";
import "./Pagination.css";
const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="d-flex justify-content-center my-4">
      <ReactBootstrapPagination>
        {/* Previous Button */}
        <ReactBootstrapPagination.Prev
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-3"
        />

        {/* Page Numbers */}
        {pageNumbers.map((page) => (
          <ReactBootstrapPagination.Item
            key={page}
            active={currentPage === page}
            onClick={() => onPageChange(page)}
            className={`page-number ${currentPage === page ? "active" : ""}`}
          >
            {page}
          </ReactBootstrapPagination.Item>
        ))}

        {/* Next Button */}
        <ReactBootstrapPagination.Next
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-3"
        />
      </ReactBootstrapPagination>
    </div>
  );
};

export default Pagination;
