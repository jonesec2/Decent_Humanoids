import React from "react";
import test from "../utils/test.json";
import picture from "../images/eb_dh1.jpg"
import testPic from "./images/eb_dh1.jpg"

/* Will have to attach json objects dynamically here, still not sure how  */


export default function MainText(props) {

   const object = test[0]
   const image = test[0].mainImage
   console.log(image)
   console.log(testPic)
   console.log(object.mainImage)
   // "../public/img/eb_dh1.jpg"
   // {object.mainImage}

   return (
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
   )
}