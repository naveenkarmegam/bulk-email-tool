import React, { useEffect, useState } from "react";
import SettingIcon from "../components/core/vendors/Icons/SettingIcon";
const ColorSwitcher = () => {
  const [state, setState] = useState(false);
  const colors = [
    "#2d3436",
    "#4834d4",
    "#3be2ed",
    "#f9ca24",
    "#6ab04c",
    "#30336b",
  ];
  const setTheme = (color) => {
    document.documentElement.style.setProperty("--bg-color", color);
  };

  useEffect(() => {
    const currentColor = localStorage.getItem("color");
    setTheme(currentColor);
  }, []);

  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue("--bg-color");
    setTheme(currentColor);
    localStorage.setItem("color", currentColor);
  };

  return (
    <div className="App">
      <div className={`color-switcher ${state && "color-switcher--open"}`}>
        <button
          className="color-open-button"
          onClick={() => setState((prev) => !prev)}
        >
          <SettingIcon />
        </button>
        {/* <h1 className="heading">Select color</h1> */}
        <div className="color-listing">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{
                "--bg-color": color,
              }}
              onClick={(event) => setColor(event)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorSwitcher;
