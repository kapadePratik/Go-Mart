import React from "react";
import "./ForgetPassword.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navigation } from "react-router-dom";
const ForgetPassword = () => {
  return (
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

                  <span className="forgotpassword-para">And send OTP password to your Email/Phone</span>
                </div>

                <form>
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
                        className="form-control"
                        placeholder="Email or Phone Number"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <Link to="/otpgenerator">
                        <button
                          type="submit"
                          className="btn signin-btn  w-50 mt-3">
                          Send Now
                        </button>{" "}
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
