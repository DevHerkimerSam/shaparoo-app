import React from "react";
import { Link } from "react-router-dom";
// Import styles
import "./../styles/nav.css";
import { Navbar } from "./navbar";

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
