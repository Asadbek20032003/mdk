import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Header = () => {
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
                <li className="active">
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
            <Link to="#" aria-haspopup="true" role="button" className="slicknav_btn slicknav_collapsed">
              <span className="slicknav_menutxt">MENU</span>
              <span className="slicknav_icon">
                <span className="slicknav_icon-bar"></span>
                <span className="slicknav_icon-bar"></span>
                <span className="slicknav_icon-bar"></span>
              </span>
            </Link>
            <div className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu">
              <ul>
                <li className="active">
                  <Link to="/" role="menuitem">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/faq" role="menuitem">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/blog" role="menuitem">
                    Blog
                  </Link>
                </li>
                <li className="slicknav_collapsed slicknav_parent">
                  <Link to="#" role="menuitem" aria-haspopup="true" className="slicknav_item slicknav_row">
                    <Link to="/gallery">Gallery</Link>
                    <span className="slicknav_arrow">►</span>
                  </Link>
                  <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true">
                    <li>
                      <Link to="#" role="menuitem">
                        Naoh
                      </Link>
                    </li>
                    <li>
                      <Link to="#" role="menuitem">
                        Padis
                      </Link>
                    </li>
                    <li>
                      <Link to="#" role="menuitem">
                        Jacob
                      </Link>
                    </li>
                    <li>
                      <Link to="#" role="menuitem">
                        Gomez
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact" role="menuitem">
                    Contact
                  </Link>
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
