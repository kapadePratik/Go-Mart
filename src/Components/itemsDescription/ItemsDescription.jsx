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
import { apimethod, Addcart } from "../../utils/api";
import { useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ItemsDescription = (prop) => {
  const [count, setCount] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const state = useLocation();
  const itemdata = state.state;

  // console.log(JSON.stringify(itemdata.item_id))

  var itemWeightString = JSON.parse(itemdata.item_weight);

  const [weight, setweight] = useState("");

  const selecthandlechange = (e) => {
    setweight(e.target.value);
    console.log(weight);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [formData, setFormData] = useState({
    item_id: itemdata.item_id,
    item_quantity: count,
    item_name: itemdata.item_name,
    item_price: itemdata.item_price,
    item_description: itemdata.item_description,
    dis_item_price: itemdata.dis_item_price,
    item_expiry_date: itemdata.item_expiry_date,
    item_weight: weight.length,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (token == null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to LOGIN first",
        customClass: {
          container: "custom-swal-button",
        },
      });
    } else {
      const response = await apimethod("Addcart", formData);
      const newresponse = response;
      console.log(newresponse);

      if (newresponse.status == true) {
        Swal.fire({
          title: "Added in cart successfully!",
          customClass: {
            container: "custom-swal-button",
            confirmButton: "custom-swal-confirm-button",
          },
        });
      }
    }
  };

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
                itemdata.item_image
              }
              width={500}
              height={500}
            />

            <div className="col-lg-10  item-description ">
              <p className="  ms-5 mt-2">{itemdata.item_description}</p>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="addcart-btn signin-btn w-50 "
                onClick={handleSubmit}>
                Add to cart
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="item-section">
              <span className="item-name" value="item_name">
                {itemdata.item_name}
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
                              {itemdata.item_expiry_date}
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
                              {/* {rating} */}
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
                      value={weight}
                      onChange={(e) => selecthandlechange(e)}
                      className="form-select form-select-border-radius select-content"
                      aria-label=".form-select-lg example form-dropdown ">
                      {itemWeightString.map((obj, index) => (
                        <option
                          key={index}
                          className="dropdown-product select-content">
                          {obj}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-lg-2">
                    <label className="select-content ">
                      ${itemdata.item_price}
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
