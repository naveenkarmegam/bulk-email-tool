import React from "react";

const Loading = ({ color }) => {
  return (
    <div className="d-flex justify-content-center align-content-center ">

    <div className={`spinner-border text-center ${color || 'text-light'}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
  );
};

export default Loading;
