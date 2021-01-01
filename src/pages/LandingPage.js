// import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, useHistory, Link, Route, Switch } from "react-router-dom"
// import './App.css';
import Home from "./Home"
import icon from "../images/favicon.ico";


function LandingPage() {
   const [path, setPath] = useState(window.location.pathname);

   console.log(path)

   useEffect(() => {
      setPath(window.location.pathname);
      console.log(path + "test")
   }, [path]);

   let history = useHistory();

   const redirect = () => {
      console.log(path + "redirect")
      history.push(path)
   }

   return (

      // <Router basename="/decent_humanoids">
      <div className="App">
         <header className="App-header">
            <div className="diceBackground">
            </div>
            <Link to={"/home"}
                  onClick={event => history.push("/home")}
               ><img className="d20 color" width="47px" height="47px" src={icon} /></Link>
            {/* <div className="diceBackground">
               <Link to={"/home"}
                  onClick={event => history.push("/home")}
               ><img className="d20 color" width="47px" height="47px" src={icon} /></Link>
            </div> */}
            <div className="App"></div>
         </header>
         <Route exact path={"/home"} component={Home}>
            <Home />
         </Route>
      </div>
      // </Router>

   )
}

export default LandingPage