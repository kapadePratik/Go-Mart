import React from "react";
import "./LoginForm.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body  ">
                <h2 className="text-center mt-5">Sign In Now</h2>
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
                  </div>
                  <div className="mb-3">
                    <div className="input-group signin-input mt-4 w-75 mx-auto">
                      <span className="input-group-text">
         
                        <span>
                          <RiLockPasswordLine size={30} />
                        </span>
                      </span>
                      <input
                        type="password"
                        id="placeholder"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>

                 <Link to='/forgetpassword' className="link-tag"> <span className="ms-5 sign-inforgot text-center">FORGOT PASSWORD?</span> </Link>
                  <div className="mb-3">
                    <button type="submit" className="btn signin-btn  w-50 mt-3">
                      Sign In
                    </button>
                  </div>
                  <h5>Or</h5>
                  <div className="d-flex justify-content-center signin-icon">
                    <span className="ms-5">
                      <FcGoogle size={30} />
                    </span>
                    <span className="mr-5">
                      <FaApple size={30} />
                    </span>
                    <span>
                      <FaFacebook size={30} />
                    </span>
                  </div>
                  <div className="signin-icon-text mt-3 link-tag">
                    <p>Don't have an account?</p> 
                     <Link to='/register' className="link-tag"><span>Sign up</span></Link>
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

export default LoginForm;
