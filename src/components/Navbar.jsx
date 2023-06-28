import React from "react";
import "./website.css";

const NavBar = ({ onSectionClick, activeSection }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeSection === "main" ? "active" : ""
            }`}
            onClick={() => onSectionClick("main")}
          >
            About
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeSection === "resume" ? "active" : ""
            }`}
            onClick={() => onSectionClick("resume")}
          >
            Resume
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeSection === "portfolio" ? "active" : ""
            }`}
            onClick={() => onSectionClick("portfolio")}
          >
            Portfolio 
          </button>
        </li>
        <li className="navbar-item">
        <button
            className={`navbar-link ${
              activeSection === "study" ? "active" : ""
            }`}
            onClick={() => onSectionClick("study")}
          >
            Study 
          </button>
        </li>
        <li className="navbar-item">
        <button
            className={`navbar-link ${
              activeSection === "contact" ? "active" : ""
            }`}
            onClick={() => onSectionClick("contact")}
          >
            Contact 
          </button>        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
