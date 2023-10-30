import React, { useState, useEffect } from "react";
import "./CartOffers.css";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { apimethod, getCouponcode } from "../../../../utils/api";
import Navbar from "../../../Navbar/Navbar";

const CartOffers = () => {
  const [coupon, setCoupon] = useState([]);
  const [copySuccess, setCopySuccess] = useState(null);

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

  // coupon card functionality

  const handleCopyCode = (code, index) => {
    const textField = document.createElement("textarea");
    textField.innerText = code;
    document.body.appendChild(textField);
    textField.select();

    try {
      document.execCommand("copy");
      setCopySuccess(index);
    } catch (err) {
      console.error("Failed to copy coupon code: ", err);
    }

    document.body.removeChild(textField);
  };

  return (
    <>
      {/* <div class="offers-container offers-mobileview">
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
      </div> */}

      <Navbar />
      <div class="container">
        <div className="row">
          {coupon &&
            coupon.map((obj, index) => (
              <div className="col-6 mt-5" key={index}>
                <div class="coupon-card">
                  <img
                    src={
                      "https://gomart.thecompletesoftech.in/uploads/" +
                      obj.coupon_image
                    }
                    style={{
                      width: 100,
                      height: 100,
                    }}
                    class="logo"
                  />
                  <h3>
                    {obj.discount + "%"} {obj.coupon_desc}
                  </h3>
                  <div class="coupon-row">
                    <span id="newcpnCode">{obj.coupan_code}</span>
                    <span
                      id="cpnCode"
                      onClick={() => handleCopyCode(obj.coupan_code, index)}
                      style={{
                        cursor: "pointer",
                      }}>
                      Copy Code
                    </span>
                  </div>
                  {copySuccess === index && (
                    <p style={{ color: "red" }}>code copied</p>
                  )}
                  <p>Valid Till: 20Dec, 2021</p>
                  <div class="circle1"></div>
                  <div class="circle2"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CartOffers;
