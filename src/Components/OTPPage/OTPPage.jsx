import React, { useEffect, useState } from "react";
// import "./OTPPage.css";

import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { Navigation } from "react-router-dom";
import axios from "axios";
import { apimethod, verifyOtp } from "../../utils/api";

const OTPPage = () => {
  const [validationErrors, setValidationErrors] = useState({});
  const [getprofile, setGetprofile] = useState([]);

  const renderInput = (index, value, onChange) => {
    return (
      <input
        type="text"
        name={`otp-${index}`}
        value={value}
        onChange={onChange}
        maxLength={1}
      />
    );
  };

  const getProfile = async (e) => {
    try {
      const response = await apimethod("profileBytoken", formData);
      const newresponse = response;
      setGetprofile(response.data[0].email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var body = {
      email: getprofile,
      otp: formData.otp,
    };

    try {
      const response = await verifyOtp("verifyOtp", body);
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
    <form onSubmit={handleSubmit} className="digit-group">
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body   ">
                <h2 className="text-center mt-5">Forgot Password</h2>
                <div>
                  <span className="forgotpassword-para">
                    Otp was sent to your Email/Phone
                  </span>

                  <span className="forgotpassword-para">for verification</span>
                </div>

                <div className="mb-3 mt-3">
                  {/* OTP  */}

                  <div className="d-flex justify-content-center otp-inputfield">
                    <input
                      value={formData.otp}
                      name="otp"
                      onChange={handleChange}
                      className="otp-form"
                    />
                  </div>
                  <div className="otp-para mt-3">
                    <span className="">If you don't get OTP then?</span>
                    <br />
                    <a href="">Resend</a>
                  </div>
                </div>
                {/* <Link to='/changepassword'> */}
                <button
                  type="submit"
                
                  class="btn signin-btn  w-50 mt-3">
                  Submit
                </button>
                {/* </Link>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default OTPPage;
