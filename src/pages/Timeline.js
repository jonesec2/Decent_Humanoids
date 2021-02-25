import React from "react";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Results from "../components/Results";
// import iphiriaPic from "../images/IphireaLanding.png";
import HistoryTest from "../images/dh_history_test.png";
import HistoryTest2 from "../images/dh_history_test2.png";
import normalizedHistory from "../images/DH_History_Normalized_Size.png"
import MainTime from "../components/MainTime";

export default function Timeline() {

   console.log(HistoryTest);
   // const search = "test"
   return (
      <div>
         <Navbar />
         <div className="noMatch">
            <Wrapper>
               <div className="minHome">
                  <h1 className="text-left mobileHeading">Campaign Timeline</h1>
                  <hr />
                  {/* <div className="timeline">
                     <img className="timelineImage" src={normalizedHistory} />
                  </div> */}

                  <MainTime/>
                  {/* <h2>Restart the adventure</h2>
                  <p>I'll try my best to get you what you're looking for. If I can't I'll try to get you as close as possible.</p>
                  <hr></hr>
                  <Results search={search} /> */}
                  <hr></hr>
                  <div className="row">
                     <p className="col-2">Controls</p>
                     <button className="col-2">Test</button>
                     <button className="col-2">Test</button>
                     <button className="col-2">Test</button>
                     <button className="col-2">Test</button>
                     <button className="col-2">Test</button>
                  </div>
               </div>
            </Wrapper>
         </div>
         <Footer />
      </div>

   )
}