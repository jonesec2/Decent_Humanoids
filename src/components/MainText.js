import React, { useState } from "react";
import test from "../utils/test.json";
import picture from "../images/eb_dh1.jpg"
import testPic from "./images/eb_dh1.jpg"
import Modal from "../components/Modal"

/* Will have to attach json objects dynamically here, still not sure how  */


export default function MainText(object) {

   console.log()
   const [show, setShow] = useState('false')

   const showModal = e => {
      if (show === 'false') {
         setShow('true')
      }
      console.log(show)
   }

   console.log(show)

   // const object = test[0]
   // const image = test[0].mainImage
   // console.log(image)
   // console.log(testPic)
   // console.log(object.mainImage)
   // "../public/img/eb_dh1.jpg"
   // {object.mainImage}
   const info = object.object
   // console.log(object.object)

   return (
      <div className="container text-center mx-auto my-3">
         <div className="container mx-auto mb-3 pb-2 ml-5 border textR">
            <img onClick={e => showModal()} className="image" src={info.mainImage} />
            {show === 'true' ? (
               <Modal show={show} />
            ) : (
                  <div></div>
               )}
            <p>{info.left1}</p>
            <p>{info.left1}</p>

         </div>
         <div className="mx-auto mb-3 pb-2">
            <p>{info.overview}</p>
         </div>
         <div className="border py-1 px-4 textL">
            <button className="btn info">Click Me!</button>
            <button className="btn info">Click Me!</button>
            <button className="btn info">Click Me!</button>
            <button className="btn info">Click Me!</button>
         </div>
         <div className=" mx-auto my-3 py-2">
            <hr></hr>
            <h3>{info.title1}</h3>
            <p>{info.History}</p>
            <hr></hr>
            <h3>{info.title2}</h3>
            <p>{info.Future}</p>
            <hr></hr>
            <h3>{info.title3}</h3>
            <div>{info.Gallery}</div>
         </div>
      </div>
   )
}