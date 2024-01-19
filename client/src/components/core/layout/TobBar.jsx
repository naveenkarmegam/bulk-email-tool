import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/navbar.css";
import {
  setGreetings,
  setSideBarToggle,
} from "../../../redux/global/FunctionalSlice";
import axios from "axios";
import { logOutSuccess } from "../../../redux/global/userSlice";
import { selectFunctionality, selectUser } from "../../../redux/app/state";
import BarIcon from "../vendors/Icons/BarIcon";

const TobBar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(selectUser);
  const { greetings, sideBarToggle } = useSelector(selectFunctionality);

  const updateGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      dispatch(setGreetings("Good Morning"));
    } else if (currentHour >= 12 && currentHour < 18) {
      dispatch(setGreetings("Good Afternoon"));
    } else {
      dispatch(setGreetings("Good Evening"));
    }
  };

  useEffect(() => {
    if(!greetings){
      updateGreeting();
    }
  }, [dispatch]);


  const handleLogout = async () => {
    try {
      axios.get("/api/auth/logOut");
      dispatch(logOutSuccess());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar navbar-expand bg-color topbar mb-4 shadow px-4 ">
      <Link
        id="sidebarToggleTop"
        className="btn btn-link text-center rounded-circle m-0 p-2"
        onClick={() => dispatch(setSideBarToggle(!sideBarToggle))}
      >
        <BarIcon />
      </Link>
      <div className="d-flex align-items-center justify-content-center w-100">
        <h6 className="m-0 text-light">{greetings}</h6>
      </div>

      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>

        {/* Nav Item - User Information */}
        <li className="nav-item dropdown no-arrow">
          <Link
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline small">
              {currentUser.firstName}
            </span>
            <img
              className="img-profile rounded-circle border  border-black"
              src={currentUser.profilePicture}
              alt="profile"
            />
          </Link>
          {/* Dropdown - User Information */}
          <div
            className="dropdown-menu dropdown-menu-end me-2 shadow animated--grow-in "
            aria-labelledby="userDropdown"
          >
            <Link
              className="dropdown-item justify-content-start text-dark"
              to={"/settings"}
            >
              <i className="bi bi-person-fill fs-5 text-dark pe-4"></i>
              Profile
            </Link>

            <div className="dropdown-divider"></div>
            <Link
              className="dropdown-item  justify-content-start text-dark"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-in-left fs-5 text-dark pe-4"></i>
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default TobBar;
