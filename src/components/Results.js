import React, { useState } from "react"
import { Link } from "react-router-dom";
import Search from "../components/Search"

import icon from "../images/favicon.ico";

export default function Results(props) {

   console.log(props)
   // console.log(icon)
   // console.log(props.newResult({}))

   const [word, setWord] = useState("");

   const [filterDisplay, setFilterDisplay] = useState([{}]);
   // console.log(filterDisplay)
   // console.log(word.length);
   // console.log(word)
   // console.log(word === "")

   const handleChange = e => {
      // console.log(e)
      let oldList = props.search.map(search => {
         return { name: search.name, pageNumber: search.pageNumber, blurb: search.blurb }
      });

      if (e !== "") {
         // console.log(e)
         let newList = [];
         setWord(e);
         newList = oldList.filter(search =>
            search.name.includes(word.charAt(0).toUpperCase())
         );
         setFilterDisplay(newList);
      }
      else {
         setWord("")
         setFilterDisplay([{}]);
      }
   };

   return (
      <div>
         <div className="row">
            {/* <img className="col-1 d20" src={icon} /> */}
            <div className="float-right col-sm-1 col-2  px-0 imgWrap">
               <img className="d20" width="47px" height="47px" src={icon} />
            </div>
            <div className="col-sm-11 col-10 search pl-0">
               <input onChange={e => handleChange(e.target.value)}
                  type="text"
                  name="searchBar"
                  id="searchBar"
                  placeholder="Search for a character, a place, an item, or a fond memory."
               />
            </div>
         </div>
         {word === "" ? (
            <div></div>
         ) : (
               <div>
                  {filterDisplay.map((search, i) => (
                     <div className="row linkTitle" key={i}>
                        <Link className="col-12 col-md-3 info border-right align-middle"
                           // onClick={props.newResult(search)}
                           to={{
                              pathname: "/decent_humanoids/wiki",
                              state: search.pageNumber,
                           }}
                        > {search.name} </Link> <p className="col-12 col-md-9 text-left linkText">{search.blurb}</p>
                     </div>
                  ))}
               </div>
            )
         }
      </div>
   )
}