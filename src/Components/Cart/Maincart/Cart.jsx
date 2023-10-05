import React, { useState, useEffect } from "react";
import "./Cart.css";
import apple from "../../images/apple.jpg";
import chocolate from "../../images/chocalates.jpg";
import dettol from "../../images/dettol.jfif";
import { HiMinusCircle } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { BiSolidOffer } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Cart = () => {
  const [count, setCount] = useState(1);
  const [quantity, setQuantity] = useState([]);

 

  const cart = [
    {
      id: 1,
      name: "apple",
      des: "Fruits",
      image: require("../../images/apple.jpg"),
      quantity: 1,
      qun: [{ name: "1KG" }, { name: "2KG" }, { name: "3KG" }],
      price: "$12",
    },
    {
      id: 1,
      name: "Dairy Milk",
      des: "Chocolate",
      image: require("../../images/chocalates.jpg"),
      qun: [{ name: "7KG" }, { name: "5KG" }, { name: "8KG" }],
      price: "$18",
      quantity: 1,
    },
    {
      id: 1,
      name: "Dettol",
      des: "Household product ",
      image: require("../../images/dettol.jfif"),
      qun: [{ name: "1KG" }, { name: "2KG" }, { name: "3KG" }],
      price: "$15",
      quantity: "1",
    },
  ];

  useEffect(() => {
    setvalue();
  }, []);

  const setvalue = () => {
    var list = [];
    for (let i = 0; i < cart.length; i++) {
      var data = 1;
      list.push(data);
    }
    setQuantity(list);
  };
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section class="h-100 h-custom" style={{ backgroundColor: "#d2c9ff;" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12">
              <div
                class="card card-registration card-registration-2"
                style={{ borderRadius: "15px;" }}>
                <div class="card-body p-0">
                  <div class="row g-0">
                    <div class="col-lg-8">
                      <div class="p-5">
                        <div class="d-flex justify-content-between align-items-center mb-5">
                          <h1
                            class=""
                            style={{
                              color: "#23aa49",
                              fontSize: "24px",
                              fontWeight: "600",
                            }}>
                            Shopping Cart
                          </h1>
                          <h6 class="mb-0 text-muted">3 items</h6>
                        </div>
                        <hr class="my-4" />

                        {cart.map((item, i) => (
                          <div>
                            <div class="row mb-4 d-flex justify-content-between align-items-center">
                              <div class="col-md-2 col-lg-2 col-xl-2">
                                <img src={item.image} width={70} height={70} />
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-3">
                                <h6 class="text-muted">{item.name}</h6>
                                <h6 class="text-black mb-0">{item.des}</h6>
                                <div>
                                  <select
                                    class="form-select form-select-border-radius  mt-3"
                                    aria-label=".form-select-lg example form-dropdown ">
                                    {item.qun.map((obj, index) => (
                                      <option
                                        key={index}
                                        value={obj.name}
                                        className="dropdown-product">
                                        {obj.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-2 d-flex ms-5">
                                <div className=" cart-icons">
                                  <span
                                    className="subtraction-icon"
                                    onClick={() => {
                                      if(quantity[i] != 1 )
                                      {var data = [...quantity];
                                      data[i] = data[i] - 1;
                                      setQuantity(data)}
                                    }}>
                                    <HiMinusCircle
                                      size={40}
                                      color={quantity[i] != 1 ?"#23AA49": '#DADADA'}
                                    />
                                  </span>
                                  <p className="number-cart">{quantity[i]}</p>
                                  <span
                                    className="addition-icon"
                                    onClick={() => {
                                      var data = [...quantity];
                                      data[i] = data[i] + 1;
                                      setQuantity(data);
                                    }}>
                                    <IoMdAddCircle size={40} />
                                  </span>
                                </div>
                              </div>
                              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 class="mb-0">{item.price}</h6>
                              </div>
                              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" class="text-muted">
                               
                                  <i  class="fas fa-times"></i>
                           
                                </a>
                              </div>
                            </div>
                            <hr class="my-4" />
                          </div>
                        ))}

                        {/* <div class="row mb-4 d-flex justify-content-between align-items-center">
                          <div class="col-md-2 col-lg-2 col-xl-2">
                            <img src={chocolate} width={70} height={70} />
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-3">
                            <h6 class="text-muted">Dairy Milk</h6>
                            <h6 class="text-black mb-0">Chocolates</h6>
                            <div>
                              <select
                                class="form-select form-select-border-radius  mt-3"
                                aria-label=".form-select-lg example form-dropdown ">
                                <option
                                  value="1"
                                  className="dropdown-product  ">
                                  1 KG
                                </option>
                                <option value="2" className="">
                                  2 KG
                                </option>
                                <option value="3" className="">
                                  3 KG
                                </option>
                              </select>
                            </div>
                          </div>

                          <div class="col-md-3 col-lg-3 col-xl-2 d-flex ms-5">
                            <div className=" cart-icons">
                              <span
                                className="subtraction-icon"
                                onClick={decrement}>
                                <HiMinusCircle size={40} />
                              </span>
                              <p className="number-cart"> {count}</p>
                              <span
                                className="addition-icon"
                                onClick={increment}>
                                <IoMdAddCircle size={40} />
                              </span>
                            </div>
                          </div>
                          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 class="mb-0">€ 44.00</h6>
                          </div>
                          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" class="text-muted">
                              <i class="fas fa-times"></i>
                            </a>
                          </div>
                        </div> */}

                        {/* <div class="row mb-4 d-flex justify-content-between align-items-center">
                          <div class="col-md-2 col-lg-2 col-xl-2">
                            <img src={dettol} width={70} height={70} />
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-3">
                            <h6 class="text-muted">Dettol</h6>
                            <h6 class="text-black mb-0">Household Product</h6>
                            <div>
                              <select
                                class="form-select form-select-border-radius  mt-3"
                                aria-label=".form-select-lg example form-dropdown ">
                                <option
                                  value="1"
                                  className="dropdown-product  ">
                                  1 KG
                                </option>
                                <option value="2" className="">
                                  2 KG
                                </option>
                                <option value="3" className="">
                                  3 KG
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-2 d-flex ms-5">
                            <div className=" cart-icons">
                              <span
                                className="subtraction-icon"
                                onClick={decrement}>
                                <HiMinusCircle size={40} />
                              </span>
                              <p className="number-cart"> {count}</p>
                              <span
                                className="addition-icon"
                                onClick={increment}>
                                <IoMdAddCircle size={40} />
                              </span>
                            </div>
                          </div>
                          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 class="mb-0">€ 44.00</h6>
                          </div>
                          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" class="text-muted">
                              <i class="fas fa-times"></i>
                            </a>
                          </div>
                        </div> */}

                        <div class="pt-5">
                          <h6 class="mb-0 back-shop">
                            <a href="#!" class="text-body">
                              <Link to="/">
                                <p>
                                  {" "}
                                  <HiOutlineArrowCircleLeft /> &nbsp;Back to
                                  shop
                                </p>
                              </Link>
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 bg-grey">
                      <div class="p-5">
                        <h3
                          class="fw-bold mb-5 mt-2 pt-1 "
                          style={{
                            color: "#23aa49",
                          }}>
                          Summary
                        </h3>
                        <hr class="my-4" />

                        <div class="d-flex justify-content-between mb-4">
                          <h5
                            class="text-uppercase"
                            style={{
                              color: "#838383",
                            }}>
                            items 3
                          </h5>
                          <h5>€ 132.00</h5>
                        </div>

                        <h5 class=" promo-code mb-3 ">
                          {" "}
                          <BiSolidOffer onClick={handleShow} /> &nbsp;Promo
                          code?
                        </h5>

                        <div class="mb-5">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              class="form-control form-control-lg"
                            />
                            <label class="form-label" for="form3Examplea2">
                              <p
                                style={{
                                  color: "#838383",
                                }}>
                                Enter your code
                              </p>
                            </label>
                                <br />
                            <button className="addcart-btn signin-btn w-75">
                              Apply
                            </button>
                          </div>
                        </div>

                        <hr class="my-4" />

                        <div class="card p-4">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 ">
                              Sub Total
                              <strong>$53.98</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                              Discount
                              <strong> -255</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0 pb-0 ">
                              Tax
                              <strong> +55</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 ">
                              <div>
                                <strong
                                  style={{
                                    color: "#1E9DC2",
                                  }}>
                                  Payable amount
                                </strong>
                              </div>
                              <span>
                                <strong>$53.98</strong>
                              </span>
                            </li>
                          </ul>
                        </div>

                        <Link to="/address">
                          <button className="addcart-btn signin-btn w-75 mt-3">
                            CHECKOUT
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Offers</Modal.Title>
        </Modal.Header>
        <Link to="/cartoffers" className="link-tag">
          <Modal.Body>Click Here, to grab Latest Offers</Modal.Body>
        </Link>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Back to Page
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
