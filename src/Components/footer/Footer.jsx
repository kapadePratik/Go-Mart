import React from "react";
import "./Footer.css";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import logo from "../images/gomartlogo2.png";
const Footer = () => {
  return (
    <>
      <footer>
        <header>
          <h2 className="d-flex justify-content-start">
          <img
              src={logo}
              style={{
                width: "35%",
                height: "110px",
                
              }}
            />
          </h2>
          <p className="d-flex justify-content-start">
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
            accusantium?"
          </p>
            <div className="d-flex justify-content-center">
            <ul class="icons">
            <BiLogoFacebook size={25} className="icons" />
            <AiOutlineInstagram size={25} className="icons" />
            <BsTwitter size={25} className="icons" />
            <FaPinterestP size={25} className="icons" />
          </ul>
            </div>
         
        </header>
        <aside className="footer-text">
          <ul class="category">
            <li>
              <h3>Project</h3>
            </li>
            <li>Houses</li>
            <li>Rooms</li>
            <li>Flats</li>
            <li>Apartments</li>
          </ul>
          <ul class="category">
            <li>
              <h3>Company</h3>
            </li>
            <li>Objective</li>
            <li>Capital</li>
            <li>Security</li>
            <li>Selling</li>
          </ul>
          <ul class="category">
            <li>
              <h3>Movement</h3>
            </li>
            <li>Movement</li>
            <li>Support us</li>
            <li>Pricing</li>
            <li>Renting</li>
          </ul>
          <ul class="category">
            <li>
              <h3>Help</h3>
            </li>
            <li>Privacy</li>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
