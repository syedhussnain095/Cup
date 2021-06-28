import React from "react";
import ContactSdata from "./ContactSdata";
import ContactAddrress from "./ContactAddress";
const ContactMenu = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-9 mx-auto">
            <div className="row py-4">
              {ContactSdata.map((val, ind) => {
                return (
                  <ContactAddrress
                    key={ind}
                    city={val.city}
                    address={val.address}
                    contact={val.contact}
                    email={val.email}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMenu;
