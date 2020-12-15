import React, { useState } from "react"
import { Link } from "react-router-dom";

export default function Results(props) {

   console.log(props)

   const [word, setWord] = useState("");

   const [filterDisplay, setFilterDisplay] = useState(props.search);

   const handleChange = e => {
      let oldList = props.search.map(search => {
         return { name: search.name.toLowerCase(), pageNumber: search.pageNumber }
      });

      if (e !== "") {
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
         filter: <input onChange={e => handleChange(e.target.value)} />
         {filterDisplay.map((search, i) => (
            <div className="row" key={i}>
               <Link className="col-12 col-md-3 info pr-0"
                  to={{
                     pathname: "/wiki",
                     state: search.pageNumber
                  }}
               > {search.name} </Link> <p className="col-12 col-md-9 text-left pl-0">{search.blurb}</p>
            </div>
         ))}
      </div>
   )
}