import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Nav";
import Wrapper from "../components/Wrapper";
// import MainText from "../components/MainText";
import pageContent from "../utils/test.json";
import key from "../utils/key.json"
import Search from "../components/Search";
import Footer from "../components/Footer";
// import API from "../utils/API";
import Results from "../components/Results";
import Maeve from "../images/dh_Maeve_1.jpg";



function Home() {


   const history = useHistory();
   const prop = "test"
   const [pageName, setPage] = useState(2);

   // console.log(key)
   console.log(Maeve)

   const [search] = useState(key)

   const decent = pageContent[1]

   // create search component
   // use key pairs to pass the page number across


   useEffect(() => {
      if (typeof pageName === 'undefined') {
         console.log("Page not found");
         return
      }
      else {
         // console.log(pageContent[0]);
         console.log("use Effect");
         // routeChange();
         // setPage(pageContent[2])
      }
   }, [pageName])

   console.log(pageName)

   const [result] = useState("Iphiria")

   return (
      // <Router>
      <div>
         <Navbar />
         <div className="noMatch">
            <Wrapper>

               <h1 className="text-left">Welcome</h1>
               <hr />
               <p>This is the Decent Humanoids wikipedia page. These chronicle the adventures of 6 friends through their D&D campaign. </p>
               <p>   It all started with a one shot. Four friends wanted to dip their toes into role playing games, and asked two other friends to help them. Six hours later, everyone was hooked and the game continued. Fast forward two and half years and the game was wrapped up. </p>
               <p>   There is more to come for sure, but now we rest and use this website to look back fondly on the memories we made. </p>
               <hr></hr>
               <h2>Restart the adventure</h2>
               <p>I'll try my best to get you what you're looking for. If I can't I'll try to get you as close as possible.</p>
               <hr></hr>
               {/* <Search /> */}
               <h2>Results</h2>
               <Results search={search} />
            </Wrapper>
         </div>
         <Footer />

      </div>

   )
}

export default Home