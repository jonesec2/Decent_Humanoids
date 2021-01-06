import React from "react";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Results from "../components/Results";
// import iphiriaPic from "../images/IphireaLanding.png";
import HistoryTest from "../images/dh_history_test.png";

export default function Timeline() {

   console.log(HistoryTest);
   // const search = "test"
   return (
      <div>
         <Navbar />
         <div className="noMatch">
            <Wrapper>
               <div className="minHome">
                  <h1 className="text-left">The story at a glance</h1>
                  <hr />
                  <p>This is the Decent Humanoids history timeline </p>

                  <hr></hr>
                  {/* <h2>Restart the adventure</h2>
                  <p>I'll try my best to get you what you're looking for. If I can't I'll try to get you as close as possible.</p>
                  <hr></hr>
                  <Results search={search} /> */}
               </div>
            </Wrapper>
         </div>
         <Footer />
      </div>

   )
}