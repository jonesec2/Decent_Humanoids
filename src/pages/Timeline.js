import React, { useRef, useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
// import Results from "../components/Results";
// import iphiriaPic from "../images/IphireaLanding.png";
// import HistoryTest from "../images/dh_history_test.png";
// import HistoryTest2 from "../images/dh_history_test2.png";
// import normalizedHistory from "../images/DH_History_Normalized_Size.png"
import MainTime from "../components/MainTime";

export default function Timeline() {

   const [i, setI] = useState(0)
   let myRef = useRef(Array.from({length: 7}, () => React.createRef()));

   useEffect(() => {
      // myRef.current[0].current.focus()
      goToRef();
      window.scrollTop(0,0);
   }, [myRef.current[i]]);
   // console.log(i);

   function gotToStart() {
      myRef.current[0].current.scrollIntoView();
      setI(0)
   }

   function goToEnd() {
      myRef.current[6].current.scrollIntoView();
      setI(6)
   }

   function nextButton() {
      console.log(i)
      if (i >= 6) {
         return;
      }
      else { setI(i+1)}
      console.log(myRef.current[i].current)
   }

   function goToRef() {
      myRef.current[i].current.scrollIntoView();
   }

   function goToPrevious() {
      console.log(i)
      if (i <= 0) {
         return;
      }
      else { setI(i-1)}
      console.log(myRef.current[i].current)
   }

   console.log(i);
   // console.log(myRef);
   // console.log(myRef.current[0].current)

   // console.log(HistoryTest);

   return (
      <div>
         <Navbar />
         <div className="noMatch">
            <Wrapper>
               <div className="minHome">
                  <h1 className="text-left mobileHeading">Campaign Timeline </h1>
                  <hr />
                  <MainTime
                     myRef={myRef}
                     gotToStart={gotToStart}
                     goToEnd={goToEnd}
                     nextButton={nextButton}
                     goToPrevious={goToPrevious}

                  />
                  <hr className="hrTime"></hr>
                  <div className="row">
                     <p className="col-2">Controls</p>
                     <button onClick={gotToStart} className="col-2 navButton">Start</button>
                     <button onClick={nextButton} className="col-2 navButton">Next</button>
                     <button onClick={goToPrevious} className="col-2 navButton">Previous</button>
                     <button onClick={goToEnd} className="col-2 navButton">End</button>
                  </div>
               </div>
            </Wrapper>
         </div>
         <Footer />
      </div>

   )
}