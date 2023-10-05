import React, { useState } from "react";
import "./ItemsDescription.css";
import Navbar from "../Navbar/Navbar";
import apple from "../images/apple.jpg";
import background from "../images/profile.jpg";
import { MdBookmarkBorder } from "react-icons/md";
import { HiMinusCircle } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import organic from "../images/organic.png.png";
import rating from "../images/rating.png.png";
import calender from "../images/calender.png.png";
import calories from "../images/calories.png.png";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
const ItemsDescription = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <Navbar />

      <div class="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="img-thumbnail"
              src={apple}
              width={500}
              height={500}
            />
            <span className="d-flex bottom-right">
              <MdBookmarkBorder size={30} color="black" />
            </span>
          </div>
          <div className="col-lg-6">
            <div className="item-section">
              <span className="item-name">Apple</span>

              <div className="item-selection">
                <div className="row mt-5">
                  <div className="col-lg-5">
                    <div className="card">
                      <div className="card-body-color">
                        <div className="row">
                          <div className="col-lg-5">
                            <img
                              src={organic}
                              style={{
                                width: "70px",
                                height: "70px",
                              }}
                            />
                          </div>
                          <div className="col-lg-4">
                            <label className="green-color">100%</label>
                            <small className="grey-color">Organic</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="card">
                      <div className="card-body-color">
                        <div className="row">
                          <div className="col-lg-5">
                            <img
                              src={calender}
                              style={{
                                width: "70px",
                                height: "70px",
                              }}
                            />
                          </div>
                          <div className="col-lg-5">
                            <label className="green-color">1 Year</label>
                            <small className="grey-color ">Expiration</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-lg-5">
                    <div className="card">
                      <div className="card-body-color">
                        <div className="row">
                          <div className="col-lg-5">
                            <img
                              src={rating}
                              style={{
                                width: "70px",
                                height: "70px",
                              }}
                            />
                          </div>
                          <div className="col-lg-4">
                            <label className="green-color">4.5</label>
                            <small className="grey-color">Reviews</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="card">
                      <div className="card-body-color">
                        <div className="row">
                          <div className="col-lg-5">
                            <img
                              src={calories}
                              style={{
                                width: "70px",
                                height: "70px",
                              }}
                            />
                          </div>
                          <div className="col-lg-5">
                            <label className="green-color">80 kcal</label>
                            <small className="grey-color ">100 Gram</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item-icons mt-3">
                  <span className="subtraction-icon" onClick={decrement}>
                    <HiMinusCircle size={40} />
                  </span>
                  <p className="number"> {count}</p>
                  <span className="addition-icon" onClick={increment}>
                    <IoMdAddCircle size={40} />
                  </span>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <select
                      class="form-select form-select-border-radius select-content"
                      aria-label=".form-select-lg example form-dropdown ">
                      <option
                        value="1"
                        className="dropdown-product  select-content">
                        1 KG
                      </option>
                      <option value="2" className="select-content">
                        2 KG
                      </option>
                      <option value="3" className="select-content">
                        3 KG
                      </option>
                    </select>
                  </div>
                  <div className="col-lg-2">
                    <label className="select-content ">$12</label>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-8">
                   <Link to='/addtocart'><button className="addcart-btn signin-btn w-75">Add to cart</button></Link> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-3 item-description">
            <p>
              Apple is a flowering plant whose rhyzome, red paper,os widely used
              as a salad and its used to mix vegitable for taste
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsDescription;
