import React from "react";

const ShopMenuData = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto py-4">
        <div className="main_shop_img text-center">
          <img src={props.imgsrc} className="img-fluid" alt={props.imgsrc} />
        </div>
        <div className="shop_main_text">
          <h5>{props.name}</h5>
          <p>{props.price}</p>
          <button>{props.cartbtn}</button>
        </div>
      </div>
    </>
  );
};

export default ShopMenuData;
