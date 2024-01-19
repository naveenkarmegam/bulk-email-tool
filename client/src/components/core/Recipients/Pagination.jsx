import React from "react";
import { paginationRange } from "./utils/pagination";

const Pagination = (props) => {
  let array = paginationRange(
    props.totalPage,
    props.page,
    props.limit,
    props.siblings
  );
  return (
    <ul className="pagination pagination-md justify-content-end mr-4 custom-pagination">
      <li className="page-item">
        <span
          className="page-link"
          onClick={() => props.onPageChange("&laquo;")}
        >
          &laquo;
        </span>
      </li>
      <li className="page-item">
        <span
          className="page-link"
          onClick={() => props.onPageChange("&lsaquo;")}
        >
          &lsaquo;
        </span>
      </li>
      {array.map((value) => {
        if (value === props.page) {
          return (
            <li key={value} className="page-item active">
              <span
                className="page-link"
                onClick={() => props.onPageChange(value)}
              >
                {value}
              </span>
            </li>
          );
        } else {
          return (
            <li key={value} className="page-item">
              <span
                className="page-link"
                onClick={() => props.onPageChange(value)}
              >
                {value}
              </span>
            </li>
          );
        }
      })}
      <li className="page-item">
        <span
          className="page-link"
          onClick={() => props.onPageChange("&rsaquo;")}
        >
          &rsaquo;
        </span>
      </li>
      <li className="page-item">
        <span
          className="page-link"
          onClick={() => props.onPageChange("&raquo;")}
        >
          &raquo;
        </span>
      </li>
    </ul>
  );
};

export default Pagination;
