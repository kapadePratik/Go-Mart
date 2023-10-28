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
      }
    });
  };

  useEffect(() => {
    getcoupon();
  }, []);

  // State to store the selected promo code index
  const [selectedPromoIndex, setSelectedPromoIndex] = useState(null);

  // Function to handle the click on the Apply button
  const handleApplyClick = (index) => {
    setSelectedPromoIndex(index);
  };
  return (
    <>
      <div class="offers-container offers-mobileview">
        <div className="row">
          <div className="col-md-4">
            {coupon &&
              coupon.map((obj, index) => (
                <>
                  <div class="offer-one-container">
                    <div class="offer-one" key={index}>
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
                      <Link
                        to="/"
                        state={obj.discount}
                        style={{
                          textDecoration: "none",
                          border: "none",
                          outline: "none",
                        }}>
                        <a
                          className="cartoffer-btn"
                          style={{
                            backgroundColor:
                              selectedPromoIndex === index
                                ? "#CCD1D1 "
                                : "#23AA49",
                            color:
                              selectedPromoIndex === index ? "black" : "white",
                          }}
                          onClick={() => handleApplyClick(index)}>
                          {selectedPromoIndex === index ? "Applied" : "Apply"}
                        </a>
                      </Link>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartOffers;
