import React from "react";
import ContactMenu from "./ContactMenu";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
const Contact = () => {
  return (
    <>
      <ContactMap />
      <ContactMenu />
      <ContactForm
        contactwith="Contact With us"
        timeone="Representatives or Advisors are available:"
        timetwo="Mon-Fri: 5:00am to 9:00pm"
        timethree="Sat-Sun: 6:00am to 9:00pm"
        submit="Submit"
      />
    </>
  );
};

export default Contact;
