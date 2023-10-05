import React, { useEffect, useRef, useState } from "react";
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
import { AiFillHeart } from "react-icons/ai";
import { apimethod } from "../../utils/api";
const Fruits = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [favlist, setFavList] = useState([]);

  const [data, setdata] = useState([]);
  const [productdata, setProductdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const fruitlist = [
    {
      id: 1,
      name: "Apple",
      image: require("../images/apple.jpg"),
      quantity: "1kg",
      price: 100,
    },
    {
      id: 2,

      name: "Banana",
      image: require("../images/banana.jpg"),
      quantity: "1kg",
      price: 100,
    },
    {
      id: 3,
      name: "stwaberry",
      image: require("../images/stwaberry.jpg"),
      quantity: "1kg",
      price: 100,
    },
    {
      id: 4,
      name: " orange",
      image: require("../images/orange.jpg"),
      quantity: "1kg",
      price: 100,
    },
    {
      id: 5,
      name: "blackberry",
      image: require("../images/blackberry.jpg"),
      quantity: "1kg",
      price: 100,
    },
    {
      id: 6,
      name: "kiwi",
      image: require("../images/kiwi.jpg"),
      quantity: "1kg",
      price: 100,
    },
  ];
  useEffect(() => {
    var list = [];
    for (let i = 0; i < fruitlist.length; i++) {
      var data = false;
      list.push(data);
    }
    setFavList(list);
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    await apimethod("getCategory").then((result) => {
      if (result != false) {
        // setdata(result.data);
        // setLoading(false);
        fetchProduct(result.data);
      }
      // setLoading(false);
    });
  };

  const fetchProduct = async (data) => {
    var list = [];
    for (let index = 0; index < data.length; index++) {
      const formData = new FormData();
      formData.append("category_id", data[index].cat_id);
      // console.log("Send Data==> ", formData);
      await apimethod("getProductByCatID", formData).then((result) => {
        // console.log("Response ===> ", JSON.stringify(result.data));
        if (result != false) {
          list.push({
            catname: data[index].category_name,
            product: result.data,
          });
          setLoading(false);
        }
        setLoading(false);
      });
    }
    // console.log("NEWData", list.product);
    setdata(list);
  };

  const handleLikeClick = (i) => {
    var data = [...favlist];
    data[i] = !favlist[i];
    setFavList(data);
    setTimeout(() => {
      setIsLiked(false);
    }, 1000);
  };

  const likeClass = isLiked ? "like-button liked" : "like-button";
  return (
    <div className="category">
      {data.map((item, i) => (
        <div className="container ">
          <div className="category-header  d-flex flex-row mt-5 fruits-name">
            <p>{item.catname}</p>{" "}
          </div>
          <div class="d-flex flex-row-reverse view-allitems">
            <Link to="/fruitspage" className="link-tag">
              VIEW ALL
            </Link>
          </div>
          <Swiper>
            <SwiperSlide>
              {/* <div class="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 mt-2">
                {item.product.product.map((items, index) => (
                  <div class="col">
                    <div class="card new-card-css">
                      <div className="card-img">
                        <img
                          className=""
                          src={
                            "https://gomart.thecompletesoftech.pw/uploads/" +
                            items.item_image
                          }
                          alt=""
                          style={{
                            width: "100%",
                            height: "50vh",
                          }}
                        />
                      </div>
                      <span className="float-left item-namestyle">
                        {items.item_name} / {items.item_weight}kg
                      </span>
                      <h5> &#8377; {items.item_price}</h5>
                      <div class=" gap-3 icon">
                        <button className="btn btn-success right-icon">
                          Add to Cart
                        </button>
                        <div
                          className={likeClass}
                          onClick={() => handleLikeClick(i)}>
                          {favlist[i] == true ? (
                            <AiFillHeart
                              size={35}
                              className="heart-icon heart-desktopview left-icon"
                              style={{ color: "red" }}
                            />
                          ) : (
                            <BsHeart
                              size={35}
                              className="heart-icon heart-desktopview left-icon"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}

<div class="container mt-4">
                      <div class="row">
                        <div class="col-lg-4 col-xl-4 col-md-4 col-12">
                        
                           <div class="card">
                         
                              <div class="imgContainer">
                                 <img class="card-img-top" src="http://placeimg.com/330/220/tech" alt="Card image cap" />
                                 <a>
                                    <div class="mask"></div>
                                 </a>
                                
                                 <a class="btn_right_floating ml-auto">
                                 <i class="fa fa-arrow-right"></i></a>
                              </div>
                             
                              <div class="card-body">
                             
                                 <h4 class="card-title">Card Title</h4>
                                 <hr />
                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                    content.
                                 </p>
                              </div>
                             
                              <div class=" card_footer">
                                 <ul class="list-unstyled list-inline font-small">
                                    <li class="list-inline-item white-text mr-4"><i class="far fa-clock"></i>05/10/2015</li>
                                    <li class="list-inline-item"><a href="#" class="white-text"><i
                                       class="far fa-comments"></i>12</a></li>
                                    <li class="list-inline-item"><a href="#" class="white-text"><i class="fab fa-facebook-f pr-1">
                                       </i>21</a>
                                    </li>
                                    <li class="list-inline-item"><a href="#" class="white-text"><i class="fab fa-twitter pr-1"> </i>5</a></li>
                                 </ul>
                              </div>
                           </div>
                          
                        </div>
                           
                        <div class="col-lg-4 col-xl-4 col-md-4 col-12">
                      
                          <div class="card">
                         
                             <div class="imgContainer">
                                <img class="card-img-top" src="http://placeimg.com/330/220/tech" alt="Card image cap"/>
                                <a>
                                   <div class="mask"></div>
                                </a>
                             
                                <a class="btn_right_floating ml-auto">
                                <i class="fa fa-arrow-right"></i></a>
                             </div>
                             
                             <div class="card-body">
                            
                                <h4 class="card-title">Card Title</h4>
                                <hr />
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                   content.
                                </p>
                             </div>
                            
                             <div class=" card_footer">
                                <ul class="list-unstyled list-inline font-small">
                                   <li class="list-inline-item white-text mr-4"><i class="far fa-clock"></i>05/10/2015</li>
                                   <li class="list-inline-item"><a href="#" class="white-text"><i
                                      class="far fa-comments"></i>12</a></li>
                                   <li class="list-inline-item"><a href="#" class="white-text"><i class="fab fa-facebook-f pr-1">
                                      </i>21</a>
                                   </li>
                                   <li class="list-inline-item"><a href="#" class="white-text"><i class="fab fa-twitter pr-1"> </i>5</a></li>
                                </ul>
                             </div>
                          </div>
                       
                       </div>
              
                       <div class="col-lg-4 col-xl-4 col-md-4 col-12">
                        
                          <div class="card">
                            
                             <div class="imgContainer">
                                <img class="card-img-top" src="http://placeimg.com/330/220/tech" alt="Card image cap"/>
                                <a>
                                   <div class="mask"></div>
                                </a>
                              
                                <a class="btn_right_floating ml-auto">
                                <i class="fa fa-arrow-right"></i></a>
                             </div>
                         
                             <div class="card-body">
                             
                                <h4 class="card-title">Card Title</h4>
                                <hr />
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                   content.
                                </p>
                             </div>
                            
                             <div class=" card_footer">
                                <ul class="list-unstyled list-inline font-small">
                                   <li class="list-inline-item white-text mr-4"><i class="far fa-clock"></i>05/10/2015</li>
                                   <li class="list-inline-item"><a href="#" class="white-text"><i
                                      class="far fa-comments"></i>12</a></li>
                                   <li class="list-inline-item"><a href="#" class="white-text"><i class="fab fa-facebook-f pr-1">
                                      </i>21</a>
                                   </li>
                                   <li class="list-inline-item"><a href="#" class="white-text"><i class="fab fa-twitter pr-1"> </i>5</a></li>
                                </ul>
                             </div>
                          </div>
                  
                       </div>
                      </div>

                {/* ))} */}
              </div> 
            </SwiperSlide>
          </Swiper>
        </div>
       ))}
  
    </div>

  );
};

export default Fruits;
