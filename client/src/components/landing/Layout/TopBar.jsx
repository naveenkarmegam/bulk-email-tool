import React from "react";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <h1 className="logo text-white">BULK MAILER</h1>
      <button
        className="navbar-toggler bg-white text-end"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="bi bi-list "></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ms-auto">
          <li>
            <a className="nav-link" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#mailer">
              Why-Us
            </a>
          </li>
          <li>
            <a className="nav-link" href="#faq">
              FAQ
            </a>
          </li>
          <li>
            <a className="nav-link " href="#contact">
              Contact
            </a>
          </li>
          {/* <li><a className="nav-link" href="#team">Team</a></li> */}
          <li>
            <Link className="getstarted ml-0" to={"/login"}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
