import React from "react";
import "./Vegitables.css";
import { BsHeart } from "react-icons/bs";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import corn from "../images/corn.jpeg";
import redchilli from "../images/red-chilli.jpeg";
import tomato from "../images/tomato.jpg";
import onion from "../images/onion.jpg";
import greenbean from "../images/green-beans.webp";
import carot from "../images/carot.jpeg";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Vegitables = () => {
  const vegitablelist = [
    {
      id: 1,
      name: "Corn",
      image: require("../images/corn.jpeg"),
      price: 120,
      qun: "1 KG",
    },

    {
      id: 2,
      name: " redchilli",
      image: require("../images/red-chilli.jpeg"),
      price: 120,
      qun: "1 KG",
    },

    {
      id: 3,
      name: "carot",
      image: require("../images/carot.jpeg"),
      price: 120,
      qun: "3 KG",
    },

    {
      id: 4,
      name: "greenbean",
      image: require("../images/green-beans.webp"),
      price: 120,
      qun: "1 KG",
    },

    {
      id: 5,
      name: " onion",
      image: require("../images/onion.jpg"),
      price: 120,
      qun: "1 KG",
    },

    {
      id: 1,
      name: " tomato",
      image: require("../images/tomato.jpg"),
      price: 120,
      qun: "1 KG",
    },
  ];
  return (
    <div>
      <div className="category">
        <div className="container ">
          <div className="category-header  d-flex flex-row mt-5">
            <p className="vegitable-name">Vegitables</p>
          </div>
          <div class="d-flex flex-row-reverse">
            <Link to="/vegitablepage" className="link-tag">
              <span>VIEW ALL</span>
            </Link>
          </div>
          <Swiper>
            <SwiperSlide>
              <div
                class="row row-cols-1 row-cols-lg-6 g-2 g-lg-3 mt-2">
                {vegitablelist.map((item, i) => (
                  <div class="col">
                    <div class="card-body card">
                      <div className="card-img">
                        <img src={item.image} height={100} width={100} alt="" />
                      </div>
                      <span>
                        {item.name}, {item.qun}
                      </span>
                      <h5> &#8377; {item.price}</h5>
                      <div class="d-flex justify-content-evenly">
                        <button className="btn">Add to Cart</button>
                        <button className="btn">
                          <BsHeart />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Vegitables;
