import React, { Component } from "react";
import _ from "lodash";
const Pagination = props => {
  const { totalItems, pageSize, onPageChange, currentPage } = props;
  //console.log(item);
  const pagesCount = totalItems / pageSize;
  const pages = _.range(1, pagesCount + 1);

  //need number of page
  return (
    <nav style={{ marginTop: "20px" }} aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
