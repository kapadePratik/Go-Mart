import React, { useState } from "react";
import "./Regitration.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link ,useNavigate} from "react-router-dom";
import { userregister } from "../../utils/api";

const Regitration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    image: "",
    login_type: 1,
    fcm_token: "",
  });

  // console.log(formData);

  const [validationErrors, setValidationErrors] = useState({});
    const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userregister('userRegister',formData);
    const newresponse = response;
    console.log(newresponse);
    if (newresponse.status == false) {
      setValidationErrors(newresponse.errors);
    }
    if (newresponse.status == true) {
      setValidationErrors('')
      window.alert(newresponse.message);
      nav("/")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body  ">
                <h2 className="text-center mt-5">Register Now</h2>

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
                      name="name"
                      onChange={handleChange}
                      value={formData.name}
                      className="form-control"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="mt-2">
                    {validationErrors.name && (
                      <div
                        className="text-red"
                        style={{
                          color: "red",
                        }}>
                        {validationErrors.name}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3 mt-3">
                  <div className="input-group signin-input mt-4   w-75 mx-auto">
                    <span className="input-group-text ">
                      <span>
                        <IoMdContact size={30} />
                      </span>
                    </span>
                    <input
                      id="placeholder"
                      type="file"
                      name="image"
                      onChange={handleChange}
                      value={formData.image}
                      className="form-control"
                    />
                  </div>
                  <div className="mt-2">
                    {validationErrors.image && (
                      <div
                        className="text-red"
                        style={{
                          color: "red",
                        }}>
                        {validationErrors.image}
                      </div>
                    )}
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
                    <input
                      id="email"
                      type="text"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      className="form-control"
                      placeholder="Email Address"
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
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="mt-2">
                    {validationErrors.phone && (
                      <div
                        className="text-red"
                        style={{
                          color: "red",
                        }}>
                        {validationErrors.phone}
                      </div>
                    )}
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
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={formData.password}
                      className="form-control"
                      id="password"
                      placeholder="Create Password"
                    />
                  </div>
                  <div className="">
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

                <div className=" ">
                  <Link to="/forgetpassword" className="link-tag">
                    <span className="forgot-password">FORGOT PASSWORD?</span>
                  </Link>
                </div>

                <div className="mb-3 ms-5 registerbtn">
                  <button type="submit" className="btn signin-btn  w-50 mt-3 ">
                    Register Now
                  </button>
                </div>
                <h5>Or</h5>
                <div className="d-flex justify-content-center register-icon ms-5">
                  <span className="mt-3">
                    <FcGoogle size={30} />
                  </span>
                  <span className="mt-3">
                    <FaApple size={30} />
                  </span>
                  <span className="mt-3">
                    <FaFacebook size={30} />
                  </span>
                </div>
                <div className="signin-icon-text mt-3 link-tag">
                  <p>I have an account?</p>
                  <Link to="/login" className="link-tag">
                    <span>Sign In</span>
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

export default Regitration;
