import React from "react";
import "./ChangePassword.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div>
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body   ">
                <h2 className="text-center mt-5">Change Password</h2>
                <div>
                  <span className="forgotpassword-para">
                    Enter your New Password
                  </span>
                </div>

                <form>
                  <div className=" ">
                    <div className="input-group signin-input mt-3 w-75 mx-auto">
                      <span className="input-group-text">
                        <span>
                          <RiLockPasswordLine size={30} />
                        </span>
                      </span>
                      <input
                        id="placeholder"
                        type="text"
                        className="form-control"
                        placeholder="Enter New Password"
                        required
                      />
                    </div>

                    <div className="input-group signin-input mt-3 w-75 mx-auto">
                      <span className="input-group-text">
                        <span>
                          <RiLockPasswordLine size={30} />
                        </span>
                      </span>
                      <input
                        id="placeholder"
                        type="text"
                        className="form-control"
                        placeholder="Enter Confirm Password"
                        required
                      />
                    </div>
                    <div className="mb-3">
                     <Link to='/' className="link-tag"> <button
                        type="submit"
                        className="btn signin-btn  w-50 mt-3">
                        Done
                      </button></Link>
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

export default ChangePassword;
