import React, { useState, useContext } from "react";
import { DarkModeContext } from "../context/ThemeContext";

const Header = () => {
      const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
      const handleClick = () => {
            toggleDarkMode();
      }
      return (
            <div className="Header">
                  <h1> React Hooks</h1>
                  <button type="button" onClick={handleClick}> {darkMode ? 'Dark Mode' : 'Light Mode'}</button>
            </div>
      );
};

export default Header;
