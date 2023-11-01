import React, { useEffect, useState } from "react";
import "./Banner.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Scrollbar, A11y, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
// import picture from "../images/grocbanner1.jpg";
// import picture2 from "../images/grocbanner2.jpg";
import { sliderSettings } from "../../utils/common";
import { Autoplay, Navigation } from "swiper/modules";
import data from "../../utils/banner.json";
import { getBanner } from "../../utils/api";

const Banner = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const apiData = await getBanner();
        setdata(apiData.data);
      } catch (error) {
        // console.log(error);
      }
    }

    fetchDataFromAPI();
  }, []);
  return (
    <div className="container banner-position mt-5">
      <div className="banner-item">
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 1,
            },
            865: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 1,
            },
            1500: {
              slidesPerView: 1,
            },
            1700: {
              slidesPerView: 1,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}>
          {data.map((card, i) => {
            return (
              <>
                <SwiperSlide key={i}>
                  <div className="container-fluid m-0 p-0 mt-5">
                    <div className="row">
                      <div className="col">
                        <div className="banner">
                          <img
                            className="img-fluid banner-img" 
                            src={
                              "https://gomart.thecompletesoftech.in/uploads/" +
                              card.banner_image
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
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
