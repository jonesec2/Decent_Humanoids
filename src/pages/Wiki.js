import React, { useState, useEffect, useRef } from "react";
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
import normalizedHistory from "../images/DH_History_Normalized_Size.png"
import pageKey from "../utils/test.json";
import key from "../utils/key.json";
import Title from "../components/Title";
import MainText from "../components/MainText";
import d61 from "../images/d6_1.jpg";
import d62 from "../images/d6_2.jpg";
import Search from "../components/Search";
import dagger from "../images/Daggerofmanydaggers.jpg"


export default function Wiki(props) {
   // console.log(testPic);
   // console.log(iphirea);
   // console.log(maevePic);
   // console.log(groupPic);
   // console.log(dagger);
   // console.log(yubnub);
   // console.log(normalizedHistory);
   // console.log(d61);
   // console.log(d62);


   const [search] = useState(key)

   let myRef = useRef();
   let secondRef = useRef();
   let otherRef = useRef();
   let lastRef = useRef();

   const [lastScroll, setLastScroll] = useState(0);
   const [scrollY, setScrollY] = useState(0)

   function testScroll() {
      // console.log(e)
      setScrollY(window.scrollY)
      console.log(scrollY)
      console.log(window.scrollY)
      if (window.pageYOffset > 10) {
         console.log('scrolled');
      }
      console.log(secondRef)
   }


   // console.log(props)
   const [object, setObject] = useState(
      typeof props.location.state === 'undefined'
         ? test[0]
         : test[props.location.state]
   );
   // console.log(object)
   // console.log(test[props.location.state.pageName])
   // console.log(test[0])

   useEffect(() => {
      newResult()
      myRef.current.scrollIntoView();
      testScroll()
      console.log(window.scrollY)
   }, [object],[scrollY])


   // console.log(search)
   function newResult(test) {
      // let test = "test"
      // console.log(test);
      // setObject(test.props.pageNumber)
   }

   const sideBarScroll = (e) => {
      if (e === "topSection") {
         myRef.current.scrollIntoView();
      }
      else if (e === "firstSection") {
         secondRef.current.scrollIntoView();
      }
      else if (e === "secondSection") {
         otherRef.current.scrollIntoView();
      }
      else if (e === "thirdSection") {
         lastRef.current.scrollIntoView();
      }
      else {
         return;
      }
   }

   return (
      <div ref={myRef} onScroll={testScroll} >
         <Navbar />
         <div  className="noMatch">
            <div className="example">
               <p id="topSection" onClick={e => sideBarScroll(e.target.id)}>Top</p>
               <img id="firstSection" onClick={e => sideBarScroll(e.target.id)} className="d6" width="36px" height="36px" src={d61} />
               <p><img id="secondSection" onClick={e => sideBarScroll(e.target.id)} className="d6" width="36px" height="36px" src={d62}/></p>
               <p id="thirdSection" onClick={e => sideBarScroll(e.target.id)}>Bot</p>
            </div>
            <div className="example2">
               <p id="topSection" onClick={e => sideBarScroll(e.target.id)}>^</p>
               <p id="firstSection" onClick={e => sideBarScroll(e.target.id)}>°</p>
               <p id="secondSection" onClick={e => sideBarScroll(e.target.id)}>°°</p>
               <p className="thirdSection" id="thirdSection" onClick={e => sideBarScroll(e.target.id)}>^</p>
            </div>
            {object ? (
               <Wrapper>
                  {/* <Search /> */}

                  <Title title={object.title} />
                  <hr />
                  <MainText
                     // sideBarScroll = {sideBarScroll}
                     myRef={myRef}
                     secondRef={secondRef}
                     otherRef={otherRef}
                     lastRef={lastRef}
                     sideBarScroll={sideBarScroll}
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
                        subtitle1: object.subtitle1,
                        subtitle2: object.subtitle2,
                        subtitle3: object.subtitle3,
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
