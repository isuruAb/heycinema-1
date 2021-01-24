import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _Pagination from "react-bootstrap/Pagination";

const Pagination = ({ current = 1, total, size, onClick }) => {
  const [totalPages, setTotalPages] = useState(0);
  const pageBlocksPerLine = 7;

  let startOffset = 0;
  let endOffset = 0;
  let startBlock =
    current -
    (totalPages > pageBlocksPerLine ? Math.floor(pageBlocksPerLine / 2) : 0);

  if (startBlock < 1) {
    endOffset = Math.abs(startBlock);
    startBlock = 1;
  }
  let endBlock =
    current +
    (totalPages > pageBlocksPerLine
      ? Math.floor(pageBlocksPerLine / 2)
      : totalPages - 1);

  if (endBlock > totalPages) {
    startOffset = endBlock - totalPages;
    endBlock = totalPages;
  }
  startBlock -= startOffset;
  endBlock += endOffset;

  /* calculate total pages avail */
  useEffect(() => {
    if (total) {
      setTotalPages(Math.ceil(total / size));
    }
  }, [total]);

  const paginationNumber = [];
  for (let i = startBlock; i <= endBlock; i++) {
    paginationNumber.push(
      <_Pagination.Item
        key={i}
        active={current === i}
        onClick={(e) => {
          onClick(i);
        }}
      >
        {i}
      </_Pagination.Item>
    );
  }

  if (total <= size) return <div />;
  return (
    <_Pagination className={"justify-content-center mt-3 mt-md-4"}>
      <_Pagination.First
        onClick={(e) => {
          onClick(1);
        }}
        disabled={current === 1}
        className={"d-none d-sm-flex"}
      />
      <_Pagination.Prev
        onClick={(e) => {
          const prevPage = current - 1;
          if (prevPage < 1) return;
          onClick(prevPage);
        }}
        disabled={current === 1}
      />
      {paginationNumber}
      <_Pagination.Next
        onClick={(e) => {
          const nextPage = current + 1;
          if (nextPage > totalPages) return;
          onClick(nextPage);
        }}
        disabled={current === totalPages}
      />
      <_Pagination.Last
        onClick={(e) => {
          onClick(totalPages);
        }}
        disabled={current === totalPages}
        className={"d-none d-sm-flex"}
      />
    </_Pagination>
  );
};
Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};
export default Pagination;
