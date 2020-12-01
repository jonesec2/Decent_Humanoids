import React from "react";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

export default function Timeline() {
   return (
      <div>
         <Navbar />
         <div className="noMatch">
            <Wrapper>
               <h1>Test</h1>
            </Wrapper>
         </div>
         <Footer />
      </div>

   )
}