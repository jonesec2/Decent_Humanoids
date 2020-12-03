import React, { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Nav";
import Wrapper from "../components/Wrapper";
import test from "../utils/test.json";
import Footer from "../components/Footer";
import testPic from "../images/dh_groupA.jpg"
import iphirea from "../images/IphiriaClose.png"
import key from "../utils/key.json";

export default function Wiki(props) {

   console.log(testPic)
   const [wiki, setWiki] = useState('Default');
   const [keyCode, setKeyCode] = useState('');
   const [object, setObject] = useState(test[0]);

   useEffect(() => {
      if (typeof props.location.state === 'undefined') {
         console.log(wiki + " if statement")
         return
      }
      if (typeof props.location.state !== 'undefined') {
         setWiki(props.location.state.result)
         loadPage();
         // renderPage();
      }
      else {
         setWiki('Default')
         loadPage();
         console.log(wiki);
      }
   })

   useEffect(() => {
      console.log(wiki);
   }, [wiki])

   function loadPage() {
      if (typeof wiki === 'undefined') {
         setKeyCode(key['Default'])
         getObject();
      }
      else {
         // keycode = key[wiki]
         // getObject()
         setKeyCode(key[wiki])
         getObject();
      }
      // console.log(keyCode)
      // const object = test[keyCode]
      // console.log(object)
   }
   // const object = test[2].title
   // console.log(test[1]);

   function getObject() {
      setObject(test[keyCode]);
   }

   const object = test[0]
   console.log(object);

   ////////////////////////////////////////////////////////
   //
   // how to dynamically render the page??
   //


   return (
      // <Router>
      <div>
         <Navbar />
         <Wrapper>
            {/* {object.map(object => */}
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
                  {/*  */}
                  {/* Use W3 schools about image gallery to make a cool image gallery */}
                  {/*  */}
                  <h3>{object.title3}</h3>
                  <div>{object.Gallery}</div>
               </div>
            </div>
            {/* )} */}
         </Wrapper>
         <Footer />
      </div>

   )
}
