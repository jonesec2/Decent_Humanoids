import React from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";


export default function Search() {

   return (
      <div className="search">
         <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search for a character, a place, an item, or a fond memory."
         />
      </div>
   )
}