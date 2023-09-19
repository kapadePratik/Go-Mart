import React from 'react';
import './Vegitables.css';
import {BsHeart} from 'react-icons/bs';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import corn from '../images/corn.jpeg';
import redchilli from '../images/red-chilli.jpeg';
import tomato from '../images/tomato.jpg';
import onion from '../images/onion.jpg';
import greenbean from '../images/green-beans.webp';
import carot from '../images/carot.jpeg';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Vegitables = () => {
  return (
    <div>
       <div className="category">
      <div className="container ">
        <div className="category-header  d-flex flex-row mt-5">
          <h3>Vegitables</h3>{" "}
        </div>
        <div class="d-flex flex-row-reverse">
         <Link to='/vegitablepage' className='link-tag'><span>VIEW ALL</span></Link>
        </div>
          <Swiper 
          
          
          >
        <SwiperSlide>
        <div
          class="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 mt-2
      ">
          <div class="col">
            <div class="card-body card">
              <div className="card-img">
                <img src={carot} height={100} width={100} alt="" />
              </div>
              <span>Carot, 1kg</span>
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
                <img src={onion} height={100} width={100} alt="" />
              </div>
              <span>Onion, 1kg</span>
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
                <img src={greenbean} height={100} width={100} alt="" />
              </div>
              <span>Green Beans, 1kg</span>
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
                <img src={tomato} height={100} width={100} alt="" />
              </div>
              <span>Tomato, 1kg</span>
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
                <img src={redchilli} height={100} width={100} alt="" />
              </div>
              <span>Red Chillis, 1kg</span>
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
                <img src={corn} height={100} width={100} alt="" />
              </div>
              <span>Corn, 1kg</span>
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
    </div>
  )
}

export default Vegitables
