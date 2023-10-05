import React from "react";
import "./HouseholdProducts.css";
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { BsHeart } from "react-icons/bs";
import cleaningproducts from "../images/cleaning-products.jpg";
import cleaningequipment from "../images/cleaning-equipment.jpg";
import dettol from "../images/dettol.jfif";
import ovencleaner from "../images/oven-cleaner.webp";
import roomcleaner from "../images/room-cleaner.jpg";
import washingpowder from "../images/washingpowder.jfif";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const HouseholdProducts = () => {
  const householdlist = [
    {
      id: 1,
      name: "Washing Powder",
      image: require("../images/washingpowder.jfif"),
      price: 120 ,
      qun: "Starting at ",
    },

    {
      id: 2,
      name: "cleaningproducts",
      image: require("../images/cleaning-products.jpg"),
      price: 180,
      qun: "Starting at  ",
    },

    {
      id: 3,
      name: "cleaning Equp ",
      image: require("../images/cleaning-equipment.jpg"),
      price: 240,
      qun: "Starting at ",
    },

    {
      id: 4,
      name: "dettol",
      image: require("../images/dettol.jfif"),
      price: 80,
      qun: "Starting at  ",
    },

    {
      id: 5,
      name: "ovencleaner ",
      image: require("../images/oven-cleaner.webp"),
      price: 800,
      qun: "Starting at ",
    },

    {
      id: 6,
      name: "washingpowder ",
      image: require("../images/washingpowder.jfif"),
      price: 40,
      qun: "Starting at ",
    },
  ];
  return (
    <div className="container ">
      <div className="category-header  d-flex flex-row mt-5 ">
        <p className="household-name">Cleasing & Household</p>
      </div>
      <div class="d-flex flex-row-reverse">
        <Link to="/householdpage" className="link-tag">
          <span>VIEW ALL</span>
        </Link>
      </div>
      <Swiper>
        <SwiperSlide>
          <div
            class="row row-cols-1 row-cols-lg-6 g-2 g-lg-3 mt-2
  ">
            {householdlist.map((item, i) => (
              <div class="col">
                <div class="card-body card">
                  <div className="card-img">
                    <img src={item.image} height={100} width={100} alt="" />
                  </div>
                  <span>
                    {item.name} 
                    <br />
                     {item.qun }
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
  );
};

export default HouseholdProducts;
