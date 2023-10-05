import React, { useState, useEffect } from "react";
import "./Category.css";
import fruits from "../images/fruits.jpg";
import vegitable from "../images/vegitables.webp";
import dairy from "../images/dairy-products.jpg";
import meat from "../images/raw-meat.jpg";
import chocolate from "../images/chocalates.jpg";
import oil from "../images/dairy-products.jpg";
import { apimethod, fetchData } from "../../utils/api";
// import HashLoader from "../Loader/HashLoader";

const Category = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    await apimethod("getCategory").then((result) => {
      if (result != false) {
        setdata(result.data);
        setLoading(false);
      }
      setLoading(false);
    });
  };

  return (
    <>
      {/* {loading ? (
        <div class="text-center">
           <div class="spinner-border" role="status">
             <span class="visually-hidden">Loading...</span>
           </div>
         </div>
         <HashLoader /> 

       ) : ( } */}
      <div>
        <section style={{ backgroundcolor: "#eee" }}>
          <div class="container py-5">
            <h4 class="text-center mb-5">
              <strong>Browse by Category</strong>
            </h4>
            <div class="d-flex flex-row-reverse mb-3">
              <span>SEE ALL</span>
            </div>

            <div className="row">
              {data.map((card, i) => (
                <div class="col-lg-4 col-md-12 mb-4" key={i}>
                  <div className="card category-card">
                    <div class="bg-image hover-zoom ripple shadow-1-strong rounded ">
                      <img
                        src={
                          "https://gomart.thecompletesoftech.pw/uploads/" +
                          card.category_image
                        }
                        style={{
                          width: "130px",
                          height: "300px",
                        }}
                        class="w-100"
                      />
                      <div
                        class="mask"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                        <div class="d-flex justify-content-start align-items-start h-100"></div>
                      </div>
                      <div class="hover-overlay">
                        <div
                          class="mask"
                          style={{
                            backgroundColor: "rgba(253, 253, 253, 0.15)",
                          }}>
                          <h3 className="d-flex justify-content-start ms-3 category-name tag">
                            {card.category_name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* )} */}
    </>
  );
};

export default Category;
