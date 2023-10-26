import React, { useState, useEffect } from "react";
import "./CartOffers.css";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { apimethod, getCouponcode } from "../../../../utils/api";

const CartOffers = () => {
  const [coupon, setCoupon] = useState([]);

  const getcoupon = async () => {
    await apimethod("getCouponcode").then((result) => {
      if (result != false) {
        setCoupon(result.data);
        console.log(result);
      }
    });
  };

  useEffect(() => {
    getcoupon();
  }, []);

  const buttonColors = ['#CCD1D1 '];

  const [selectedColors, setSelectedColors] = useState(Array(buttonColors.length).fill(false));

  const handleButtonClick = (index) => {
    const newSelectedColors = selectedColors.map((_, i) => i === index);
    setSelectedColors(newSelectedColors);
  }
  return (
    // <div className="row justify-content-center">
    //   <div className="cancle-icon ">
    //     <Link
    //       to="/"
    //       style={{
    //         textDecoration: "none",
    //         outline: "none",
    //       }}>
    //       <MdCancel size={30} />
    //     </Link>
    //   </div>
    //   <div className=" col-md-8  ">
    //     <div className="">
    //       <div class="card p-4">
    //         <div className="container">
    //           <div className="card p-3">
    //             <ul class="list-group list-group-flush">
    //               <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 ">
    //                 <h3 className="offer-heading">New user? First Wash Free</h3>
    //                 <button
    //                   className="offers-btn w-25"
    //                   style={{
    //                     backgroundColor: "#D7D7D7",
    //                     color: "white",
    //                   }}>
    //                   Apply
    //                 </button>
    //               </li>
    //               <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 col-lg-4">
    //                 <p className="offer-para">
    //                   Your order no.1225345 is confirm Now.Pick up guy will
    //                   reach at your doorstep
    //                 </p>
    //               </li>
    //             </ul>
    //           </div>

    //           <div className="card p-3 mt-3">
    //             <ul class="list-group list-group-flush">
    //               <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 ">
    //                 <h3 className="offer-heading">
    //                   Upto 20% Discount on credit Card payment
    //                 </h3>
    //                 <div className="cartoffer-applybtn">
    //                 <button
    //                   className="w-75 "
    //                   style={{
    //                     backgroundColor: "#D7D7D7",
    //                     color: "white",
    //                   }}>
    //                   Apply
    //                 </button>
    //                 </div>

    //               </li>
    //               <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 col-lg-4">
    //                 <p className="offer-para">
    //                   Your order no.1225345 is Ready to Dispatch Now.Kindly be
    //                   at place to collect the Delivery
    //                 </p>
    //               </li>
    //             </ul>
    //           </div>

    //           <div className="card p-3 mt-3">
    //             <ul class="list-group list-group-flush">
    //               <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 ">
    //                 <h3 className="offer-heading">
    //                   Summer offer: Pay for Wash & get ......
    //                 </h3>
    //                 <button
    //                   className="  "
    //                   style={{
    //                     backgroundColor: "#D7D7D7",
    //                     color: "white",
    //                   }}>
    //                   Apply
    //                 </button>
    //               </li>
    //               <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 col-lg-4">
    //                 <p className="offer-para">
    //                   Your order no.1225345 is confirm Now.Pick up guy will
    //                   reach at your doorstep
    //                 </p>
    //               </li>
    //             </ul>
    //           </div>

    //           <div className="card p-3 mt-3">
    //             <ul class="list-group list-group-flush">
    //               <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 ">
    //                 <h3 className="offer-heading">
    //                   Get first Dry clean and free on 2nd{" "}
    //                 </h3>
    //                 <button
    //                   className="  "
    //                   style={{
    //                     backgroundColor: "#D7D7D7",
    //                     color: "white",
    //                   }}>
    //                   Apply
    //                 </button>
    //               </li>
    //               <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 col-lg-4">
    //                 <p className="offer-para">
    //                   Your order no.1225345 is confirm Now.Pick up guy will
    //                   reach at your doorstep
    //                 </p>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <div class="offers-container offers-mobileview">
        <div className="row">
          {coupon &&
            coupon.map((obj, index) => (
              <>
                <div className="col-md-4">
                  <div class="offer-one-container" key={index}>
                    <div class="offer-one">
                      <div class="circle offer-round">
                        <span>{obj.discount + "%"} </span>
                      </div>
                      <div class="bottom">
                        <h1>{obj.coupan_title}</h1>
                        <p>{obj.coupon_desc}</p>
                        <span>sub</span>
                      </div>
                    </div>
                    <div className="offer-anchor mt-3">
                    {buttonColors.map((color, pick) => (
                      
                      <a
                        href="#"
                        className="cartoffer-btn"
                        key={pick}
                        style={{
                          backgroundColor: selectedColors[pick] ? '#CCD1D1 ' : color,
                        }}
                        onClick={() => handleButtonClick(pick)}
                        >
                        Apply
                      </a>
                       ))}
                    </div>
                  </div>
                </div>
              </>
            ))}

          
        </div>
      </div>
    </>
  );
};

export default CartOffers;
