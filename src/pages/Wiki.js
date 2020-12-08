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
import Title from "../components/Title";
import MainContainer from "../components/MainContainer";
import MainText from "../components/MainText";

export default function Wiki(props) {

   // The trick to getting this to work is to set a default loading page to fall back on
   // But putting all the code in home to send over. So use will search
   // then select and when the link is selected that is where the object 
   // will be chosen and then all of the info will make it over as a prop
   // so rendering would look like "{load prop.title || if null default}"

   const [wiki, setWiki] = useState('Default');
   const [keyCode, setKeyCode] = useState('Default');
   const [object, setObject] = useState(test[0]);
   console.log(props.location.state)

   // useEffect(() => {

   //    if (typeof props.location.state === 'undefined') {
   //       console.log("prop is UNDEFINED")
   //       return
   //    }
   //    if (typeof props.location.state !== 'undefined') {
   //       console.log("prop IS DEFINED: " + props.location.state.result)
   //       setWiki(props.location.state.result)
   //    }
   //    else {
   //       setWiki('Default')
   //       console.log(wiki);
   //    }
   //    // console.log(keyCode)
   //    // const object = test[keyCode]
   //    // console.log(object)
   //    // const object = test[2].title
   //    // console.log(test[1]);

   // })

   // useEffect(() => {
   //    console.log(wiki);
   //    console.log(object)
   //    if (typeof wiki === 'undefined') {
   //       console.log("wiki is UNDEFINED" + key['Default'])
   //       setKeyCode(key['Default'])
   //    }
   //    else {
   //       console.log("wiki IS DEFINED: " + key[wiki])
   //       setKeyCode(key[wiki])
   //    }
   // }, [wiki])

   // useEffect(() => {
   //    console.log("got object " + JSON.stringify(object));
   //    setObject(test[keyCode]);

   // },[keyCode])

   // console.log(object)


   // const object = test[0]
   // console.log(object);

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
            <Title title={"test"} />
            {/* <h1 className="text-left">{object.title}</h1> */}
            <hr />
            <MainText
               object={{left1:"test", mainImage:"test", overview:"test",title:"test", title1:"test", History:"test", title2:"test", Future:"test", title3:"test", Gallery:"test"}}
            >
            </MainText>
            {/* Use W3 schools about image gallery to make a cool image gallery */}
            {/*  */}
            {/* )} */}
         </Wrapper>
         <Footer />
      </div>

   )
}
