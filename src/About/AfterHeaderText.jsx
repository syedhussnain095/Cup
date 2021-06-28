import React from "react";

const AfterHeaderText = () => {
  return (
    <>
      <div className="col-10 mx-auto py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="about_cake_shop">
                <h5>ABOUT CAKE SHOP</h5>
                <h4>Cakes and bakes from the house of Queens!</h4>
                <p>
                  The "Cake Shop" is a Jordanian Brand that started as a small
                  family business. The owners are Dr. Iyad Sultan and Dr. Sereen
                  Sharabati, supported by a staff of 80 employees.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 for_prog_br">
              <div className="progress_bar">
                <div className="cake_design">
                    <div className="cake_design_text">
                        <div className="row">
                        <h4>CAKE DESIGN</h4>
                    <p>95%</p></div>
                    </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-dark"
                      role="progressbar"
                      style={{width: '95%'}}
                    ></div>
                  </div>
                </div>
                <div className="cake_design py-3">
                    <div className="cake_design_text">
                        <div className="row">
                        <h4>CAKE CLASS</h4>
                        <p>80%</p>
                        </div>
                        </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-dark"
                      role="progressbar"
                      style={{width: '85%'}}
                    ></div>
                  </div>
                </div>
                <div className="cake_design py-3">
                    <div className="cake_design_text">
                        <div className="row">
                        <h4>CAKE RECIPES</h4>
                        <p>90%</p>
                        </div>
                        </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-dark"
                      role="progressbar"
                      style={{width: '90%'}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AfterHeaderText;
