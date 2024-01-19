import React from "react";

const CustomPlaceHolder = () => {
  return (
    <div className="card" aria-hidden="true">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-header">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6" />
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7" />
          <span className="placeholder col-4" />
          <span className="placeholder col-4" />
          <span className="placeholder col-6" />
          <span className="placeholder col-8" />
        </p>
        <a
          className="btn btn-primary disabled placeholder col-6"
          aria-disabled="true"
        />
      </div>
    </div>
  );
};

export default CustomPlaceHolder;
