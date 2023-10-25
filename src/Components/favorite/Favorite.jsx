import React, { useEffect, useState } from "react";
import "./Favorite.css";
import carot from "../images/carot.jpeg";
import kiwi from "../images/kiwi.jpg";
import redchilli from "../images/red-chilli.jpeg";
import roomcleaner from "../images/room-cleaner.jpg";
import { apimethod } from "../../utils/api";

const Favorite = () => {
  const [favorite, setFavorite] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [formData, setFormData] = useState({
    user_id: "",
    item_id: "",
    like_status: "",
    updated_at: "",
    created_at: "",
    id: "",
  });

  const getfavorite = async () => {
    await apimethod("getFavoriteList").then((result) => {
      if (result != false) {
        setFavorite(result.data);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getfavorite();
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div
          className="new-card bg-white mt-5"
          style={{
            border: "none",
          }}>
          <div className="card-body favcard-border">
            {favorite &&
              favorite.map((obj, index) => (
                <>
                  <div className="favorite-item" key={index}>
                    <img
                      src={
                        "https://gomart.thecompletesoftech.in/uploads/" +
                        obj.item_image
                      }
                      className="d-flex justify-content-start"
                      alt=""
                      width={100}
                      height={100}
                    />
                    <div>
                      <label className="fav-itemname">{obj.item_name}</label>
                      <br />
                    </div>
                    <div className="fav-itemname">{obj.item_price}</div>
                    <button className="fav-btn w-25" onClick={handleSubmit}>
                      Add Cart
                    </button>
                  </div>
                  <hr />
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
