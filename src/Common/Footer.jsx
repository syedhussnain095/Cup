import React from 'react';
// import footlogo from "../images/footlogo.jpg";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <section id="footer_bg_img">
                <div className="container-fluid">
                    <div className="col-10 mx-auto">
                        <div className="row pt-2">
                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <div className="foot_one">
                                <h6>WORKING HOURS</h6>
                                <p>Monday - Friday: 08:00 am – 08:30 pm</p>
                                <p>Saturday: 10:00 am – 16:30 pm</p>
                                <p>Sunday: 10:00 am – 16:30 pm</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <div className="foot_two">
                                    <p>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                    
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="for_foot_icons">
                                    <div className="row">
                                        <NavLink to="/">
                                        <p><i className="fab fa-facebook-f"></i></p>
                                        </NavLink>
                                        <NavLink to="/">
                                        <p><i className="fab fa-youtube"></i></p>
                                        </NavLink>
                                        <NavLink to="/">
                                        <p> <i className="fab fa-twitter"></i></p>
                                        </NavLink>
                                        <NavLink to="/">
                                        <p> <i className="fab fa-instagram"></i></p>
                                        </NavLink>
                                    </div>
                                    </div>
                            </div>
                            
                        </div>
                        <div className="text-center for_copy">
                    <p>Copyright ©2021 All rights reserved</p>
                </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
