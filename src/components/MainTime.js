import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";


export default function MainTime() {

   return (
      <div className="timeline">
         <div className=" timelineText ">
            {/* <div className="horizontal"> */}
               <div className="topBlurb">Viz pays 20 gold for information and then pays doubles for no real reason.</div>
               <div className="mainInfo">
                  <h3>The Lost Crystal</h3>
                  <p>
                     Our heroes first meet at the Righteous Fist office, signing on to do a job for a wizard named Atrix.
                  <br />
                     <br />Gather information and infiltrated Thieves Guild hideout.
                  <br />
                     <br />They find a temple to Selune and escape a trap.
                  <br />
                     <br />The group completely destroy two guards and bury them in a shallow grave. Baelok curb-stomped a guy
                  <br />
                     <br />Reclaimed the crystal from the thief.
                  </p>
               </div>
               <div className="line"></div>
               <div className="dot"></div>
               <div className="sessionNumber">Session 1</div>
               <div className="days">Day 1</div>
            {/* </div> */}
         </div>
      </div>
   )
}