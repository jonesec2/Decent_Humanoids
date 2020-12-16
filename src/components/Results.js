import React, { useState } from "react"
import { Link } from "react-router-dom";
import Search from "../components/Search"

export default function Results(props) {

   console.log(props)

   const [word, setWord] = useState("");

   const [filterDisplay, setFilterDisplay] = useState(props.search);

   const handleChange = e => {
      console.log(e)
      let oldList = props.search.map(search => {
         return { name: search.name.toLowerCase(), pageNumber: search.pageNumber }
      });

      if (e !== "") {
         console.log(e)
         let newList = [];
         setWord(e);
         newList = oldList.filter(search =>
            search.name.includes(word.toLowerCase())
         );
         setFilterDisplay(newList);
      }
      else {
         setFilterDisplay(props.search);
      }
   };

   return (
      <div>
         <div className="search">
            <input onChange={e => handleChange(e.target.value)}
               type="text"
               name="searchBar"
               id="searchBar"
               placeholder="Search for a character, a place, an item, or a fond memory."
            />
         </div>
         {filterDisplay.map((search, i) => (
            <div className="row linkTitle" key={i}>
               <Link className="col-12 col-md-3 info border-right align-middle"
                  to={{
                     pathname: "/wiki",
                     state: search.pageNumber
                  }}
               > {search.name} </Link> <p className="col-12 col-md-9 text-left linkText">{search.blurb}</p>
            </div>
         ))}
      </div>
   )
}