import React from "react";
import { Link } from "react-router-dom";
// Import styles
import "./../styles/nav.css";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/shaparoos">Shaparoos</Link>
        </li>
      </ul>
    </nav>
  );
};
