import React, { useState, useRef } from "react";
import "./FruitsPage.css";
import { Link } from "react-router-dom";
import apple from "../../images/apple.jpg";
import banana from "../../images/banana.jpg";
import blackberry from "../../images/blackberry.jpg";
import kiwi from "../../images/kiwi.jpg";
import orange from "../../images/orange.jpg";
import stwaberry from "../../images/stwaberry.jpg";
import { BsHeart } from "react-icons/bs";
import Navbar from "../../Navbar/Navbar";
const FruitsPage = () => {
  return (
    <>
      <Navbar />
      <div className="category">
        <div className="container ">
          <div className="category-header  d-flex flex-row mt-5">
            <h3>Fruits</h3>{" "}
          </div>

          <div
            class="row row-cols-1 row-cols-lg-6 g-2 g-lg-3 mt-2
      ">
            <div class="col">
             <div class="card-body card">
                <div className="card-img">
                <Link to='/itemsdescription' className="link-tag-card"><img src={apple} height={100} width={100} alt="" /></Link>
                </div>
                <span>Apple, 1kg</span>
                <h5> &#8377; 120</h5>
                {/* dropdown */}

                <select
                  class="form-select form-select-border-radius"
                  aria-label=".form-select-sm example form-dropdown">
                  <option selected className="dropdown-content">
                    Select Quantity
                  </option>
                  <option value="1" className="dropdown-product">
                    1 KG
                  </option>
                  <option value="2">2 KG</option>
                  <option value="3">3 KG</option>
                </select>
                <div class="d-flex justify-content-center mt-2">
                  <button className="btn">Add to Cart</button>
                  <button className="btn">
                    <BsHeart />
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card-body card">
                <div className="card-img">
                  <img src={orange} height={100} width={100} alt="" />
                </div>
                <span>Orange, 1kg</span>
                <h5> &#8377; 120</h5>

                {/* drop[down] */}

                <select
                  class="form-select form-select-border-radius"
                  aria-label=".form-select-sm example form-dropdown">
                  <option selected className="dropdown-content">
                    Select Quantity
                  </option>
                  <option value="1" className="dropdown-product">
                    1 KG
                  </option>
                  <option value="2">2 KG</option>
                  <option value="3">3 KG</option>
                </select>
                <div class="d-flex justify-content-center  mt-2">
                  <button className="btn">Add to Cart</button>
                  <button className="btn">
                    <BsHeart />
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card-body card">
                <div className="card-img">
                  <img src={banana} height={100} width={100} alt="" />
                </div>
                <span>Banana, 1kg</span>
                <h5> &#8377; 120</h5>

                {/* dropdown */}

                <select
                  class="form-select form-select-border-radius"
                  aria-label=".form-select-sm example form-dropdown">
                  <option selected className="dropdown-content">
                    Select Quantity
                  </option>
                  <option value="1" className="dropdown-product">
                    1 KG
                  </option>
                  <option value="2">2 KG</option>
                  <option value="3">3 KG</option>
                </select>
                <div class="d-flex justify-content-center  mt-2">
                  <button className="btn">Add to Cart</button>
                  <button className="btn">
                    <BsHeart />
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card-body card">
                <div className="card-img">
                  <img src={stwaberry} height={100} width={100} alt="" />
                </div>
                <span>Stwaberry, 1kg</span>
                <h5> &#8377; 120</h5>

                {/* dropdown content */}

                <select
                  class="form-select form-select-border-radius"
                  aria-label=".form-select-sm example form-dropdown">
                  <option selected className="dropdown-content">
                    Select Quantity
                  </option>
                  <option value="1" className="dropdown-product">
                    1 KG
                  </option>
                  <option value="2">2 KG</option>
                  <option value="3">3 KG</option>
                </select>
                <div class="d-flex justify-content-center  mt-2">
                  <button className="btn">Add to Cart</button>
                  <button className="btn">
                    <BsHeart />
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card-body card">
                <div className="card-img">
                  <img src={blackberry} height={100} width={100} alt="" />
                </div>
                <span>Blackberry, 1kg</span>
                <h5> &#8377; 120</h5>

                {/* dropdown */}
                <select
                  class="form-select form-select-border-radius"
                  aria-label=".form-select-sm example form-dropdown">
                  <option selected className="dropdown-content">
                    Select Quantity
                  </option>
                  <option value="1" className="dropdown-product">
                    1 KG
                  </option>
                  <option value="2">2 KG</option>
                  <option value="3">3 KG</option>
                </select>
                <div class="d-flex justify-content-center  mt-2">
                  <button className="btn">Add to Cart</button>
                  <button className="btn">
                    <BsHeart />
                  </button>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card-body card">
                <div className="card-img">
                  <img src={kiwi} height={100} width={100} alt="" />
                </div>
                <span>Kiwi, 1kg</span>
                <h5> &#8377; 120</h5>

                {/*  dropdown*/}
                <select
                  class="form-select form-select-border-radius"
                  aria-label=".form-select-sm example form-dropdown">
                  <option selected className="dropdown-content">
                    Select Quantity
                  </option>
                  <option value="1" className="dropdown-product">
                    1 KG
                  </option>
                  <option value="2">2 KG</option>
                  <option value="3">3 KG</option>
                </select>
                <div class="d-flex justify-content-center  mt-2">
                  <button className="btn">Add to Cart</button>
                  <button className="btn">
                    <BsHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FruitsPage;
