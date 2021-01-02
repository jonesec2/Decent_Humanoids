// import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, useHistory, Link, Route, Switch } from "react-router-dom"
// import './App.css';
import Home from "./Home"
import icon from "../images/favicon.ico";


function LandingPage() {

   const [background, setBackground] = useState('App-header')
   const [path, setPath] = useState(window.location.pathname);

   // console.log(background)
   // console.log(path)

   useEffect(() => {
      setPath(window.location.pathname);
      console.log(path + "test")
   }, [path]);

   useEffect(() => {
      console.log('background test')
   }, [background])

   let history = useHistory();

   const redirect = () => {
      console.log(path + "redirect")
      history.push(path)
   }

   return (

      // <Router basename="/decent_humanoids">
      <div className='App'>
         <header className={background}>
            <div className="diceBackground">
               <Link to={"/home"} onClick={event => history.push("/home")}></Link>
            </div>
            <Link
               onMouseEnter={(e) => {
                  setBackground('blur-App-header')
               }}
               onMouseLeave={(e) => {
                  setBackground('App-header')
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