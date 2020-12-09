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

   const [object, setObject] = useState(test[props.location.state.pageName]);
   console.log(object)



   // use useEffect with callback argument so they can click "links" on page 
   // and re-render for new page
   // useEffect(() => {
   //    if (typeof props.location.state.pageName === 'undefined') {
   //       console.log("prop is UNDEFINED")
   //       setObject(test[0])
   //       return
   //    }
   //    if (typeof props.location.state !== 'undefined') {
   //       console.log("prop IS DEFINED: " + props.location.state.pageName)
   //       // setObject(props.location.state.pageName)
   //    }
   //    else {
   //       // setObject(test[0])
   //       console.log(object);
   //    }
   // })



   return (
      // <Router>
      <div>
         <Navbar />
         <div className="noMatch">
            {object ? (
               <Wrapper>
                  <Title title={object.title} />
                  <hr />
                  <MainText
                     object={{
                        title: object.title,
                        overview: object.overview,
                        mainImage: object.mainImage,
                        left1: object.left1,
                        title1: object.title1,
                        History: object.History,
                        title2: object.title2,
                        Future: object.Future,
                        title3: object.title3,
                        /* Use W3 schools about image gallery to make a cool image gallery */ 
                        Gallery: object.Gallery
                     }}>
                  </MainText>
               </Wrapper>
            ) : (<h5>no results</h5>)}
         </div>
         <Footer />
      </div>
   )
}
