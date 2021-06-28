import React from 'react';
import AboutData from './AboutData';
import AboutHeader from "./AboutHeader";
import AfterHeaderText from "./AfterHeaderText";
import ClientsSays from './ClientsSays';
import OurTeam from "./OurTeam";
const About = () => {
    return (
        <>
            <AboutData 
            home="Home"
            about="About"
            />
            <AboutHeader />
            <AfterHeaderText />
            <ClientsSays />
            <OurTeam />
        </>
    );
};

export default About;
