import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Nav";
import Wrapper from "../components/Wrapper";
import test from "../utils/test.json";
import Footer from "../components/Footer";
import testPic from "../images/eb_dh1.jpg"
import iphirea from "../images/Iphiria.png"

export default function Wiki(props) {

   

   console.log(props.location.state)


   // console.log(test[0])
   const object = test[0]
   // console.log(window.location.pathname)

   return (
      // <Router>
      <div>
         <Navbar />
         <Wrapper>
            <h1 className="text-left">{object.title}</h1>
            <hr />
            <div className="container text-center mx-auto my-3">
               <div className="container mx-auto mb-3 pb-2 ml-5 border textR">
                  <img className="image" src={testPic} />
                  <p>{object.left1}</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
               </div>
               <div className="mx-auto mb-3 pb-2">
                  <p>{object.overview}</p>
               </div>
               <div className="border py-1 px-4 textL">
                  <button className="btn info">Click Me!</button>
                  <button className="btn info">Click Me!</button>
                  <button className="btn info">Click Me!</button>
                  <button className="btn info">Click Me!</button>
               </div>
               <div className=" mx-auto my-3 py-2">
                  <hr></hr>
                  <h3>{object.title1}</h3>
                  <p>{object.History}</p>
                  <hr></hr>
                  <h3>{object.title2}</h3>
                  <p>{object.Future}</p>
                  <hr></hr>
                  <h3>{object.title3}</h3>
                  <p>ipsum salt bitches ipsum salt bitches ipsum salt bitches ipsum salt bitches</p>
                  <p>ipsum salt bitches ipsum salt bitches ipsum salt bitches ipsum salt bitches</p>
               </div>
            </div>
         </Wrapper>
         <Footer />
      </div>

   )
}
