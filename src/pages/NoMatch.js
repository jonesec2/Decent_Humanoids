import React from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Navbar from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import "./Home.css";



function NoMatch() {

   console.log(window.location.pathname)
   return (
      <div>
         <Navbar />
            <div className="noMatch">
               <h1>Sorry Traveller</h1>
               <h3>Looks like you took a wrong turn</h3>
            </div>
         <Footer />
      </div>
   )
}

export default NoMatch