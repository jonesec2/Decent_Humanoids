import React from "react";

export default function Modal(props) {
   console.log(props);
   console.log(props.show);

   const close = e =>{
      props.closeModal()
      console.log('test');
   }

   return (
      <div>
         <img onClick={e => close() }  className="imageTarget" src={props.img} />
      </div>
   )
}