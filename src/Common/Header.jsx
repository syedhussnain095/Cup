import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
// import logo from "../images/Bakers.png";
const Header = () => {
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="navbar-brand" to="/">
                <div className="row">
                {/* <img src={logo} alt="Logo" width="75" /> */}
                <h4 className="pl-2">Bakers</h4>
                </div>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <MenuIcon className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink activeClassName="for_links_bg" exact className="nav-link text-white" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="for_links_bg" exact className="nav-link text-white" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="for_links_bg" exact className="nav-link text-white" to="/shop">
                      Shop
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      className="nav-link text-white"
                      to="/contact"
                      activeClassName="for_links_bg"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="for_links_bg" exact className="nav-link text-white" to="/login">
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
