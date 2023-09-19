import React from "react";
import "./Category.css";
import fruits from "../images/fruits.jpg";
import vegitable from "../images/vegitables.webp";
import dairy from "../images/dairy-products.jpg";
import meat from "../images/raw-meat.jpg";
import chocolate from "../images/chocalates.jpg";
import oil from "../images/dairy-products.jpg";

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category-header  d-flex flex-row">
          <h3>Browse by Category</h3>{" "}
        </div>
        <div class="d-flex flex-row-reverse">
          <span>SEE ALL</span>
        </div>

        <div
          class="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 mt-2
        ">
          <div class="col">
            <div class="card-body card">
              <div className="card-img">
                <img src={fruits} height={100} width={100} alt="" />
              </div>
            </div>
            <span>FRUITS</span>
          </div>
          <div class="col">
            <div class="card-body card">
              <div className="card-img">
                <img src={vegitable} height={100} width={100} alt="" />
              </div>
            </div>
            <span>VEGITABLES</span>
          </div>
          <div class="col">
            <div class="card-body card">
              <div className="card-img">
                <img src={dairy} height={100} width={100} alt="" />
              </div>
            </div>
            <span>DAIRY PRODUCTS</span>
          </div>
          <div class="col">
            <div class="card-body card">
              <div className="card-img">
                <img src={meat} height={100} width={100} alt="" />
              </div>
            </div>
            <span>RAW MEATS</span>
          </div>
          <div class="col">
            <div class="card-body card">
              <div className="card-img">
                <img src={chocolate} height={100} width={100} alt="" />
              </div>
            </div>
            <span>CHOCALATES</span>
          </div>

          <div class="col">
            <div class="card-body card">
              <div className="card-img">
                <img src={oil} height={100} width={100} alt="" />
              </div>
            </div>
            <span>OIL & GHEE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
