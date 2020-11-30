import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Nav";
import Wrapper from "../components/Wrapper";
import MainText from "../components/MainText";
import test from "../utils/test.json";
import testpic from "../"
import Footer from "../components/Footer";

export default function Wiki() {

   console.log(test[0])
   const object = test[0]
   console.log(window.location.pathname)

   return (
      // <Router>
      <div>
         <Navbar />
         <Wrapper>
            <h1 className="text-left">{object.title}</h1>
            <hr />
            <MainText/>
         </Wrapper>
         <Footer />
      </div>

   )
}
