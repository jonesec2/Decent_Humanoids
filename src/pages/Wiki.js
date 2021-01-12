import React, { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Nav";
import Wrapper from "../components/Wrapper";
import test from "../utils/test.json";
import Footer from "../components/Footer";
import testPic from "../images/dh_groupA.jpg";
import iphirea from "../images/IphiriaClose.png";
import maevePic from "../images/dh_Maeve_1.jpg";
import groupPic from "../images/eb_dh1.jpg";
import yubnub from "../images/yubnub.jpg";
import pageKey from "../utils/test.json";
import key from "../utils/key.json";
import Title from "../components/Title";
import MainText from "../components/MainText";
import Search from "../components/Search";
import dagger from "../images/Daggerofmanydaggers.jpg"


export default function Wiki(props) {
   // console.log(testPic);
   // console.log(iphirea);
   // console.log(maevePic);
   // console.log(groupPic);
   console.log(dagger);
   console.log(yubnub)

   // decent_humanoids/static/media/iphirea_bg2.f7d452fe.png

   const [search] = useState(key)
   // The trick to getting this to work is to set a default loading page to fall back on
   // But putting all the code in home to send over. So use will search
   // then select and when the link is selected that is where the object 
   // will be chosen and then all of the info will make it over as a prop
   // so rendering would look like "{load prop.title || if null default}"
   // console.log(props)
   const [object, setObject] = useState(
      typeof props.location.state === 'undefined'
         ? test[0]
         : test[props.location.state]);
   // console.log(object)
   // console.log(test[props.location.state.pageName])
   // console.log(test[0])

   useEffect(() => {
      newResult()
   }, [object])

   console.log(search)
   function newResult(test) {
      // let test = "test"
      // console.log(test);
      // setObject(test.props.pageNumber)
   }

   return (
      <div>
         <Navbar />
         <div className="noMatch">
            <div className="example">

            </div>
            {object ? (
               <Wrapper>
                  {/* <Search /> */}

                  <Title title={object.title} />
                  <hr />
                  <MainText
                     object={{
                        title: object.title,
                        overview: object.overview,
                        mainImage: object.mainImage,
                        imageDescription: object.imageDescription,
                        rightInfo1: object.rightInfo1,
                        rightInfo2: object.rightInfo2,
                        rightInfo3: object.rightInfo3,
                        rightInfo4: object.rightInfo4,
                        rightInfo5: object.rightInfo5,
                        title1: object.title1,
                        SectionOneP1: object.SectionOneP1,
                        SectionOneP2: object.SectionOneP2,
                        SectionOneP3: object.SectionOneP3,
                        SectionOneP4: object.SectionOneP4,
                        SectionOneP5: object.SectionOneP5,
                        title2: object.title2,
                        SectionTwoP1: object.SectionTwoP1,
                        SectionTwoP2: object.SectionTwoP2,
                        SectionTwoP3: object.SectionTwoP3,
                        SectionTwoP4: object.SectionTwoP4,
                        SectionTwoP5: object.SectionTwoP5,
                        title3: object.title3,
                        /* Use W3 schools about image Section3 to make a cool image Section3 */
                        SectionThreeP1: object.SectionThreeP1,
                        SectionThreeP2: object.SectionThreeP2,
                        SectionThreeP3: object.SectionThreeP3,
                        SectionThreeP4: object.SectionThreeP4,
                        SectionThreeP5: object.SectionThreeP5
                     }}>
                  </MainText>
               </Wrapper>
            ) :
               (
                  <Wrapper>
                     {/* <Search /> */}
                     <Title title="test" />
                     <hr />
                     <MainText
                        object={{
                           title: pageKey[0].title,
                           overview: pageKey[0].overview,
                           mainImage: pageKey[0].mainImage,
                           left1: pageKey[0].left1,
                           title1: pageKey[0].title1,
                           SectionOneP1: pageKey[0].SectionOneP1,
                           SectionOneP2: pageKey[0].SectionOneP2,
                           SectionOneP3: pageKey[0].SectionOneP3,
                           SectionOneP4: pageKey[0].SectionOneP4,
                           SectionOneP5: pageKey[0].SectionOneP5,
                           title2: pageKey[0].title2,
                           SectionTwoP1: pageKey[0].SectionTwoP1,
                           SectionTwoP2: pageKey[0].SectionTwoP2,
                           SectionTwoP3: pageKey[0].SectionTwoP3,
                           SectionTwoP4: pageKey[0].SectionTwoP4,
                           SectionTwoP5: pageKey[0].SectionTwoP5,
                           title3: pageKey[0].title3,
                           /* Use W3 schools about image Section3 to make a cool image Section3 */
                           SectionThreeP1: pageKey[0].SectionThreeP1,
                           SectionThreeP2: pageKey[0].SectionThreeP2,
                           SectionThreeP3: pageKey[0].SectionThreeP3,
                           SectionThreeP4: pageKey[0].SectionThreeP4,
                           SectionThreeP5: pageKey[0].SectionThreeP5
                        }}>
                     </MainText>
                  </Wrapper>
               )
            }
         </div>
         <Footer />
      </div>
   )
}
