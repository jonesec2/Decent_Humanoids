import React from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";

function Navbar() {

   return (
      <div id="top">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
               <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Decent_Humanoids/">Landing Page</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/home">Home</Link>
               </li>
               {/* <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/wiki">Wiki</Link>
               </li> */}
               <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/timeline">Timeline</Link>
               </li>
               <li>
                  <Link className="nav-link js-scroll-trigger" to="/whoops"> Whoops</Link>
               </li>
            </ul>
         </nav>
      </div>
   )
}



export default Navbar;