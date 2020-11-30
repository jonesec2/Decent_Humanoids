import React from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import Navbar from "../components/Nav"



function NoMatch() {

   console.log(window.location.pathname)
   return (
      <div>
         <Navbar />
         <div className="Test">
            <h1>Sorry Traveller</h1>
            <h3>Looks like you took a wrong turn</h3>
         </div>
      </div>
   )
}

export default NoMatch