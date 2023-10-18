import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { apimethod, Addcart } from "../../utils/api";
import { useLocation } from "react-router-dom";

const ItemsDescription = () => {
  const { state } = useLocation();
  

  const itemWeightString = JSON.parse(state.item_weight);

  const [count, setCount] = useState(1);

  const [validationErrors, setValidationErrors] = useState({});
  const [getprofile, setGetprofile] = useState([]);
  const [changedata, setchangedata] = useState(0);

  const [selectedValue, setSelectedValue] = useState('');

  // Event handler to update the selected value
  
  const increment = () => {
    setCount(count + 1);
  };

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setSelectedValue(event.target.value);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 

  const [formData, setFormData] = useState({
    item_id: state.item_id,
    item_quantity: count,
    item_name: state.item_name,
    item_price: state.item_price,
    item_description: state.item_description,
    dis_item_price: state.dis_item_price,
    item_expiry_date: state.item_expiry_date,
    item_weight: selectedValue,
   
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await apimethod("Addcart", formData);
      const newresponse = response;

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

  // useEffect(() =>{
  //     console.log(count);
  // },[])

  return (
    <>
      <Navbar />
      <div class="container mt-5">
        <div className="row">
          <div
            className="col-lg-6 p-2"
            style={{
              marginTop: "65px",
            }}>
            <img
              className="img-thumbnail description-img"
              value="item_image"
              src={
                "https://gomart.thecompletesoftech.in/uploads/" +
                state.item_image
              }
              width={500}
              height={500}
            />

            <div className="col-lg-10  item-description ">
              <p className="  ms-5 mt-2">{state.item_description}</p>
            </div>
            <div className="d-flex justify-content-center">
                <button className="addcart-btn signin-btn w-50 " onClick={handleSubmit}>
                  Add to cart
                </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="item-section">
              <span className="item-name" value="item_name">
                {state.item_name}
              </span>
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
                            <label className="green-color">
                              {state.item_expiry_date}
                            </label>
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
                            <label className="green-color">
                              {state.rating}
                            </label>
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
                            <small className="grey-color ">100Gram</small>
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
                   value={selectedValue} onChange={handleSelectChange}
                      className="form-select form-select-border-radius select-content"
                      aria-label=".form-select-lg example form-dropdown ">
                      {itemWeightString.map((weight, index) => (
                        <option
                          key={index}
                          value={weight}
                          className="dropdown-product  select-content">
                          {weight}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-lg-2">
                    <label className="select-content ">
                      ${state.item_price}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsDescription;
