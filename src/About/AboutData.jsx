import React from "react";

const AboutData = (props) => {
  return (
    <>
      <div className="container py-5 px-5">
        <div className="wishlist_data_text">
          <div className="row">
            <h3>{props.about}</h3>
            <div className="home_list_text ml-auto">
              <div className="row py-3">
                <p className="style_home">{props.home}</p>
                <p className="style_list">{props.about}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutData;
