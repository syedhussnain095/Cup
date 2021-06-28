import React from "react";
import { NavLink } from "react-router-dom";
const HomeHeader = () => {
  return (
    <>
      <section id="homeHead">
        <div className="container header_text_main">
          <div className="heads_text">
            <h3>
              Making your life sweeter <br /> one bite at a time!
            </h3>
            <div className="text-center py-2">
             <NavLink to="/shop"><button>our cakes</button></NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeader;
