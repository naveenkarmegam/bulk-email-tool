import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelectLimit from "../Recipients/SelectLimit";
import Pagination from "../Recipients/Pagination";
const InboxTable = ({ mails, handleDeleteOrder }) => {
  const pageLimits = [10, 15, 20];
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(pageLimits[0]);

  const getMails = (page, limit) => {
    let array = [];
    for (let i = (page - 1) * limit; i < page * limit && mails[i]; i++) {
      array.push(mails[i]);
    }
    return array;
  };

  const configuredMails = getMails(page, limit).map((row, index) => ({
    ...row,
    serialNumber: (page - 1) * limit + index + 1,
  }));

  const totalPage = Math.ceil(mails.length / limit);
  let pageNo;
  if (page <= totalPage) {
    pageNo = page;
  } else {
    setPage(totalPage);
    pageNo = page;
  }
  const onPageChange = (value) => {
    if (value === "&laquo;" || value === "... ") {
      setPage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === "&raquo;" || value === " ...") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  };
  return (
    <main className="container table-responsive core-inbox">
      <table className="custom-table">
        <thead>
          <tr>
            <th scope="col">Your Mails</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {configuredMails.length === 0 ? (
            <tr className="text-center">
              <td colSpan={2} className="p-5 h3">
                No Data you have
              </td>
            </tr>
          ) : (
            configuredMails.map((row, index) => (
              <tr key={index}>
                {/* {console.log(row)} */}
                <td className="px-2 content-span">
                  <span className="fs-6 m-0 text-capitalize fw-semibold">
                    {row.subject}
                  </span>{" "}
                  <br className="p-0 m-0" />
                  <small className="small m-0" title={row.content}>
                    {row.content.slice(0, 80)}....
                  </small>
                </td>
                <td className="action-buttons text-center">
                  <Link
                    to={`/view-mail/${row._id}`}
                    className="btn bg-gradient-warning btn-sm"
                  >
                    <i className="bi bi-eye-fill"></i>
                  </Link>
                  <button
                    onClick={() => handleDeleteOrder(row._id)}
                    className="btn btn-danger btn-sm m-1"
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot className="table-footer">
          <tr>
            <td colSpan="5">
              <div className="d-flex justify-content-end pt-2">
                <SelectLimit onLimitChange={setLimit} pageLimits={pageLimits} />
                <Pagination
                  totalPage={totalPage}
                  page={pageNo}
                  limit={limit}
                  siblings={1}
                  onPageChange={onPageChange}
                />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </main>
  );
};

export default InboxTable;
