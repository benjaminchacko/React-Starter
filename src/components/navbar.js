import React from "react";
import {Link} from 'react-router-dom' 
import "../assets/css/main.css";

const NavBar = () => {
  return (
    <nav>
      <h2>Logo</h2>
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
