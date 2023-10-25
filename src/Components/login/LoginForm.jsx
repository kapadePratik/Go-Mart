import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../../utils/api";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [validationErrors, setValidationErrors] = useState({});

  const nav = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    login_type: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Login("login", formData);
      const newresponse = response;
      const accessToken = localStorage.setItem("token", response.token);
      const idToken = localStorage.setItem(
        "userinfo",
        JSON.stringify(response.data)
      );

      setFormData("");

      if (formData.email == "" || formData.password == "") {
        setValidationErrors(newresponse.errors);
      }

      if (newresponse.status == true) {
        // window.alert(newresponse.message);
        Swal.fire("Login successfully !");
        nav("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body  ">
                <h2 className="text-center mt-5">Log In Now</h2>

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
                      placeholder="Email or Phone Number"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                  <div className="mt-2">
                    {validationErrors.email && (
                      <div
                        className="text-red"
                        style={{
                          color: "red",
                        }}>
                        {validationErrors.email}
                      </div>
                    )}
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
                      name="password"
                      onChange={handleChange}
                      value={formData.password}
                    />
                  </div>
                  <div className="mt-2">
                    {validationErrors.password && (
                      <div
                        className="text-red"
                        style={{
                          color: "red",
                        }}>
                        {validationErrors.password}
                      </div>
                    )}
                  </div>
                </div>

                <Link to="/forgetpassword" className="link-tag">
                  {" "}
                  <span className="ms-4 sign-inforgot text-center">
                    FORGOT PASSWORD?
                  </span>
                </Link>
                <div className=" ms-5 login-signinbtn">
                  <button type="submit" className="btn signin-btn  w-50 mt-3 ">
                    Sign In
                  </button>
                </div>

                <h5 className="mt-3">Or</h5>

                <div className="d-flex justify-content-center signin-icon ms-5">
                  <span className=" mt-3">
                    <FcGoogle size={30} />
                  </span>
                  <span className=" mt-3">
                    <FaApple size={30} />
                  </span>
                  <span className="mt-3">
                    <FaFacebook size={30} />
                  </span>
                </div>
                <div className="signin-icon-text mt-3 link-tag">
                  <p>Don't have an account?</p>
                  <Link to="/register" className="link-tag">
                    <span>Sign up</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
