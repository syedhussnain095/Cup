import React from "react";

const ShopSearch = () => {
  return (
    <>
      <div className="container">
          <div className="col-12">
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-7">
              <div class="input-group">
                <input
                className="form-control search_bar"
                  type="text"
                  placeholder="Search"
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text"
                  >
                    <i class="fas fa-search"></i>
                  </span>
                </div>
              </div>
            
          </div>
          <div className="col-sm-12  col-md-5 col-lg-5">
              <div className="sorting">
              <select class="select" >
                  <option className="font-weight-bold">Default sorting</option>
                  <option>A to Z</option>
                  <option>1 - 8</option>
                  <option>Name</option>
              </select>
              </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ShopSearch;
