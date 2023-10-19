import React, { useState, useEffect } from "react";
import "./ChangePassword.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { apimethod, userChangepassword } from "../../utils/api";

const ChangePassword = () => {
  const [validationErrors, setValidationErrors] = useState({});

  const [formData, setFormData] = useState({
    new_password: "",
    c_password: "",
  });
  // console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apimethod("userChangepassword", formData);
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
    <div>
      <div className="container">
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

                <div className=" ">
                  <div className="input-group signin-input mt-3 w-75 mx-auto">
                    <span className="input-group-text">
                      <span>
                        <RiLockPasswordLine size={30} />
                      </span>
                    </span>
                    <input
                      value={formData.new_password}
                      name="new_password"
                      id="placeholder"
                      onChange={handleChange}
                      type="password"
                      className="form-control"
                      placeholder="Enter New Password"
                    />
                  </div>

                  <div className="mt-2">
                    {validationErrors.new_password && (
                      <div
                        className="text-red"
                        style={{
                          color: "red",
                        }}>
                        {validationErrors.new_password}
                      </div>
                    )}
                  </div>

                  <div className="input-group signin-input mt-3 w-75 mx-auto">
                    <span className="input-group-text">
                      <span>
                        <RiLockPasswordLine size={30} />
                      </span>
                    </span>
                    <input
                      value={formData.c_password}
                      name="c_password"
                      onChange={handleChange}
                      id="placeholder"
                      type="password"
                      className="form-control"
                      placeholder="Enter Confirm Password"
                    />
                  </div>

                  <div className="mt-2">
                    {validationErrors.c_password && (
                      <div
                        className="text-red"
                        style={{
                          color: "red",
                        }}>
                        {validationErrors.c_password}
                      </div>
                    )}
                  </div>
                  <div className="mb-3 done-btn mobileview-btn ">
                    <button type="submit" className="changepass-btn w-50 mt-3"
                    onClick={handleSubmit}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
