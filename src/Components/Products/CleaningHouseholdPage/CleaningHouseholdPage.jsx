import React from 'react';
import './CleaningHouseholdPage.css';
import {BsHeart} from 'react-icons/bs';
import cleaningproducts from '../../images/cleaning-products.jpg';
import cleaningequipment from '../../images/cleaning-equipment.jpg';
import dettol from '../../images/dettol.jfif';
import ovencleaner from '../../images/oven-cleaner.webp';
import roomcleaner from '../../images/room-cleaner.jpg';
import washingpowder from '../../images/washingpowder.jfif';
import Navbar from '../../Navbar/Navbar';

const CleaningHouseholdPage = () => {
  return (

  <>
  <Navbar />
   <div className="container ">
    <div className="category-header  d-flex flex-row mt-5">
      <h3>Cleasing & Household</h3>{" "}
    </div>
    <div
      class="row row-cols-1 row-cols-lg-6 g-2 g-lg-3 mt-2
  ">
      <div class="col">
        <div class="card-body card">
          <div className="card-img">
            <img src={washingpowder} height={100} width={100} alt="" />
          </div>
          <span>Washing Powder, 1kg</span>
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
            <img src={cleaningproducts} height={100} width={100} alt="" />
          </div>
          <span>Cleaning Products, 1kg</span>
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
            <img src={cleaningequipment} height={100} width={100} alt="" />
          </div>
          <span>House Equipment, 1kg</span>
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
            <img src={dettol} height={100} width={100} alt="" />
          </div>
          <span>Dettol, 1kg</span>
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
            <img src={ovencleaner} height={100} width={100} alt="" />
          </div>
          <span>Oven Cleaner, 1kg</span>
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
            <img src={roomcleaner} height={100} width={100} alt="" />
          </div>
          <span>Room Cleaner, 1kg</span>
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
    </div>
  </div>
  </>
  )
}

export default CleaningHouseholdPage
