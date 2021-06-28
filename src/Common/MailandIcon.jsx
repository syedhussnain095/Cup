import React from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
const MailandIcon = () => {

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
          <div className="for_main_text">
            <p>Sweetcake@support.com</p>
          </div>
          <div className="icons ml-auto">
              <div className="row">
                <Searchbar />
                <NavLink to="/wishlist">
                <i class="far fa-heart"></i>
                </NavLink>
                <NavLink to="/cart">
                <i class="fas fa-shopping-bag"></i>
                </NavLink>
              </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MailandIcon;
