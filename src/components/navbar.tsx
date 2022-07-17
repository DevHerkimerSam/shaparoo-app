import React from "react";
import { Link } from "react-router-dom";
// Import styles
import "./../styles/nav.css";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/shaparoos/new">Make One!</Link>
        </li>
      </ul>
    </nav>
  );
};
