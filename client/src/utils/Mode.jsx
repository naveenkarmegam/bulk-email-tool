import React, { useState } from "react";
import ModeToggle from "./ModeToggle";
import ModeIcon from "../components/core/vendors/Icons/ModeIcon";

const Mode = () => {
  const themes = [
    { value: "#fff", label: "Light", icon: "#sun-fill" },
    { value: "#000", label: "Dark", icon: "#moon-stars-fill" },
    // { value: "auto", label: "Auto", icon: "#circle-half" },
  ];
  const [selectedTheme, setSelectedTheme] = useState("auto");

  const handleThemeChange = (newTheme) => {
    // setSelectedTheme(newTheme);
    document.documentElement.style.setProperty("--mode-color", newTheme);

  };
  return (
    <div>
      <ModeIcon />
      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 ddd rounded-1 bd-mode-toggle z-0">
        <ModeToggle />
        <ul
          className="dropdown-menu dropdown-menu-end shadow z-0"
          aria-labelledby="bd-theme-text"
        >
          {themes.map((theme) => (
            <li key={theme.value} style={{
              "--mode-color" : theme.value
            }}>
              <button
                type="button"
                className={`dropdown-item d-flex align-items-center ${
                  theme.value === selectedTheme ? "active" : ""
                }`}
                onClick={() => handleThemeChange(theme.value)}
                // aria-pressed={theme.value === selectedTheme ? "true" : "false"}
              >
                <svg
                  className="bi me-2 opacity-50 theme-icon"
                  width="1em"
                  height="1em"
                >
                  <use href={theme.icon} />
                </svg>
                {theme.label}
                <svg
                  className={`bi ms-auto ${
                    theme.value === selectedTheme ? "" : "d-none"
                  }`}
                  width="1em"
                  height="1em"
                >
                  <use href="#check2" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mode;
