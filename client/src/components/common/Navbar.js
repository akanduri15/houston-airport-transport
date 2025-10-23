import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPlus, FaPhoneAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            <FaHome size={24} />
            <span>Home</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/add-experience" className="navbar-link">
            <FaPlus size={24} />
            <span>Add Experience</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            <FaPeopleGroup size={24} />
            <span>About Us</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">  {/* ✅ This is key */}
            <FaPhoneAlt size={24} />
            <span>Contact Us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
