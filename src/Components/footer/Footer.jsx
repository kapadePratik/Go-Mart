import React from "react";
import "./Footer.css";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import logo from "../images/gomartlogo.png";
const Footer = () => {
  return (
    <div
      class="container mt-5
    ">
      <div class="row row-cols-2 row-cols-lg-3 footer-content">
        <div class="col-4 col-lg-2 ms-5 footer-section">
          <div className="footer-logo mt-3">
            <img
              src={logo}
              style={{
                width: "100%",
                height: "70px",
              }}
            />
          </div>

          <ul>
            <li>
              <a href="" className="text-decoration-none">
                Address: 60-49 Road Chennai
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none">
                Phone: 542155025
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none">
                Email:hello@gnail.com
              </a>
            </li>
          </ul>
        </div>
        <div class="col-4 col-lg-2 ms-5 footer-section">
          <h5 className="mt-3">Useful Links</h5>
          <ul>
            <li>
              <a href="" className="text-decoration-none text-start">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none text-start">
                About Our Shop
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none ">
                Secure Shopping
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none">
                Delivery information
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none">
                Our Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div class="col-4 col-lg-2 ms-5 footer-section mt-5">
          <ul>
            <li>
              <a href="" className="text-decoration-none">
                Who we are
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none">
                Our Services
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none">
                Projects
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none">
                Contact
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none">
                Innovation
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        {/* <div class="col-4 col-lg-2">Column</div>
    <div class="col-4 col-lg-2">Column</div> */}
        <div class="col-4 col-lg-4 ms-5 mt-3 footer-section">
          <span>Join our Membership Now</span>
          <br />

          <p>Get e-mail updates on our latest offers</p>
          <div className="footer-input">
            <input
              type="text"
              class="form-control "
              className="footer-input"
              placeholder="Enter your email address"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="footer-input" type="button" id="button-addon2">
              Submit
            </button>
          </div>

          <div className="footer-icon mt-3    d-flex justify-content-around ">
            <span>
              <BiLogoFacebook size={25} />{" "}
            </span>
            <span>
              <AiOutlineInstagram size={25} />
            </span>
            <span>
              <BsTwitter size={25} />
            </span>
            <span>
              <FaPinterestP size={25} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
