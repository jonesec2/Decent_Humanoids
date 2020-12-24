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

      <Router>
         <div className="ttttt">
            {/* <LandingPage /> */}
            <Switch>
               <Route exact path ={"/decent_humanoids/"} component={LandingPage} />
               <Route exact path={"/decent_humanoids/home"} component={Home} />
               <Route exact path ={"/decent_humanoids/wiki"} component={Wiki} />
               <Route exact path = {"/decent_humanoids/timeline"} component={Timeline} />
               <Route exact path ={"/decent_humanoids/noMatch"} component={NoMatch} />
               <Route>
                  <NoMatch />
               </Route>
            </Switch>
         </div >
      </Router >
   );

}
