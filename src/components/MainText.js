import React, { useState, useRef } from "react";
// import test from "../utils/test.json";
// import picture from "../images/eb_dh1.jpg"
// import testPic from "./images/eb_dh1.jpg"
import Modal from "../components/Modal"

/* Will have to attach json objects dynamically here, still not sure how  */


export default function MainText(object) {

   console.log()
   const [show, setShow] = useState('false')

   const showModal = e => {
      if (show === 'false') {
         setShow('true')
      }
      // console.log(show)
      if (show === 'true') {
         setShow('false')
      }
   }

   let myRef = useRef()
   const executeScroll = () => myRef.current.scrollIntoView();

   // console.log(show)


   // {object.mainImage}
   const info = object.object
   // console.log(object.object)

   return (
      <div className="container text-center mx-auto my-3">
         <div className="container mx-auto mb-3 pb-2 ml-5 border textR">
            <img onClick={e => showModal()} className="image" src={info.mainImage} alt={info.imageDescription} />
            {show === 'true' ? (
               <Modal img={info.mainImage} alt={info.imageDescription} show={show} closeModal={showModal} />
            ) : (
                  <div></div>
               )}
            {info.rightInfo1 === "null" ? (
               <div></div>
            ) : (<p>{info.rightInfo1}</p>)}

            {info.rightInfo2 === "null" ? (
               <div></div>
            ) : (<p>{info.rightInfo2}</p>)}

            {info.rightInfo3 === "null" ? (
               <div></div>
            ) : (<p>{info.rightInfo3}</p>)}

            {info.rightInfo4 === "null" ? (
               <div></div>
            ) : (<p>{info.rightInfo4}</p>)}

            {info.rightInfo5 === "null" ? (
               <div></div>
            ) : (<p>{info.rightInfo5}</p>)}


         </div>
         <div className="mx-auto mb-3 pb-2">
            <p>{info.overview}</p>
         </div>
         <div className="border py-1 px-4 textL">
            <button className="btn info" onClick={executeScroll} >Overview</button>
            <button className="btn info">{info.title2}</button>
            <button className="btn info">{info.title3}</button>
         </div>
         <div className=" mx-auto my-3 py-2">

            <hr></hr>
            <h3>{info.title1}</h3>
            {info.SectionOneP1 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionOneP1}</p>)}
            {info.SectionOneP2 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionOneP2}</p>)}

            {info.SectionOneP3 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionOneP3}</p>)}

            {info.SectionOneP4 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionOneP4}</p>)}

            {info.SectionOneP5 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionOneP5}</p>)}



            <hr></hr>
            <h3>{info.title2}</h3>
            {info.SectionTwoP1 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionTwoP1}</p>)}
            {info.SectionTwoP2 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionTwoP2}</p>)}

            {info.SectionTwoP3 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionTwoP3}</p>)}

            {info.SectionTwoP4 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionTwoP4}</p>)}

            {info.SectionTwoP5 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionTwoP5}</p>)}



            <hr></hr>
            <h3 ref={myRef}>{info.title3}</h3>
            {info.SectionThreeP1 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionThreeP1}</p>)}
            {info.SectionThreeP2 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionThreeP2}</p>)}

            {info.SectionThreeP3 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionThreeP3}</p>)}

            {info.SectionThreeP4 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionThreeP4}</p>)}

            {info.SectionThreeP5 === "null" ? (
               <div></div>
            ) : (<p>{info.SectionThreeP5}</p>)}

         </div>
      </div>
   )
}