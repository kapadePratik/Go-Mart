import React, { useState, useEffect } from "react";
import "./Address.css";
import Home from "../../images/home.png";
import Office from "../../images/office.png";
import Location from "../../images/location.png";
import { Link, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { apimethod, useraddress } from "../../../utils/api";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
const Address = (props) => {
  const [validationErrors, setValidationErrors] = useState({});
  const [getprofile, setGetprofile] = useState([]);
  const [addorder, setAddorder] = useState({});

  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const state = useLocation();
  const datalog = state.state;

  console.log("ndvnvnv" + JSON.stringify(datalog));

  const [changedata, setchangedata] = useState(0);
  const [formData, setFormData] = useState({
    address: "",
    building: "",
    zip: "",
    city: "",
    address_type: changedata,
    other_address: "",
    user_id: 2,
    order_id: 1,
  });
  // console.log(formData.address_type);
  const [isSelected, setIsSelected] = useState(false);

  const [payment_method, setpayment_method] = useState("cod");

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  const cardClassName = isSelected ? "card selected" : "card";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const changetabvalue = (tab) => {
    setchangedata(tab);
    // console.log(tab);
  };
  // console.log(changedata);
  const handleSubmit = async () => {

    try {
      const response = await useraddress("useraddress", formData);
      const newresponse = response;

      // console.log(newresponse);

      if (newresponse.status == false) {
        setValidationErrors(newresponse.errors);
      }

      if (newresponse.status == true) {
        window.alert(newresponse.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const AddOrderlist = async () => {
    const body = {
      address: "",
      coupon_id: "",
      order_type: "",
      payment_method: payment_method,
      order_amount: "",
    };
    const response = await apimethod("addOrder", body);
    const newresponse = response;
    console.log(newresponse);
  };

  return (
    // <form className="container" onSubmit={handleSubmit}>
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

          <div className="row justify-content-center  ">
            <div className="col-lg-2 card-content {`card ${cardClassName}`}">
              <div className={cardClassName} onClick={toggleSelection}>
                <div
                  className="card address-card p-3  "
                  style={{
                    cursor: "pointer",
                  }}>
                  <img
                    value={formData.address_type}
                    name="address_type"
                    src={Home}
                    alt=""
                    width={70}
                    height={70}
                    className=""
                    onClick={() => changetabvalue(0)}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-2 card-content">
              <div className={cardClassName} onClick={toggleSelection}>
                <div
                  className="card address-card p-3"
                  style={{
                    cursor: "pointer",
                  }}>
                  <img
                    value={formData.address_type}
                    name="address_type"
                    src={Office}
                    alt=""
                    width={70}
                    height={70}
                    className=""
                    onClick={() => changetabvalue(1)}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-2 card-content">
              <div className={cardClassName} onClick={toggleSelection}>
                <div
                  className="card address-card p-3"
                  style={{
                    cursor: "pointer",
                  }}>
                  <img
                    value={formData.address_type}
                    name="address_type"
                    src={Location}
                    alt=""
                    width={70}
                    height={70}
                    className=""
                    onClick={() => changetabvalue(2)}
                  />
                </div>
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
                <input
                  type="text"
                  name="building"
                  value={formData.building}
                  onChange={handleChange}
                />
                <label>Building/Society Name & Number</label>
                <span class="line"></span>
              </div>
              <div class="brise-input ">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <label>Street Address,Landmark,etc</label>
                <span class="line"></span>
              </div>
            </div>

            <div class="wrap-line">
              <div class="brise-input">
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                />
                <label>Zip code</label>
                <span class="line"></span>
              </div>

              <div class="brise-input">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                <label>City</label>
                <span class="line"></span>
              </div>
            </div>

            {/* radio */}

            <div class="wrap-line">
              <label>
                <input
                  type="radio"
                  class="input-radio on"
                  name="payment_method"
                  value={payment_method}
                  onChange={(e) => e.target.value}
                />{" "}
                COD
              </label>
              <div class="brise-input"></div>
              <label>
                <input
                  type="radio"
                  class="input-radio on"
                  checked
                  name="payment_method"
                  value={payment_method}
                  onChange={(e) => e.target.value}
                />{" "}
                ONLINE
              </label>
            </div>
          </form>

          <div class="form-check mt-5">
            <div className="checkbox-data">
              <input
                class="checkbox"
                type="other_address"
                value={formData.other_address}
                onChange={handleChange}
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
          {/* <Link to="/paymentpopup"> */}
          <MDBBtn onClick={toggleShow} 
            // onClick={() => {
            //   handleSubmit();
            // }}

            type="submit"
            className="addcart-btn signin-btn w-25 mt-3">
            NEXT
          </MDBBtn>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Address;
