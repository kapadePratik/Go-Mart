import React, { useRef, useState } from "react";
import "./Fruits.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { sliderSettings } from "../../utils/common";
import apple from "../images/apple.jpg";
import banana from "../images/banana.jpg";
import blackberry from "../images/blackberry.jpg";
import kiwi from "../images/kiwi.jpg";
import orange from "../images/orange.jpg";
import stwaberry from "../images/stwaberry.jpg";
import { BsHeart } from "react-icons/bs";

const Fruits = () => {
  return (
    <div className="category">
      <div className="container ">
        <div className="category-header  d-flex flex-row mt-5">
          <h3>Fruits</h3>{" "}
        </div>
        <div class="d-flex flex-row-reverse view-allitems">
          <Link to="/fruitspage" className="link-tag">
            VIEW ALL
          </Link>
        </div>
        <Swiper>
          <SwiperSlide>
            <div
              class="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 mt-2
      ">
              <div class="col">
                <div class="card-body card">
                  <div className="card-img">
                    <img src={apple} height={100} width={100} alt="" />
                  </div>
                  <span>Apple, 1kg</span>
                  <h5> &#8377; 120</h5>
                  <div class="d-flex justify-content-evenly">
                    <button className="btn">Add to Cart</button>
                    <button className="btn">
                      <BsHeart />
                    </button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card-body card">
                  <div className="card-img">
                    <img src={orange} height={100} width={100} alt="" />
                  </div>
                  <span>Orange, 1kg</span>
                  <h5> &#8377; 120</h5>
                  <div class="d-flex justify-content-evenly">
                    <button className="btn">Add to Cart</button>
                    <button className="btn">
                      <BsHeart />
                    </button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card-body card">
                  <div className="card-img">
                    <img src={banana} height={100} width={100} alt="" />
                  </div>
                  <span>Banana, 1kg</span>
                  <h5> &#8377; 120</h5>
                  <div class="d-flex justify-content-evenly">
                    <button className="btn">Add to Cart</button>
                    <button className="btn">
                      <BsHeart />
                    </button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card-body card">
                  <div className="card-img">
                    <img src={stwaberry} height={100} width={100} alt="" />
                  </div>
                  <span>Stwaberry, 1kg</span>
                  <h5> &#8377; 120</h5>
                  <div class="d-flex justify-content-evenly">
                    <button className="btn">Add to Cart</button>
                    <button className="btn">
                      <BsHeart />
                    </button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card-body card">
                  <div className="card-img">
                    <img src={blackberry} height={100} width={100} alt="" />
                  </div>
                  <span>Blackberry, 1kg</span>
                  <h5> &#8377; 120</h5>
                  <div class="d-flex justify-content-evenly">
                    <button className="btn">Add to Cart</button>
                    <button className="btn">
                      <BsHeart />
                    </button>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card-body card">
                  <div className="card-img">
                    <img src={kiwi} height={100} width={100} alt="" />
                  </div>
                  <span>Kiwi, 1kg</span>
                  <h5> &#8377; 120</h5>
                  <div class="d-flex justify-content-evenly">
                    <button className="btn">Add to Cart</button>
                    <button className="btn">
                      <BsHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Fruits;
