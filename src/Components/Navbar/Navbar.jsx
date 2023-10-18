import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
// import { IoBasket } from "react-icons/io";
import { MdLocationOn, MdOutlineLocationOn } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { IoIosContact, IoMdArrowDropdownCircle } from "react-icons/io";
import { VscLocation } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import logo from "../images/gomartlogo.png";
import Fade from "react-reveal/Fade";
import apple from "../images/apple.jpg";
import chocolate from "../images/chocalates.jpg";
import dettol from "../images/dettol.jfif";
import { HiMinusCircle } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { BiSolidOffer } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Navbar = () => {
  var btnst = true;
  const showsidebar = () => {
    if (btnst == true) {
      document.querySelector(".toggle i").classList.add("toggle");
      document.getElementById("sidebar").classList.add("sidebarshow");
      btnst = false;
    } else {
      document.querySelector(".toggle i").classList.remove("toggle");
      document.getElementById("sidebar").classList.remove("sidebarshow");
      btnst = true;
    }
  };

  const [count, setCount] = useState(1);
  const [quantity, setQuantity] = useState([]);

  const cart = [
    {
      id: 1,
      name: "apple",
      des: "Fruits",
      image: require("../images/apple.jpg"),
      quantity: 1,
      qun: [{ name: "1KG" }, { name: "2KG" }, { name: "3KG" }],
      price: "$12",
    },
    {
      id: 1,
      name: "Dairy Milk",
      des: "Chocolate",
      image: require("../images/chocalates.jpg"),
      qun: [{ name: "7KG" }, { name: "5KG" }, { name: "8KG" }],
      price: "$18",
      quantity: 1,
    },
    {
      id: 1,
      name: "Dettol",
      des: "Household product ",
      image: require("../images/dettol.jfif"),
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

  // // navbar scrolling //
  // const [lastScrollY, setLastScrollY] = useState(0);
  // const [display, setDisplay] = useState("top");
  // const [mobileMenu, setMobileMenu] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", contolNavbar);
  //   return () => {
  //     window.removeEventListener("scroll", contolNavbar);
  //   };
  // }, [lastScrollY]);

  // const contolNavbar = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY > 200) {
  //     if (window.scrollY > lastScrollY && !mobileMenu) {
  //       setDisplay("hide");
  //     } else {
  //       setDisplay("display");
  //     }

  //     if (window.scrollY > lastScrollY) {
  //       setDisplay("hide");
  //     } else {
  //       setDisplay("display");
  //     }
  //   } else {
  //     setDisplay("top");
  //   }
  //   setLastScrollY(window.scrollY);
  // };

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-body d-flex justify-content-around  ">
      <div class="container">
        <Link to="/">
          {" "}
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              style={{
                width: "100%",
                height: "70px",
              }}
            />
          </a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 navbar-mobileview">
            <li class="nav-item navbar-anchor px-5">
              <a class="nav-link " href="#">
                Home
              </a>
            </li>
            <li class="nav-item navbar-anchor px-5">
              <a class="nav-link" href="#">
                About
              </a>
            </li>

            <li class="nav-item navbar-anchor px-5">
              <a class="nav-link">Services</a>
            </li>

            <li class="nav-item navbar-anchor px-5">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="input-container">
            <VscLocation size={20} className="icon" />
            <form class="d-flex mx-auto">
              <input
                class="form-control me-2 input-field"
                type="search"
                placeholder="Enter Location"
                aria-label="Search"
              />
            </form>
          </div>

          <ul
            class="navbar-nav d-flex flex-row
           me-1 ">
            <li
              class="nav-item me-3 me-lg-0 
             d-flex flex-row ">
              <a class="nav-link text-black " href="#">
                {/* <Link
                  to="/addtocart"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}>
                  <i class="fas fa-shopping-cart mx-4"></i>
                </Link> */}
                <Link
                  to="/favorite"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}>
                  <AiOutlineHeart class=" mx-4" size={27} />
                </Link>
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="fas fa-user mx-1 text-black profile-icon"></i>
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Option A
                </a>
                <a class="dropdown-item" href="#">
                  Option B
                </a>
                <a class="dropdown-item" href="#">
                  Option C
                </a>
                <a class="dropdown-item" href="#">
                  Option D
                </a>
              </div>
            </li>

            <header class="header">
              <div class="header_in">
                <button type="button" class="toggle" id="toggle" onClick={()=> showsidebar()} >
                  {/* <span></span> */}
                  <i class="fas fa-shopping-cart mx-4"></i>
                </button>
              </div>
            </header>
            <div class="sidebar mobile-sidebar" id="sidebar">
              <section class="" style={{ backgroundColor: "#d2c9ff;" }}>
                <div className="container">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div class="d-flex justify-content-between align-items-center">
                      <span
                        class="mt-3"
                        style={{
                          color: "#23aa49",
                          fontSize: "20px",
                          fontWeight: "600",
                        }}>
                        Shopping Card
                      </span>
                      <span class="mb-0 text-muted">3 items</span>
                    </div>
                    <hr class="my-2" />

                    {cart.map((item, index) => (
                      <>
                        <div className="card mt-2" key={index}>
                          <div className="d-flex justify-content-between align-items-center">
                            <img src={item.image} width={75} height={75} />
                            <div class="col-md-3 col-lg-3 col-xl-3">
                              <h6 class="text-muted">{item.name}</h6>
                              <h6 class="text-black mb-0">{item.des}</h6>
                            </div>
                            <select
                              class="form-select form-select-border-radius mt-3 w-25"
                              aria-label="form-select-lg example form-dropdown">
                              <option
                                value={item.name}
                                key={index}
                                className="dropdown-product">
                                {item.name}
                              </option>
                            </select>

                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 class="mb-0">{item.price}</h6>
                            </div>
                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                              <a href="#!" class="text-muted">
                                <i class="fas fa-times"></i>
                              </a>
                            </div>
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-2 d-flex ms-5">
                            <div className=" cart-icons d-flex align-item-center mt-3 ms-5 ">
                              <span
                                className="subtraction-icon "
                                onClick={() => {
                                  if (quantity[index] != 1) {
                                    var data = [...quantity];
                                    data[index] = data[index] - 1;
                                    setQuantity(data);
                                  }
                                }}>
                                <HiMinusCircle
                                  size={30}
                                  color={
                                    quantity[index] != 1 ? "#23AA49" : "#DADADA"
                                  }
                                />
                              </span>
                              <p className="number-cart">{quantity[index]}</p>
                              <span
                                className="addition-icon"
                                onClick={() => {
                                  var data = [...quantity];
                                  data[index] = data[index] + 1;
                                  setQuantity(data);
                                }}>
                                <IoMdAddCircle size={30} />
                              </span>
                            </div>
                          </div>
                        </div>
                        <hr class="my-4" />
                      </>
                    ))}
                  </div>

                  <div class="col-12">
                    <div className="">
                      <h3
                        class="fw-bold ms-3 mb-5 p-0"
                        style={{
                          color: "#23aa49",
                        }}>
                        Summary
                      </h3>
                    </div>
                  </div>

                  <div class="form-outline ">
                    <div className="d-flex justify-content-around">
                      <h5 class=" promo-code mr-5 ">
                        {" "}
                        <BiSolidOffer onClick={()=>handleShow} /> &nbsp;Promo code?
                      </h5>
                      <div className="promocode-input">
                        <input
                          type="text"
                          id="form3Examplea2"
                          class="form-control w-100  mr-5"
                          placeholder="Enter your code Here"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                      <button className="addcart-btn signin-btn w-25 fs-8 ">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div class="card p-4 mb-5">
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
                  <div className="d-flex justify-content-center ms-5">
                    <Link to="/address">
                      <button className="addcart-btn signin-btn w-100 mt-3 ">
                        CHECKOUT
                      </button>
                    </Link>
                  </div>
                  <br />
                  <br />
                </div>
              </section>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
