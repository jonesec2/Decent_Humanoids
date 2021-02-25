import React, { useState, useEffect, useRef } from "react";

import timeline from "../utils/timeline.json"


export default function MainTime() {

   const info = timeline
   console.log(info);

   return (
      <div className="timeline">
         <div className=" timelineText ">
            {info.map((search, i) => (
               <div className="timelineContainer mx-3" key={i}>
                  
                  {search.topBlurb === "null" ?
                     (<div className="noBlurb"></div>)
                     :
                     (<div className="topBlurb mx-auto">{search.topBlurb}</div>)
                  }

                  <div className="mainInfo">
                     <h3 className="mainChild">{search.title}</h3>
                     <p className="mainChild">
                        {search.mainInfo[0].info1}
                        <br />
                        <br />{search.mainInfo[0].info2}
                        <br />
                        <br />{search.mainInfo[0].info3}
                        <br />
                        {search.mainInfo[0].info4 === "null" ?
                           (<div></div>)
                           :
                           (<div><br />{search.mainInfo[0].info4}
                              <br /></div>)
                        }

                        {search.mainInfo[0].info5 === "null" ?
                           (<div></div>)
                           :
                           (<div><br />{search.mainInfo[0].info5}
                              <br /></div>)
                        }

                        {search.mainInfo[0].info6 === "null" ?
                           (<div></div>)
                           :
                           (<div><br />{search.mainInfo[0].info6}
                              <br /></div>)
                        }
                     </p>
                  </div>
                  <div className="line"></div>
                  <div className="dot"></div>
                  <div className="sessionNumber">{search.sessionNumber}</div>
                  <div className="days">{search.days}</div>
               </div>
            ))}
         </div>
      </div>
   )
}