import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
// Import styles
import "./../styles/nav.css";

export const Header = () => {
  return (
    <header>
      <div className="container container-nav">
        <div className="identity">
          <Link to="/">Shaparoo Gallery</Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};
