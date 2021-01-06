import React from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Navbar from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
// import iphiriaPic from "../images/IphireaLanding.png";
import iphiriaClose from "../images/IphiriaClose.png";
import "./Home.css";



function NoMatch() {

   console.log(window.location.pathname)
   return (
      <div>
         <Navbar />
         <div className="noMatch">
            <Wrapper>
               <div className="minHome">
                  <h2>Sorry Traveller: Looks like you took a wrong turn </h2>
                  <hr></hr>
                  <h4>Let's get you back <Link to={"/home"}>home</Link></h4>
                  <Link to={"/home"}><img className="noMatchImage"  src={iphiriaClose}/></Link>
                  {/* <img className="noMatchImage"  src={iphiriaClose}/> */}
               </div>
            </Wrapper>
         </div>
         <Footer />
      </div>
   )
}

export default NoMatch