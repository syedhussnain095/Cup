import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {  Switch, Route, Redirect } from 'react-router';
import './App.css';
import MailandIcon from "./Common/MailandIcon";
import Header from "./Common/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Shop from "./Shop/Shop";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Wish from "./WishCart/Wishlist";
import Cart from "./WishCart/Cart";
import Footer from "./Common/Footer";
function App() {
  return (
      <>
        <MailandIcon />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/wishlist" component={Wish} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </>
  );
}

export default App;
