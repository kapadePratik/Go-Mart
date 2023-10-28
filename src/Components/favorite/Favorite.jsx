import React, { useEffect, useState } from "react";
import "./Favorite.css";
import carot from "../images/carot.jpeg";
import kiwi from "../images/kiwi.jpg";
import redchilli from "../images/red-chilli.jpeg";
import roomcleaner from "../images/room-cleaner.jpg";
import { apimethod, RemoveFavorite, Addcart } from "../../utils/api";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const Favorite = () => {
  const { state } = useLocation();

  const [favorite, setFavorite] = useState([]);
  const [fav, setFav] = useState([]);
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
    item_expiry_date: "",
    item_name: "",
    item_price: "",
    item_quantity: 1,
    item_weight: "",
    item_description: "",
    dis_item_price: "",
  });
  console.log(JSON.stringify(state));

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
      // item_id: '3',
      // item_price: '400',
      // item_weight: ['1kg'],
      // item_quantity: 2,
      // item_name: 'apple',
      // item_expiry_date: '2023-12-15',
    };

    // console.log("Send Data====> ", JSON.stringify(data));
    const response = await apimethod("Addcart", data);
    const newresponse = response;
    console.log(newresponse);
    if (newresponse.status == true) {
      Swal.fire({
        title:"Added in cart successfully!",
      
        customClass:{
          container:"custom-swal-button",
        
        }
      }
      );
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">

        { favorite.length === 0 ? (
          <p className="data-notfound">No data found <br/>
          Please Add item to Favorite
          </p>
          
        ):(
          
       
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

                    <button
                      className="fav-btn w-25"
                      onClick={(e) => handleAdd( obj)}>
                      Add Cart
                    </button>
                    <div
                      className="delete-icon"
                      style={{
                        marginRight: "55px",
                      }}>
                      <RiDeleteBinLine
                        size={30}
                        onClick={(e) => handleRemove( obj.id)}
                      />
                    </div>
                  </div>
                  <hr />
                </>
              ))}
          </div>
        </div>
         )
        } 
      </div>
    </div>
  );
};

export default Favorite;
