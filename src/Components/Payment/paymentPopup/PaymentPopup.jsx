import React from "react";
import "./PaymentPopup.css";
import popupimg from "../../images/paymentdonepopup.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PaymentPopup = () => {
  return (
    <div className="parent">
      <div className="row justify-content-center mt-5">
        <div className="card card-width-mobile">
          <div className="bg-white">
            <div className="col-lg-12">
              <div
                className="popup-img">
                <img
                  src={popupimg}
                  width={100}
                  height={100}
                  alt=""
                  className="mt-5"
                />
              </div>
            </div>

            <div className="col-lg-12 mt-5">
              <div className="col-md-12">
                <h2 className="payment-h2">Your Order has been</h2>
                <h2 className="payment-h2">Successfully</h2>
              </div>
            </div>

            <div className="col-lg-12 mt-3">
              <div className="text-center">
                <p className="payment-p">
                  Your item has been placed and is on <br />
                  <span>it's way to be proceed</span>
                </p>
              </div>
            </div>

            <div>
              <button className="addcart-btn signin-btn w-50 mt-3">
                Track Order
              </button>
            </div>

            <Link to="/" className="link-tag">
              <div className="back-home  mt-5 mb-5">Back to Home</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
