import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <div style={{ fontSize: "30px" }}>COVID-19 Live Updates</div>
      </Link>
      <ul className="nav-links">
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/Countries"
        >
          <li>Data by Country</li>
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/Map"
        >
          <li>Map</li>
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", marginTop: "10px" }}
          to="/About"
        >
          <li>Symptoms</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;