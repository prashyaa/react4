import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" >
        <h1>Home</h1>
      </Link>

      <Link to="/students" >
        <h1>Students</h1>
      </Link>

      <Link to="/contact" >
        <h1>Contact</h1>
      </Link>
    </nav>
  );
}

export default Navbar;
