import React, { useEffect, useRef, useState } from "react";
import "./Fruits.css";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import { apimethod, addFavorite, addcart } from "../../utils/api";
import { ColorRing } from "react-loader-spinner";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
const Fruits = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [favlist, setFavList] = useState([]);

  const [data, setdata] = useState([]);
  const [productdata, setProductdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const [likeCount, setLikeCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const { state } = useLocation();

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

  const [formData, setFormData] = useState({
    user_id: "",
    item_id: "",
    like_status: "",
    updated_at: "",
    created_at: "",
    id: "",
    item_expiry_date: "",
    item_name: "",
    item_price: "",
    item_quantity: 1,
    item_weight: "",
    item_description: "",
    dis_item_price: "",
  });

  const handleAdd = async (e, d1) => {
    e.preventDefault();
    const data = {
      item_id: d1.item_id,
      item_price: d1.item_price,
      item_weight: JSON.stringify(d1.item_weight),
      item_quantity: d1.quantity,
      item_name: d1.item_name,
      item_expiry_date: d1.item_expiry_date,
      item_description: d1.item_description,
    };
    const response = await apimethod("Addcart", data);
    const newresponse = response;
    console.log(newresponse);
    if (newresponse.status == true) {
      Swal.fire({
        title: "Added in cart successfully!",

        customClass: {
          container: "custom-swal-button",
        },
      });
    }
  };

  const [count, setCount] = useState([]);
  const handleLikeDislike = async (items, index) => {
    console.log(items);
    try {
      const body = {
        item_id: 1,
        like_status: 1,
      };

      await apimethod("addFavorite", body);
      setLikeCount(userLiked ? likeCount - 1 : likeCount + 1);
      setUserLiked(!userLiked);
    } catch (error) {
      console.error("Error liking/disliking:", error);
    }
  };

  const fetchProduct = async (data) => {
    var list = [];
    for (let index = 0; index < data.length; index++) {
      const formData = new FormData();
      formData.append("category_id", data[index].cat_id);
      await apimethod("getProductByCatID", formData).then((result) => {
        if (result != false) {
          list.push({
            catname: data[index].category_name,
            product: result.data,
          });
          // setLoading(false);
        }
      });
    }
    setdata(list);
    setLoading(false);
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
    <>
      {loading ? (
        <div className="loader-container">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <>
          <div class="wrapper">
            {data.map((item, i, obj) => (
              <div class="container">
                <p className="cat-name ">{item.catname}</p>
                <div class="d-flex flex-row-reverse view-allitems">
                  <Link to={`/fruitspage/${item.cat_id}`} className="link-tag">
                    VIEW ALL
                  </Link>
                </div>
                <div class="inner-wrapper">
                  {item.product.product.map((items, index) => (
                    <>
                      <div class="card card-catogry mb-3 mt-2 ms-3">
                        <div class="inner-card">
                          <div class="img-wrapper">
                            <div className="category-img">
                              <img
                                src={
                                  "https://gomart.thecompletesoftech.in/uploads/" +
                                  items.item_image
                                }
                              />
                              <a
                                class="btn btn-primary position-absolute top-0 start-0 translate-right mt-2 ms-2"
                                onClick={(e) => handleAdd(e, obj)}>
                                Add To{" "}
                                <BsCartPlusFill size={23} className="ms-1" />
                              </a>
                            </div>
                          </div>
                          <div class="content mt-5">
                            <h1 className="category-text">{items.item_name}</h1>
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Incidunt, dolore!
                            </p>
                          </div>

                          <div className="p-2">
                            <span
                              style={{
                                float: "left",
                                color: "black",
                                paddingBottom: "4%",
                              }}>
                              <Link
                                to="/itemsdescription"
                                navigate={items}
                                style={{
                                  textDecoration: "none",
                                  backgroundColor: "#23aa49",
                                }}
                                class="btn btn-success pt-2 w-100"
                                data-src="https://source.unsplash.com/collection/190727/900x600">
                                View
                              </Link>
                            </span>

                            {/* <Link to="/itemsdescription" navigate={items}>
                            <button
                              class=" w-25 mt-5 mb-2 ms-2"
                              data-src="https://source.unsplash.com/collection/190727/900x600">
                              View
                            </button>
                          </Link> */}

                            <span
                              style={{
                                float: "right",
                                color: "black",
                                paddingBottom: "4%",
                              }}
                              className={likeClass}
                              onClick={() => handleLikeClick(i)}>
                              {favlist[i] == true ? (
                                <AiFillHeart
                                  onClick={() => handleLikeDislike(items)}
                                  size={35}
                                  className="heart-icon heart-desktopview"
                                  style={{ color: "red" }}
                                />
                              ) : (
                                <BsHeart
                                  size={35}
                                  className="heart-icon heart-desktopview "
                                />
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Fruits;
