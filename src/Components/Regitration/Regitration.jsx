import React, { useState } from "react";
import "./Regitration.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import bgimg from "../images/loginbg.jfif";

const Regitration = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body  ">
                <h2 className="text-center mt-5">Register Now</h2>

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}>
                  <Form>
                    {/* full name */}
                    <div className="mb-3 mt-3">
                      <div className="input-group signin-input mt-5 w-75 mx-auto">
                        <span className="input-group-text ">
                          <span>
                            <IoMdContact size={30} />
                          </span>
                        </span>
                        <input
                          id="placeholder"
                          type="text"
                          className="  form-control"
                          placeholder="Enter Full Name"
                        />
                      </div>
                    </div>

                    {/* email */}
                    <div className="mb-3 mt-3">
                      <div className="input-group signin-input mt-4 w-75 mx-auto">
                        <span className="input-group-text">
                          <span>
                            <HiOutlineMail size={30} />
                          </span>
                        </span>
                        <Field
                          id="email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* phone number */}

                    <div className="mb-3 mt-3">
                      <div className="input-group signin-input mt-4 w-75 mx-auto">
                        <span className="input-group-text">
                          <span>
                            <BsFillTelephoneFill size={30} />
                          </span>
                        </span>
                        <input
                          id="placeholder"
                          type="text"
                          className="form-control "
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>

                    {/* create password */}
                    <div className="mb-3 register-password">
                      <div className="input-group signin-input mt-4 w-75 mx-auto">
                        <span className="input-group-text">
                          {/* <i className="bi bi-lock"></i> */}
                          <span>
                            <RiLockPasswordLine size={30} />
                          </span>
                        </span>
                        <Field
                          type="password"
                          name="password"
                          className="form-control"
                          id="password"
                          placeholder=" Create Password"
                        />
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* confirm password */}

                    <div className="mb-3">
                      <div className="input-group signin-input mt-4 w-75 mx-auto">
                        <span className="input-group-text">
                          {/* <i className="bi bi-lock"></i> */}
                          <span>
                            <RiLockPasswordLine size={30} />
                          </span>
                        </span>
                        <input
                          type="password"
                          id="placeholder"
                          className="form-control"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                    <div className=" ">
                      <Link to="/forgetpassword" className="link-tag">
                        <span className="forgot-password">
                          FORGOT PASSWORD?
                        </span>
                      </Link>
                    </div>

                    <div className="mb-3">
                      <button
                        type="submit"
                        className="btn signin-btn  w-50 mt-3">
                        Register Now
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
                      <p>I have an account?</p>
                      <Link to="/login" className="link-tag">
                        <span>Sign In</span>
                      </Link>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regitration;
