import React from "react";
import "./Address.css";
import Home from "../../images/home.png";
import Office from "../../images/office.png";
import Location from "../../images/location.png";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Address = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div class="card mt-5">
          <div class="pt-2 pb-2">
            <div class="mb-3 pb-2 mt-3">
              <h4
                style={{
                  color: "#495057",
                }}>
                Select Address
              </h4>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-2">
                <div className="card address-card p-3">
                  <img src={Home} alt="" width={70} height={70} className="" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="card address-card p-3">
                  <img
                    src={Office}
                    alt=""
                    width={70}
                    height={70}
                    className=""
                  />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="card address-card p-3">
                  <img
                    src={Location}
                    alt=""
                    width={70}
                    height={70}
                    className=""
                  />
                </div>
              </div>
            </div>

            <form id="brise-form">
              <h3
                className="mt-3 "
                style={{
                  color: "#575C55",
                  fontSize: "20px",
                  fontWeight: "700",
                }}>
                Address Details
              </h3>

              <div className="wrap-line mt-5">
                <div class="brise-input ">
                  <input type="text" name="text" required />
                  <label>Building/Society Name & Number</label>
                  <span class="line"></span>
                </div>
                <div class="brise-input ">
                  <input type="text" name="text" required />
                  <label>Street Address,Landmark,etc</label>
                  <span class="line"></span>
                </div>
              </div>

              <div class="wrap-line">
                <div class="brise-input">
                  <input type="text" name="text" required />
                  <label>Zip code</label>
                  <span class="line"></span>
                </div>

                <div class="brise-input">
                  <select class="" id="inputGroupSelect01">
                    <option selected>City</option>
                    <option value="1">Surat</option>
                    <option value="2">Vadodara</option>
                    <option value="3">Bharuch</option>
                  </select>
                </div>
              </div>
              
            </form>

            <div class="form-check mt-5">
              <div className="checkbox-data">
                <input
                  class="checkbox"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                &nbsp;&nbsp;
                <label class="" for="flexCheckChecked">
                  <p className="check-text "> Deliver at other Location</p>
                </label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <Link to="/paymentpopup">
              <button className="addcart-btn signin-btn w-25 mt-3">NEXT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
