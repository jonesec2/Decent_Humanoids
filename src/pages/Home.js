import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Nav";
import Wrapper from "../components/Wrapper";
import MainText from "../components/MainText";
import test from "../utils/test.json";
import Search from "../components/Search"



function Home() {

   console.log(test[0])
   const object = test[0]
   console.log(window.location.pathname)

   return (
      // <Router>
      <div>
         <Navbar />
         <Wrapper>
            <h1 className="text-left">Welcome</h1>
            <hr />
            <p>This is the Decent Humanoids wikipedia page. These chronicle the adventures of 6 friends through their D&D campaign. </p>
            <p>   It all started with a one shot, so four of the friends could dip their toes into role playing games. Six hours later, everyone was hooked and the game continued. Fast forward two and half years and the game was wrapped up. </p>
            <p>   There is more to come for sure, but now we rest and use this website to look back fondly on the memories we made. </p>
            <hr></hr>
            <h2>Restart the adventure</h2>
            <p>I'll try my best to get you what you're looking for. If I can't I'll try to get you as close as possible.</p>
            <Search />
            <hr></hr>
            <h3>Results</h3>
            {/* The results should show as a "keyword" link and maybe the 
            first part of the overview? */}
            <div className="row">
               {/* I don't think Link will work exactly like this.
               Think I might have to make a function that passes a prop
               to the wiki page. From wiki page the prop is passed to the "main text"
               component and the page is dynamically loaded */}
               <Link className="col-3 info" to="/wiki">Click Me!</Link> <p className="col-8">test test test test test</p>
               <Link className="col-3 info" to="/wiki">Click Me!</Link> <p className="col-8">test test test test test</p>
               <Link className="col-3 info" to="/wiki">Click Me!</Link> <p className="col-8">test test test test test</p>
               <Link className="col-3 info" to="/wiki">Click Me!</Link> <p className="col-8">test test test test test</p>
               <Link className="col-3 info" to="/wiki">Click Me!</Link> <p className="col-8">test test test test test</p>
            </div>
         </Wrapper>
         
      </div>

   )
}

export default Home