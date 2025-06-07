import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Sai Tejaswini</Link>
        </div>
        <div className="profile_links">
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
