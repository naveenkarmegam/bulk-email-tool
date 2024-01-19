import React, { useEffect } from "react";
import DashIcon from "../vendors/Icons/DashIcon";
import CampaignIcon from "../vendors/Icons/CampaignIcon";
import TemplateIcon from "../vendors/Icons/TemplateIcon";
import ServiceIcon from "../vendors/Icons/ServiceIcon";
import SettingIcon from "../vendors/Icons/SettingIcon";
import CustomerService from "../vendors/Icons/CustomerService";

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./styles/navbar.css";
import ListIcon from "../vendors/Icons/ListIcon";
import { setSideBarToggle } from "../../../redux/global/FunctionalSlice";
import { selectFunctionality } from "../../../redux/app/state";
import Sent from "../vendors/Icons/Sent";
const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { sideBarToggle } = useSelector(selectFunctionality);

  let sidebarClasses = "";
  sidebarClasses += sideBarToggle
    ? "navbar-nav sidebar accordion"
    : "navbar-nav sidebar accordion toggled trans-close ";

  useEffect(() => {
    const handleResize = () => {
      const shouldToggleSidebar = window.innerWidth > 496;
      dispatch(setSideBarToggle(shouldToggleSidebar));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const navItems = [
    { path: "/dashboard", icon: <DashIcon />, text: "Dashboard" },
    { path: "/recipients", icon: <ListIcon />, text: "Recipients" },
    { path: "/campaign", icon: <CampaignIcon />, text: "Campaign" },
    { path: "/sent", icon: <Sent />, text: "Sent Mails" },
    { path: "/template", icon: <TemplateIcon />, text: "Template" },
    { path: "/settings", icon: <SettingIcon />, text: "Setting" },
    { path: "/service", icon: <ServiceIcon />, text: "Service" },
    { path: "/contact", icon: <CustomerService />, text: "Contact" },
  ];

  return (
    <main
      className={sidebarClasses}
      id="accordionSidebar"
      style={{
        backgroundColor: "#ddd",
      }}
    >
      <hgroup className="sidebar-brand d-flex align-items-center justify-content-around">
        {!sideBarToggle ? "BM" : "BULK MAILER"}
      </hgroup>
      <hr className="bg-black m-0 mb-1" />

      <nav className="mx-3">
        <ul
          className="navbar-nav me-auto mb-2 mb-lg-2"
          style={{ cursor: "pointer" }}
        >
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`nav-item m-0 p-0 bg-grey-h p-md-1 py-sm-2 mb-1 ${
                location.pathname === item.path ? "bg-grey bg-color" : ""
              } ${sideBarToggle ? "" : "mt-4"}`}
            >
              <Link to={item.path} className="nav-link p-0 w-100 p-2">
                {item.icon}
                <span
                  className={`text-black ml-2 ${sideBarToggle ? "" : "d-none"}`}
                >
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-center d-none d-md-block"></div>
    </main>
  );
};

export default Sidebar;
