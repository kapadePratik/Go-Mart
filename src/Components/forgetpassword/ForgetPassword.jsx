import React, { useState } from "react";
import "./ForgetPassword.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navigation } from "react-router-dom";
import { apimethod,sendOtp } from "../../utils/api";
import axios from "axios";

const ForgetPassword = () => {
  const [validationErrors, setValidationErrors] = useState({});

  const [formData, setFormData] = useState({
    email: "",
  });
  // console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apimethod("sendOtp", formData);
      
      const newresponse = response;

      console.log(newresponse);

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
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="container ">
          <div className="row justify-content-center ">
            <div className="col-md-6">
              <div className="card mt-5">
                <div className="card-body   ">
                  <h2 className="text-center mt-5">Forgot Password</h2>
                  <div>
                    <span className="forgotpassword-para">
                      Enter your email for the verification process
                    </span>

                    <span className="forgotpassword-para">
                      And send OTP password to your Email/Phone
                    </span>
                  </div>

                  <div className="mb-3 mt-3">
                    <div className="input-group signin-input mt-5 w-75 mx-auto">
                      <span className="input-group-text">
                        <span>
                          <HiOutlineMail size={30} />
                        </span>
                      </span>
                      <input
                        id="placeholder"
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3 mobileview-btn">
                      {/* <Link to="/otpgenerator"> */}
                        <button 
                        onSubmit={handleSubmit}
                          type="submit"
                          className="btn signin-btn  w-50 mt-3">
                          Send Now
                        </button>{" "}
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ForgetPassword;
