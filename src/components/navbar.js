import React from "react";
import "../assets/css/main.css";

const NavBar = () => {
  return (
    <nav>
      <h2>Logo</h2>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
