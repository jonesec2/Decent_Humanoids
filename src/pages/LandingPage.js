// import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, useHistory, Link, Route, Switch } from "react-router-dom"
// import './App.css';
import Home from "./Home"
import icon from "../images/favicon.ico";


function LandingPage() {

   const [appBackground, setAppBackground] = useState('App')
   const [headerBackground, setHeaderBackground] = useState('App-header')
   const [path, setPath] = useState(window.location.pathname);

   // console.log(headerBackground)
   // console.log(path)

   useEffect(() => {
      setPath(window.location.pathname);
      console.log(path + "test")
   }, [path]);

   useEffect(() => {
      console.log('headerBackground test')
   }, [headerBackground])

   useEffect(() => {
      console.log('background test')
   }, [appBackground])

   let history = useHistory();


   return (

      // <Router basename="/decent_humanoids">
      <div className='App'>
         <header className={headerBackground}>
            <div className="diceBackground">
               <Link to={"/home"} onClick={event => history.push("/home")}></Link>
            </div>
            <Link
               onMouseEnter={(e) => {
                  setHeaderBackground('blur-App-header');
                  setAppBackground('darkApp')
               }}
               onMouseLeave={(e) => {
                  setHeaderBackground('App-header')
                  setAppBackground('App')
               }}

               to={"/home"} onClick={event => history.push("/home")
               }>
               <img className="d20 color" width="47px" height="47px" src={icon} />
            </Link>
         </header>
         <Route exact path={"/home"} component={Home} />
      </div>
      // </Router>

   )
}

export default LandingPage