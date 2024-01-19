import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelectLimit from "./SelectLimit";
import Pagination from "./Pagination";
const RecipientTable = ({ recipients, handleDeleteOrder }) => {
  const pageLimits = [5, 15, 20]
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(pageLimits[0]);

  const getRecipients = (page, limit) => {
    let array = [];
    for (let i = (page - 1) * limit; i < page * limit && recipients[i]; i++) {
      array.push(recipients[i]);
    }
    return array;
  };

  const configuredRecipients = getRecipients(page, limit).map((row, index) => ({
    ...row,
    serialNumber: (page - 1) * limit + index + 1,
  }));

  const totalPage = Math.ceil(recipients.length / limit);
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
    <main className="container table-responsive core">
      <table className="custom-table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First-Name</th>
            <th scope="col">Last-Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {configuredRecipients.map((row, index) => (
            <tr key={index}>
              <th scope="row">{row.serialNumber}</th>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.email}</td>
              <td className="action-buttons">
                <Link
                  to={`/update-recipient/${row._id}`}
                  className="btn btn-primary btn-sm"
                >
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <button
                  onClick={() => handleDeleteOrder(row._id)}
                  className="btn btn-danger btn-sm m-1"
                >
                  <i className="bi bi-trash-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="table-footer">
          <tr>
            <td colSpan="5">
              <div className="d-flex justify-content-end pt-2">
                <SelectLimit
                  onLimitChange={setLimit}
                  pageLimits={pageLimits}
                />
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

export default RecipientTable;
