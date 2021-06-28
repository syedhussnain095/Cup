import React from "react";
import Contactlast from "../images/contact_last.jpg";
const ContactForm = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 mx-auto">
            <div className="row">
              <div className="col-md-5 my-5 pt-lg-0 order-1 order-lg-1">
                <div className="contact_with_us_text">
                  <h4>{props.contactwith}</h4>
                  <p className="font-weight-bold">{props.timeone}</p>
                  <p>{props.timetwo}</p>
                  <p>{props.timethree}</p>
                  <img src={Contactlast} alt="" />
                </div>
              </div>
              <div className="col-md-7 pt-lg-0 order-2 order-lg-1">
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="col-lg-12">
                      <textarea type="text" placeholder="Message" />
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                  <div className="shop_now">
                    <button>{props.submit}</button>
                  </div>
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

export default ContactForm;
