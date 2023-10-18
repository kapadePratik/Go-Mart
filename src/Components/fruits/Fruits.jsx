import React, { useEffect, useRef, useState } from "react";
import "./Fruits.css";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
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
          <div className="category-header d-flex flex-row mt-5 fruits-name">
            <p>{item.catname}</p>
          </div>
          <div class="d-flex flex-row-reverse view-allitems">
            <Link to={`/fruitspage/${item.cat_id}`} className="link-tag">
              VIEW ALL
            </Link>
          </div>
          <div class="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 mt-2">
            {item.product.product.map((items, index) => (
              <div class="col">
                <div class="card new-card-css">
                  {" "}
                  <div class=" gap-3 icon">
                    <button className="btn btn-success ">Add to Cart</button>
                    <div
                      className={likeClass}
                      onClick={() => handleLikeClick(i)}>
                      {favlist[i] == true ? (
                        <AiFillHeart
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
                    </div>
                  </div>
                  <div className="card-img">
                    <Link to={"/itemsdescription"} state={items}>
                      {" "}
                      <img
                        className=""
                        src={
                          "https://gomart.thecompletesoftech.in/uploads/" +
                          items.item_image
                        }
                        alt=""
                        style={{
                          width: "100%",
                          height: "50vh",
                        }}
                      />
                    </Link>
                  </div>
                  <span className="float-left item-namestyle">
                    {items.item_name} / {items.item_weight}kg
                  </span>
                  <h5> &#8377; {items.item_price}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fruits;
