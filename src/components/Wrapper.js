import React from "react";

export default function Wrapper(props) {

   return (
      <div className="container text-center mx-auto my-3">
         <div className="container border my-3 py-2 textC">
            {props.children}
         </div>
      </div>
   )
}