import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory, Route } from "react-router-dom";
// import test from "../utils/test.json";
// import picture from "../images/eb_dh1.jpg"
// import testPic from "./images/eb_dh1.jpg"
// import group from "./images/dh_groupA.jpg"
import Modal from "../components/Modal";


/* Will have to attach json objects dynamically here, still not sure how  */


export default function MainText(object) {

   const [show, setShow] = useState('false')

   // console.log(group);
   const showModal = e => {
      if (show === 'false') {
         setShow('true')
      }
      // console.log(show)
      if (show === 'true') {
         setShow('false')
      }
   }

   // console.log(object);
   // {object.mainImage}
   const info = object.object

   console.log(object.object)
   console.log(info.subtitle1)
   console.log(info.mainImage)
   console.log(info.Gallery.length)

   let history = useHistory();

   return (
      <div className="container mobileSM text-center mx-auto my-3">
         <div className="container mx-auto mb-3 pb-2 ml-5 border textR">
            <img onClick={e => showModal()} className="image" src={info.mainImage} alt={info.imageDescription} />
            {show === 'true' ?
               (
                  <Modal img={info.mainImage} alt={info.imageDescription} show={show} showModal={showModal} />
               )
               :
               (<div></div>)
            }
            {info.rightInfo1 === "null" ?
               (<div></div>)
               :
               (<p>{info.rightInfo1}</p>)
            }

            {info.rightInfo2 === "null" ?
               (<div></div>)
               :
               (<p>{info.rightInfo2}</p>)
            }

            {info.rightInfo3 === "null" ?
               (<div></div>)
               :
               (<p>{info.rightInfo3}</p>)
            }

            {info.rightInfo4 === "null" ?
               (<div></div>)
               :
               (<p>{info.rightInfo4}</p>)
            }

            {info.rightInfo5 === "null" ?
               (<div></div>)
               :
               (<p>{info.rightInfo5}</p>)
            }

         </div>
         <div className="mx-auto mb-3 pb-2 endOverview">
            <p className="endOverview">{info.overview}</p>
         </div>
         <div className="border py-1 px-4 mr-4 textL row">
            <button className="btn info col-12" id="firstSection" onClick={e => object.sideBarScroll(e.target.id)}>{info.title1}</button>
            <button className="btn info col-12" id="secondSection" onClick={e => object.sideBarScroll(e.target.id)}>{info.title2}</button>
            <button className="btn info col-12" id="thirdSection" onClick={e => object.sideBarScroll(e.target.id)}>{info.title3}</button>
         </div>
         <div className=" mx-auto my-3 py-2 startInfo">
            <hr></hr>
            <h3 ref={object.secondRef}>{info.title1}</h3>

            {/* Section 1 paragraphs */}
            {info.SectionOneP1 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionOneP1}</p>)
            }

            {info.SectionOneP2 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionOneP2}</p>)
            }

            {info.SectionOneP3 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionOneP3}</p>)
            }

            {info.SectionOneP4 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionOneP4}</p>)
            }

            {info.SectionOneP5 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionOneP5}</p>)
            }

            {/* Section one Links */}
            {info.subtitle1 === "null" ?
               (<div></div>)
               :
               (
                  <div className="row mx-auto subtitle align-middle">Related Entries:
                     {info.subtitle1.map((search, i) => (
                        <p key={i}>
                           <Link className="col-2 border-right  align-middle"
                              to={{
                                 pathname: "/wiki",
                                 state: search.pageNumber,
                              }} onClick={() => window.location.reload()}

                           > {search.page} </Link>
                        </p>

                     ))}
                     <Route exact path={"/wiki"} />
                  </div>
               )
            }
            {/*  */}


            <hr></hr>
            <h3 ref={object.otherRef}>{info.title2}</h3>

            {info.SectionTwoP1 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionTwoP1}</p>)
            }
            {info.SectionTwoP2 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionTwoP2}</p>)
            }

            {info.SectionTwoP3 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionTwoP3}</p>)
            }

            {info.SectionTwoP4 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionTwoP4}</p>)
            }

            {info.SectionTwoP5 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionTwoP5}</p>)
            }

            {/* Section one Links */}
            {info.subtitle2 === "null" ?
               (<div></div>)
               :
               (
                  <div className="row mx-auto subtitle align-middle">Related Entries:
                     {info.subtitle2.map((search, i) => (
                        <p key={i}>
                           <Link className="col-2 border-right  align-middle"
                              to={{
                                 pathname: "/wiki",
                                 state: search.pageNumber,
                              }} onClick={() => window.location.reload()}

                           > {search.page} </Link>
                        </p>

                     ))}
                     <Route exact path={"/wiki"} />
                  </div>
               )
            }
            {/*  */}


            <hr></hr>

            <h3 ref={object.lastRef}>{info.title3}</h3>


            {info.SectionThreeP1 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionThreeP1}</p>)
               // <img className="image gallery" src={info.SectionThreeP1} alt={info.imageDescription} />)
            }
            {info.SectionThreeP2 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionThreeP2}</p>)
            }

            {info.SectionThreeP3 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionThreeP3}</p>)
            }

            {info.SectionThreeP4 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionThreeP4}</p>)
            }

            {info.SectionThreeP5 === "null" ?
               (<div></div>)
               :
               (<p>{info.SectionThreeP5}</p>)
            }

            {/* Section one Links */}
            {info.subtitle3 === "null" ?
               (<div></div>)
               :
               (
                  <div className="row mx-auto subtitle align-middle">Related Entries:
                     {info.subtitle3.map((search, i) => (
                        <p key={i}>
                           <Link className="col-2 border-right  align-middle"
                              to={{
                                 pathname: "/wiki",
                                 state: search.pageNumber,
                              }} onClick={() => window.location.reload()}

                           > {search.page} </Link>
                        </p>

                     ))}
                     <Route exact path={"/wiki"} />
                  </div>
               )
            }
            {/*  */}
            {info.Gallery.length === 0 ?
               (<div></div>)
               :
               (
                  <div>
                     <h3>{info.title4}</h3>
                     <div className="container mx-auto mb-3 pb-2 ml-5 border">
                        <div className="gallery">
                           <div className="gallery_column">
                           {info.Gallery.map((search, i) => (
                              <figure className="gallery_thumb">
                                 <img key={i} className="gallery_image" src={search.image} alt={search.imageDescription} />
                              </figure>

                           ))}
                           </div>
                        </div>
                     </div>
                  </div>
               )

            }

         </div>
      </div>
   )
}