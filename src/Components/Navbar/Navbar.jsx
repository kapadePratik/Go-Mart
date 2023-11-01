import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
// import { IoBasket } from "react-icons/io";
import { MdLocationOn, MdOutlineLocationOn } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { IoIosContact, IoMdArrowDropdownCircle } from "react-icons/io";
import { VscLocation } from "react-icons/vsc";
import {
  Link,
  useLocation,
  Redirect,
  Switch,
  useNavigate,
} from "react-router-dom";
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
import {
  apimethod,
  RemoveAddcart,
  getCartItem,
  apigetmethod,
  Login,
} from "../../utils/api";
import Swal from "sweetalert2";

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

  const [quantity, setQuantity] = useState([]);
  const [cart, setCart] = useState([]);
  const [change, setChange] = useState({});
  const [sidebar, setSidebar] = useState([]);
  const location = useLocation();
  const newdis = location.state;

  const logOut = () => {
    const accessToken = localStorage.removeItem("token");

    if (accessToken != null) {
      Swal.fire({
        title: "Do you want to logout?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Logout",
        denyButtonText: `Don't Logout`,
        customClass: {
          container: "custom-swal-container",
          confirmButton: "custom-swal-confirm-button",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        }
      });
    }
  };

  const setvalue = () => {
    var list = [];
    for (let i = 0; i < cart.length; i++) {
      var data = 1;
      list.push(data);
    }
    setQuantity(list);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // total of products
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSubmit = async (id) => {
    var body = {
      cart_id: id,
    };

    try {
      const response = await apimethod("RemoveAddcart", body);
      const newresponse = response;

      if (newresponse.status == true) {
        Swal.fire({
          icon: "success",
          title: "Item Removed",
          text: "The item has been deleted successfully.",
          customClass: {
            container: "custom-swal-container",
            confirmButton: "custom-swal-confirm-button",
          },
        });
      }

      setCart((cart) => cart.filter((record) => record.id !== id));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while deleting the record.",
      });
      console.log(error);
    }
  };

  const getcartrecord = async () => {
    await apimethod("getCartItem").then((result) => {
      if (result != false) {
        setCart(result.data);
      }
    });
  };

  useEffect(() => {
    getcartrecord();
    setvalue();
    fetchIdByItemId();
    const initialCart = {};
    cart.forEach((product) => {
      initialCart[product.id] = 1;
    });
    setChange(initialCart);
  }, []);

  const handleIncrement = (productId) => {
    setChange((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[productId] = (updatedCart[productId] || 1) + 1;
      return updatedCart;
    });
  };

  const handleDecrement = (productId) => {
    setChange((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId] > 1) {
        updatedCart[productId] -= 1;
      }
      return updatedCart;
    });
  };

  const calculateSubtotal = (productId) => {
    const quantity = change[productId] || 0;
    const product = cart.find((p) => p.id === productId);
    if (product) {
      return quantity * product.item_price;
    }
    return 0;
  };

  const calculateTotal = () => {
    return Object.keys(change).reduce((total, productId) => {
      const subtotal = calculateSubtotal(parseInt(productId, 10));
      return total + subtotal;
    }, 0);
  };

  // getcouponcode id
  const [dis, setDis] = useState(null);

  const fetchIdByItemId = async () => {
    var body = {
      coupan_id: newdis,
    };
    const response = await apimethod("getCouponcodeByid", body);
    if (response.status == true) {
      console.log(
        "svjhsdvvgdsyugusd =>" + JSON.stringify(response.data[0].discount)
      );
      setDis(response.data[0].discount);
    } else {
      console.error("Data Not Found");
    }
  };

  // apply coupon code

  // const handleChange = (e) => {
  // const { name, value } = e.target;
  // setFormData({ ...body, [name]: value });
  // };

  const [coupon_code, setcouon_code] = useState();
  const [validationErrors, setValidationErrors] = useState({});
  const [storediscountvalue, setdiscountvalue] = useState(0);

  const [updatedvalue, setUpdatedvalue] = useState({ items: [] });

  const nav = useNavigate();

  const handleApplycode = async (e) => {
    e.preventDefault();
    const body = {
      coupon_code: coupon_code,
    };

    const response = await apimethod("applycouponcode", body);
    const newresponse = response;
    setdiscountvalue(response.data.discount);
    setcouon_code("");
    // console.log(response.data.discount);

    if (newresponse.status == false) {
      setValidationErrors(newresponse.errors);
    }

    if (newresponse.status == true) {
      Swal.fire("Applied successfully !");
      nav("/");
    } else {
      Swal.fire("Not Applied !");
      nav("/");
    }
  };

  const updateQuantityandprice = async (Id, newQuantity, item_id) => {
    var body = {
      id: Id,
      item_quantity: newQuantity,
      item_id: item_id,
    };

    const response = await apimethod("updateItemQuantity", body);
    const newresponse = response;
    if (newresponse.status == true) {
      console.log(newresponse.message);
    } else {
      console.log(newresponse);
    }

  };

  const updaterecord = async (e) => {
    e.preventDefault();
    console.log(updatedvalue);
  };

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
          class="navbar-toggler togglebtn-mobilemedia"
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
              <a class="nav-link  " href="#">
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

            {/* Dropdown */}

            {localStorage.getItem("token") ? (
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
                  <Link to="/userprofile" class="dropdown-item dropdown-ltr">
                    PROFILE
                  </Link>
                  <Link to="/orderlist" class="dropdown-item  dropdown-ltr">
                    Order List
                  </Link>
                  <Link to="/favorite" class="dropdown-item  dropdown-ltr">
                    Favourite List
                  </Link>
                  <Link class="dropdown-item  dropdown-ltr" onClick={logOut}>
                    Logout
                  </Link>
                </div>
              </li>
            ) : (
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
                  <Link to="/login" class="dropdown-item  dropdown-ltr">
                    LOG IN
                  </Link>
                  <Link class="dropdown-item  dropdown-ltr" to="/register">
                    SIGN IN
                  </Link>
                </div>
              </li>
            )}

            <header class="header">
              <div class="header_in">
                <button
                  type="button"
                  class="toggle"
                  id="toggle"
                  onClick={() => showsidebar()}>
                  {/* <span></span> */}
                  <i class="fas fa-shopping-cart mx-4"></i>
                </button>
              </div>
            </header>

            {/* SIDEBAR */}

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
                      <span class="mb-0 text-muted mt-3">
                        {cart.length === 0 ? (
                          <p className="data-notfoundsidebar">
                            No data found <br />
                            Please Add item to Favorite
                          </p>
                        ) : (
                          <i
                            class="fa-solid fa-xmark"
                            style={{
                              fontSize: "23px",
                              cursor: "pointer",
                            }}
                            className="cross-mark"></i>
                        )}
                      </span>
                    </div>
                    <hr class="my-2" />

                    {cart.map((item, index) => (
                      <>
                        <div className="card mt-2" key={index}>
                          <div className="d-flex justify-content-between align-items-center">
                            <img
                              src={
                                "https://gomart.thecompletesoftech.in/uploads/" +
                                item.item_image
                              }
                              width={75}
                              height={75}
                            />
                            <div class="col-md-3 col-lg-3 col-xl-3">
                              <h6 class="text-muted">{item.item_name}</h6>
                              <h6 class="text-black mb-0">
                                {item.item_description}
                              </h6>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              {/* <h6 class="mb-0">{item.item_price}</h6> */}
                              <h6 class="mb-0">{calculateSubtotal(item.id)}</h6>
                            </div>
                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                              <i
                                class="fa-solid fa-trash"
                                onClick={() => handleSubmit(item.id)}></i>
                            </div>
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-2 d-flex ms-5">
                            <div className=" cart-icons d-flex align-item-center mt-3 ms-5  ">
                              <span className="subtraction-icon ">
                                <HiMinusCircle
                                  size={30}
                                  color={
                                    item.item_quantity[index] != 1
                                      ? "#23AA49"
                                      : "#DADADA"
                                  }
                                  onClick={(e) => {
                                    handleDecrement(item.id);
                                    updateQuantityandprice(
                                      item.id,
                                      change[index] || 1,
                                      item.item_id
                                    );
                                  }}
                                />
                              </span>
                              <p className="number-cart">
                                {change[item.id] || 1}
                              </p>
                              <span className="addition-icon">
                                <IoMdAddCircle
                                  size={30}
                                  onClick={(e) => {
                                    handleIncrement(item.id);
                                    updateQuantityandprice(
                                      item.id,
                                      change[index] || 1,
                                      item.item_id
                                    );
                                  }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <hr class="my-4" />
                      </>
                    ))}
                  </div>

                  <div class="col-12">
                    <div class="form-outline ">
                      <div className="d-flex justify-content-center">
                        <h5
                          class=" promo-code"
                          style={{
                            marginRight: "4rem",
                          }}>
                          <BiSolidOffer onClick={() => handleShow} />{" "}
                          &nbsp;Promo code?
                        </h5>
                      </div>
                      <br />
                      <div className="">
                        {/* <input id="input" />
                       <div className="">
                        <Link to="/cartoffers">
                          <button className=" signin-btn w-100 fs-8 ms-5 apply-btn ">
                            Apply
                          </button>
                        </Link>
                      </div> */}

                        <div class="row">
                          <div class="col ms-5">
                            <input
                              required
                              type="text"
                              value={coupon_code}
                              onChange={(e) => setcouon_code(e.target.value)}
                              id="input"
                              className="w-100"
                              placeholder="Enter promo code here"
                            />
                          </div>

                          <div class="col">
                            {/* <Link to="/cartoffers"> */}
                            <button
                              onClick={(e) => handleApplycode(e)}
                              className=" signin-btn  fs-8 ms-5 apply-btn w-75 ">
                              Apply
                            </button>
                            {/* </Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div class="card p-4 mb-5">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 ">
                      Sub Total
                      <strong className="price-item">{calculateTotal()}</strong>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Discount {storediscountvalue}%
                      <span className="price-item">
                        {" "}
                        - {(calculateTotal() * storediscountvalue) / 100}
                      </span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center px-0 pb-0 ">
                      Tax
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
                      <span className="price-item">
                        {" "}
                        {calculateTotal() -
                          (calculateTotal() * storediscountvalue) / 100}
                      </span>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center ms-5">
                    <Link to="">
                      <button
                        className="addcart-btn signin-btn w-100 mt-3"
                        onClick={(e) => updaterecord(e)}>
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
