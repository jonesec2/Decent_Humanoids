import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import Search from "../components/Search"
import icon from "../images/favicon.ico";

export default function Results(props) {

   console.log(props)

   const [word, setWord] = useState("");

   const [filterDisplay, setFilterDisplay] = useState([{}]);
   console.log(word);
   // console.log(word === "")
   // console.log(word.length);
   console.log(filterDisplay);
   // console.log(filterDisplay[0]);
   // console.log(filterDisplay.length)

   useEffect(() => {

   }, [filterDisplay.length > 2])


   const handleChange = e => {
      // console.log(e)
      let oldList = props.search.map(search => {
         return { name: search.name, pageNumber: search.pageNumber, blurb: search.blurb }
      });
      console.log(oldList)

      console.log(oldList[0].name.includes('Ma'))

      if (e !== "") {
         // console.log(e.length)
         let newList = [];
         // console.log(e)
         console.log(word.charAt(0).charAt(1))
         console.log(word.charAt(1))
         setWord(e);
         newList = oldList.filter(search =>
            search.name.charAt(0).includes(word.charAt(0).toUpperCase())
         );
         console.log(newList)
         if (newList.length <= 0) {
            return
         }

         if (e.length >= 3) {
            setFilterDisplay(newList);
         }

         else { return }
      }
      else {
         setWord("")
         setFilterDisplay([{}]);
      }
   };

   return (
      <div>
         <div className="row">
            <div className="float-right col-sm-1 col-2  px-0 imgWrap">
               <img className="d20" width="47px" height="47px" src={icon} />
            </div>
            <div className="col-sm-11 col-10 search pl-0">
               <input onChange={e => handleChange(e.target.value)}
                  type="text"
                  name="searchBar"
                  id="searchBar"
                  placeholder="Your starts inquiry here."
               />
            </div>
         </div>
         { typeof(filterDisplay[0].name) === "undefined"  ? (
            <div></div>
         ) : (
               <div>
                  {filterDisplay.map((search, i) => (
                     <div className="row linkTitle" key={i}>
                        <Link className="col-12 col-md-3 info border-right align-middle"
                           to={{
                              pathname: "/wiki",
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