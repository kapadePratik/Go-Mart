import React from "react";
import "./Banner.css";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import picture from "../images/grocbanner1.jpg";
// import picture2 from "../images/grocbanner2.jpg";
import { sliderSettings } from "../../utils/common";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import data from "../../utils/banner.json";
const Banner = () => {
  return (
    <div className="container mt-5">
      <div className="banner-item">
        <Swiper
          spaceBetween={15}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 5,
            },
            1500: {
              slidesPerView: 4,
            },
            1700: {
              slidesPerView: 7,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}>
          {data.map((card, i) => {
            return (
              <>
                <SwiperSlide key={i}>
                  <div className="">
                    <img
                      src={require(`../images/${card.image}`)}
                      alt="home"
                    />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );

};

export default Banner;
