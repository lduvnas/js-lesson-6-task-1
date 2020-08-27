import React from "react";
import { Link } from "react-router-dom";

export default function LayoutSimple({ children }) {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              {" "}
              <Link className="nav-link" to="/">
                Startpage
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About page
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </div>
  );
}
