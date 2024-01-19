import React, { useEffect } from "react";

const AutoDismissAlert = ({ message, type }) => {
  return (
    <div
      className={`alert alert-dismissible fade show d-flex justify-content-center alert-${type}`}
      role="alert"
    >
      <div>{message}</div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default AutoDismissAlert;
