import React from "react";
import "./OTPPage.css";
import { Link } from "react-router-dom";
import { Navigation } from "react-router-dom";

const OTPPage = () => {
  return (
    // <div class="otp-container">
    //     <h2>OTP Generator</h2>
    //     <div>
    //         <input type="text" class="otp-input" maxlength="1" />
    //         <input type="text" class="otp-input" maxlength="1" />
    //         <input type="text" class="otp-input" maxlength="1" />
    //         <input type="text" class="otp-input" maxlength="1" />
    //     </div>
    //     <button class="otp-generate-button">Generate OTP</button>
    // </div>

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
                  <input type="text" class="otp-input" maxlength="1" />
                  <input type="text" class="otp-input" maxlength="1" />
                  <input type="text" class="otp-input" maxlength="1" />
                  <input type="text" class="otp-input" maxlength="1" />
                </div>
                <div className="otp-para mt-3">
                  <span className="">If you don't get OTP then?</span>
                  <br/>
                  <a href="">Resend</a>
                </div>
              </div>
            <Link to='/changepassword'> <button class="btn signin-btn  w-50 mt-3">Submit</button></Link> 
              <div className="mb-3">
                {/* <Link to="/otpgenerator">
                        <button
                          type="submit"
                          className="btn signin-btn  w-50 mt-3">
                          Send Now
                        </button>{" "}
                      </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
