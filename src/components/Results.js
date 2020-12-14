import React, { useState } from "react"

export default function Results(props) {

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
         <h1>Test</h1>
         filter: <input onChange={e => handleChange(e.target.value)} />
         {filterDisplay.map((search, i) =>(
            <div key={i}>
               <li>
                  {search.name} &nbsp;
                  <span>{search.pageNumber}</span>
               </li>
            </div>
         ))}
      </div>
   )
}