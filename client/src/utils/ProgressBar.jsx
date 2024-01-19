import React from "react";

const ProgressBar = ({value}) => {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-label="Animated striped example"
      aria-valuenow={value||50}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        style={{ width: value }}
      />
    </div>
  );
};

export default ProgressBar;
