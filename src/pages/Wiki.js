import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Nav";
import Wrapper from "../components/Wrapper";
import test from "../utils/test.json";
import Footer from "../components/Footer";
import testPic from "../images/eb_dh1.jpg"
import iphirea from "../images/IphiriaClose.png"
import key from "../utils/key.json";

export default function Wiki(props) {

   // const page = props.location.state.result
   console.log(iphirea)
   // console.log(props.location.state.result)
   ////////////////////////////////////////////////////////
   
   // By passing props for now
   // Hard coding a value that acts as a passed prop: "Iphiria"
   const lookUp = "Iphiria"

   console.log(key[lookUp])

   // setting the json Object key # based on the look up value (look up value will 
   //eventually come from props)
   const keyCode = key[lookUp]

   console.log(keyCode)

   // create variable to host the "dynamic" json Object value
   // this allows me to dynamically populate the page using the "object" variable
   const object = test[keyCode]
   console.log(object)


   return (
      // <Router>
      <div>
         <Navbar />
         <Wrapper>
            <h1 className="text-left">{object.title}</h1>
            <hr />
            <div className="container text-center mx-auto my-3">
               <div className="container mx-auto mb-3 pb-2 ml-5 border textR">
                  <img className="image" src={object.mainImage} />
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
                  <div>{object.Gallery}</div>
                  <p>ipsum salt bitches ipsum salt bitches ipsum salt bitches ipsum salt bitches</p>
                  <p>ipsum salt bitches ipsum salt bitches ipsum salt bitches ipsum salt bitches</p>
               </div>
            </div>
         </Wrapper>
         <Footer />
      </div>

   )
}
