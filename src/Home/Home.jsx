import React from "react";
import HomeHeader from "./HomeHeader";
import AfterHeaderText from "../About/AfterHeaderText";
import ShopMenu from '../Shop/ShopMenu';
import ClientsSays from '../About/ClientsSays';
import OurTeam from "../About/OurTeam";
import ContactForm from "../Contact/ContactForm";
import ContactMap from "../Contact/ContactMap";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <AfterHeaderText />
      <div className="for_clients_upper_text py-3">
        <h6>OUR MENU</h6>
        <h4>Sweet Baker</h4>
      </div>
      <ShopMenu />
      <OurTeam />
      <ClientsSays />
      <ContactForm
        contactwith="Contact With us"
        timeone="Representatives or Advisors are available:"
        timetwo="Mon-Fri: 5:00am to 9:00pm"
        timethree="Sat-Sun: 6:00am to 9:00pm"
        submit="Submit"
      />
      <ContactMap />
    </>
  );
};

export default Home;
