import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/app.css";
import img from "../assets/mh-logo.png";
export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <a className="navbar-box" href="/">
        <div>
          <NavLink className="logo" to="/profile/home">
            <img src={img} alt="management-health-logo"></img>
          </NavLink>
        </div>
      </a>
      <div className="menu">
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <div className="Nav_DivLink">
                <NavLink className="Nav_Link" to="/profile/home">
                  Home
                </NavLink>
              </div>
            </li>
            <li>
              <div className="Nav_DivLink">
                <NavLink className="Nav_Link" to="/profile/farmacia">
                  Farmacia
                </NavLink>
              </div>
            </li>
            <li>
              <div className="Nav_DivLink">
                <NavLink className="Nav_Link" to="/profile/profesionales">
                  Profesionales
                </NavLink>{" "}
              </div>
            </li>
            <li>
              <div className="Nav_DivLink">
                <NavLink className="Nav_Link" to="/profile/consultas">
                  Consultas
                </NavLink>
              </div>
            </li>
            <li>
              <NavLink to="/profile/logout">Cerrar Sesión</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
