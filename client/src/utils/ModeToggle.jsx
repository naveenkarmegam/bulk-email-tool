import React from "react";

const ModeToggle = () => {
  return (
    <button
      className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
      id="bd-theme"
      type="button"
      aria-expanded="false"
      data-bs-toggle="dropdown"
      aria-label="Toggle theme (auto)"
    >
      <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
        <use href="#circle-half" />
      </svg>
      <span className="visually-hidden" id="bd-theme-text">
        Toggle theme
      </span>
    </button>
  );
};

export default ModeToggle;
