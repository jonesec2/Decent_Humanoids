import React, {useState} from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import key from "../utils/key.json";
// import LandingPage from "../pages/LandingPage";
// import Home from "../pages/Home";
// import NoMatch from "../pages/NoMatch";
import Results from "../components/Results";

function Navbar() {

   const [search] = useState(key)

   return (
      <div id="top">
         <nav className="navbar navbar-expand-lg navbar-light bg-light text-left">
            <ul className="navbar-nav">
               {/* <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Decent_Humanoids/">Landing Page</Link>
               </li> */}
               <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/decent_humanoids/home">Home</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/decent_humanoids/wiki">Wiki</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/timeline">Timeline</Link>
               </li>
               {/* <li>
                  <Link className="nav-link js-scroll-trigger" to="/whoops"> Whoops</Link>
               </li> */}
            </ul>
            {/* <Results search={search}></Results> */}
         </nav>
      </div>
   )
}



export default Navbar;