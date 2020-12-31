import React from "react";

export default function Modal(props) {
   console.log(props);
   console.log(props.show);

   const close = e =>{
      props.closeModal()
      console.log('test');
   }

   return (
      <div className="imageTarget">
         <img onClick={e => close()} src={props.img} />
         <div className="imageDescription">{props.alt}</div>
         <a className="lightbox-close" href="#"></a>
      </div>
   )
}