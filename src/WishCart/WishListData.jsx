import React from "react";
import { NavLink } from "react-router-dom";
const WishListData = (props) => {
  return (
    <>
      <div className="container py-5 px-5">
        <div className="wishlist_data_text">
          <div className="row">
            <h3>{props.list}</h3>
            <div className="home_list_text ml-auto">
              <div className="row py-3">
                <p className="style_home">{props.home}</p>
                <p className="style_list">{props.list}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="cart_fill_text">
          <h3>{props.nothing}</h3>
        </div>
        <div className="shop_now py-4">
          <NavLink to="/shop">
            <button>{props.now}</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default WishListData;
