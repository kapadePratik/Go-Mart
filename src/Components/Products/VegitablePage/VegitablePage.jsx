import React from 'react';
import './VegitablePage.css';
import {BsHeart} from 'react-icons/bs';
 import corn from '../../images/corn.jpeg';
import redchilli from '../../images/red-chilli.jpeg';
import tomato from '../../images/tomato.jpg';
import onion from '../../images/onion.jpg';
import greenbean from '../../images/green-beans.webp';
import carot from '../../images/carot.jpeg';
import Navbar from '../../Navbar/Navbar';

const VegitablePage = () => {
  return (
  <>
    <Navbar />
    <div className="category">
    <div className="container ">
      <div className="category-header  d-flex flex-row mt-5">
        <h3>Vegitables</h3>{" "}
      </div>
      <div
        class="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 mt-2
    ">
        <div class="col">
          <div class="card-body card">
            <div className="card-img">
              <img src={carot} height={100} width={100} alt="" />
            </div>
            <span>Carot, 1kg</span>
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
            <div class="d-flex justify-content-evenly">
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
              <img src={onion} height={100} width={100} alt="" />
            </div>
            <span>Onion, 1kg</span>
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
            <div class="d-flex justify-content-evenly">
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
              <img src={greenbean} height={100} width={100} alt="" />
            </div>
            <span>Green Beans, 1kg</span>
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
            <div class="d-flex justify-content-evenly">
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
              <img src={tomato} height={100} width={100} alt="" />
            </div>
            <span>Tomato, 1kg</span>
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
            <div class="d-flex justify-content-evenly">
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
              <img src={redchilli} height={100} width={100} alt="" />
            </div>
            <span>Red Chillis, 1kg</span>
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
            <div class="d-flex justify-content-evenly">
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
              <img src={corn} height={100} width={100} alt="" />
            </div>
            <span>Corn, 1kg</span>
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
            <div class="d-flex justify-content-evenly">
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
  )
}

export default VegitablePage
