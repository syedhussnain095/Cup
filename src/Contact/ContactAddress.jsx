import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HeadsetIcon from "@material-ui/icons/Headset";
import EmailIcon from "@material-ui/icons/Email";
const ContactAddress = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="for_address_text">
          <div className="contact_address_text">
            <h5>{props.city}</h5>
            <p>
              <LocationOnIcon />
              <span>{props.address}</span>
            </p>
            <p>
              <HeadsetIcon />
              <span>{props.contact}</span>
            </p>
            <p>
              <EmailIcon />
              <span>{props.email}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAddress;
