import logo from './logo.svg';
import React  from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import NoMatch from "./pages/NoMatch"
import Timeline from "./pages/Timeline"
import Wiki from "./pages/Wiki"



export default function App() {


   return (

      <Router basename="/decent_humanoids">
         <div className="ttttt">
            {/* <LandingPage /> */}
            <Switch>
               <Route exact path ={process.env.PUBLIC_URL + "/"} component={LandingPage} />
               <Route exact path={process.env.PUBLIC_URL + "/home"} component={Home} />
               <Route exact path ={process.env.PUBLIC_URL + "/wiki"} component={Wiki} />
               <Route exact path = {process.env.PUBLIC_URL + "/timeline"} component={Timeline} />
               <Route exact path ={process.env.PUBLIC_URL + "/noMatch"} component={NoMatch} />
               <Route>
                  <NoMatch />
               </Route>
            </Switch>
         </div >
      </Router >
   );

}
