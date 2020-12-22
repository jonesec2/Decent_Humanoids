// import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, useHistory, Link, Route, Switch } from "react-router-dom"
// import './App.css';
import Home from "./Home"
import styles from './LandingPage.css'


function LandingPage() {
   const [path, setPath] = useState(window.location.pathname);

   console.log(path)

   useEffect(() => {
      setPath(window.location.pathname);
      console.log(path + "test")
   }, [path]);

   let history = useHistory();

   const redirect = () => {
      console.log(path+"redirect")
      history.push(path)
   }

   return (

      <Router>
         <div className="App">
            <header className="App-header">
               <nav>
                  <ul>
                     <li>
                        {/* creating event that refreshes the page so that the Home page renders correctly */}
                        <Link to="/home" onClick={event => window.location.href='/decent_humanoids/home'}>Enter</Link>
                     </li>
                  </ul>
               </nav>
            </header>
            <Route exact path={"/decent_humanoids/home"} component={Home}>
               <Home />
            </Route>
         </div>
      </Router>

   )
}

export default LandingPage