import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header-section">
      <div className="container">
        <nav className="row">
          <div className="col-lg-2 col-md-2">
            <div className="logo">
              <Link to="/">
                <img src="https://mdk.pw/img/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-10 col-md-10">
            <div className="main-menu mobile-menu">
              <ul>
                <li>
                  <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : "")}>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>
                    Gallery
                  </NavLink>

                  <ul className="dropdown">
                    <li>
                      <Link to="#">Naoh</Link>
                    </li>
                    <li>
                      <Link to="#">Padis</Link>
                    </li>
                    <li>
                      <Link to="#">Jacob</Link>
                    </li>
                    <li>
                      <Link to="#">Gomez</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="mobile-menu-wrap">
          <div className="slicknav_menu">
            <Link
              to="#"
              aria-haspopup="true"
              role="button"
              tabindex="0"
              className="slicknav_btn slicknav_open"
              style={{ outline: "none", display: "flex", flexDirection: "row", alignItems: "center", padding: "5px" }}
              onClick={toggleMenu}
            >
              <span className="slicknav_menutxt">MENU</span>
              <i
                className="fas fa-bars"
                style={{
                  color: "white",
                  marginLeft: "5px",
                  paddingRight: "5px",
                }}
              ></i>
            </Link>
            <div
              className="slicknav_nav"
              style={{
                display: isOpen ? "block" : "none",
                width: "100%",
              }}
              aria-hidden={!isOpen}
              role="menu"
            >
              <ul style={{ width: "100%" }}>
                <li style={{ width: "100%" }}>
                  <NavLink to="/" exact className={({ isActive }) => (isActive ? "active" : "")}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : "")}>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
                    Blog
                  </NavLink>
                </li>
                <li className="slicknav_collapsed slicknav_parent">
                  <NavLink to="/gallery" className="slicknav_item slicknav_row">
                    Gallery
                    <span className="slicknav_arrow">►</span>
                  </NavLink>
                  <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: "none" }}>
                    <li>
                      <Link to="/" role="menuitem" tabindex="-1">
                        Naoh
                      </Link>
                    </li>
                    <li>
                      <Link to="#" role="menuitem" tabindex="-1">
                        Padis
                      </Link>
                    </li>
                    <li>
                      <Link to="#" role="menuitem" tabindex="-1">
                        Jacob
                      </Link>
                    </li>
                    <li>
                      <Link to="#" role="menuitem" tabindex="-1">
                        Gomez
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
