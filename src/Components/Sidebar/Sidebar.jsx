import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // Assuming you have a separate CSS file for styling
import stockProfile from "../../assets/stockProfilePic.jpg";
import githubIcon from "../../assets/githublogo.jpg";
import linkedInIcon from "../../assets/linkedinicon.png";

function Sidebar() {
  // Custom class for active links
  const customClass = ({ isActive }) => {
    return "sidebar__link" + (isActive ? " sidebar__link-active" : ""); // Add 'sidebar__link-active' if isActive is true
  };

  return (
    <div className="sidebar">
      <img src={stockProfile} className="sidebar__image"></img>

      <h2 className="sidebar__title">Elijah Williams</h2>
      <p className="sidebar__subtitle">Full-Stack Developer</p>
      {/* Sidebar Navigation */}
      <nav className="sidebar__list">
        <NavLink to="/" className={customClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={customClass}>
          About
        </NavLink>
        <NavLink to="/services" className={customClass}>
          Services
        </NavLink>
        <NavLink to="/contact" className={customClass}>
          Contact
        </NavLink>
      </nav>

      <div className="social__icons">
        <ul className="social__icons">
          <li className="social__icon-github">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
          </li>
          <li className="social__icon-linkedin">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
