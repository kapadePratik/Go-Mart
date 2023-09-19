import React from "react";
import "./Navbar.css";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
// import { IoBasket } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import logo from '../images/gomartlogo.png'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-body">
      <div class="container mt-2">
       <Link to='/'> <a class="navbar-brand" href="#">
           <img src={logo} style={{
              width:'100%',
              height:'70px'
           }}/>
        </a></Link>
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item navbar-anchor">
              <a class="nav-link " href="#">
                Home
              </a>
            </li>
            <li class="nav-item navbar-anchor">
              <a class="nav-link" href="#">
                About
              </a>
            </li>

            <li class="nav-item navbar-anchor">
              <a class="nav-link">Services</a>
            </li>

            <li class="nav-item navbar-anchor">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <form class="d-flex " role="search">
            <input
              class="form-control me-2 "
              type="search"
              placeholder="Enter your location "
              aria-label="Search"
            />
          </form>
          <span className="navbar-anchor">
            <AiOutlineSearch size={25} />
          </span>
          <span className="navbar-anchor">
            <AiOutlineHeart size={25} />
          </span>

          {/* <span>
            <IoBasket size={25} />
          </span> */}

          <Link to="/login" className="link-tag">
            {" "}
            <button class=" navbar-anchor  btn-color" type="submit">
              LOGIN
            </button>{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
