import React, { useState } from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import key from "../utils/key.json";
// import LandingPage from "../pages/LandingPage";
// import Home from "../pages/Home";
// import NoMatch from "../pages/NoMatch";
// import Results from "../components/Results";

function Navbar() {

   const [search] = useState(key)

   return (
      <div id="top">
         <nav className="navbar navbar-expand-lg navbar-light bg-light text-left">
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
            <div>
               <ul className="navbar-nav collapse navbar-collapse" id="navbarSupportedContent">
                  {/* <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Decent_Humanoids/">Landing Page</Link>
               </li> */}
                  <li className="nav-item">
                     <Link className="nav-link js-scroll-trigger" to={"/home"}>Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link js-scroll-trigger" to={"/wiki"}>Wiki</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link js-scroll-trigger" to={"/timeline"}>Timeline</Link>
                  </li>
                  {/* <li>
                  <Link className="nav-link js-scroll-trigger" to={"/noMatch"}> Whoops</Link>
               </li> */}
               </ul>
            </div>
            {/* <Results search={search}></Results> */}
         </nav>
      </div>
   )
}



export default Navbar;