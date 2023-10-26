import React, { useEffect, useState } from "react";
import "./Favorite.css";
import carot from "../images/carot.jpeg";
import kiwi from "../images/kiwi.jpg";
import redchilli from "../images/red-chilli.jpeg";
import roomcleaner from "../images/room-cleaner.jpg";
import { apimethod, RemoveFavorite,Addcart } from "../../utils/api";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const Favorite = () => {
  const {state} = useLocation();

  const [favorite, setFavorite] = useState([]);
  const [fav, setFav] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [formData, setFormData] = useState({
    user_id: "",
    item_id: state.item_id,
    like_status: "",
    updated_at: "",
    created_at: "",
    id: "",
    item_expiry_date:state.item_expiry_date,
    item_name:state.item_name,
    item_price:state.item_price,
    item_quantity:1,
    item_weight:state.item_weight,
    item_description: state.item_description,
    dis_item_price: state.dis_item_price,

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

  const handleRemove = async (item) => {
    var body = {
      id: item,
    };

    try {
      const response = await apimethod("RemoveFavorite", body);
      const newresponse = response;
      if (newresponse.status == true) {
        Swal.fire({
          icon: "success",
          title: "Item Removed",
          text: "The item has been deleted successfully.",
          customClass: {
            container: "custom-swal-container",
            confirmButton: "custom-swal-confirm-button",
          },
        });
      }

      setFav((cart) => cart.filter((record) => record.item !== item));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while deleting the record.",
      });
      console.log(error);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await apimethod("Addcart", formData);
      const newresponse = response;
      console.log(newresponse);

      if (newresponse.status == true) {
        // window.alert(newresponse.message);
        Swal.fire('Added in cart successfully!')
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                    <button className="fav-btn w-25" onClick={handleAdd}>
                      Add Cart
                    </button>
                    <div
                      className="delete-icon"
                      style={{
                        marginRight: "55px",
                      }}>
                      <RiDeleteBinLine
                        size={30}
                        onClick={() => handleRemove(obj.id)}
                      />
                    </div>
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
