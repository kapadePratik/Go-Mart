import React from "react";
import "./Favorite.css";
import carot from "../images/carot.jpeg";
import kiwi from "../images/kiwi.jpg";
import redchilli from "../images/red-chilli.jpeg";
import roomcleaner from "../images/room-cleaner.jpg";

const Favorite = () => {
  return (
    <div className="container">
     
      <div className="row d-flex justify-content-center">
        <div
          className="card bg-white mt-5"
          style={{
            border: "none",
             
          }}>
          <div className="card-body favcard-border">
            <div className="favorite-item">
              <img
                src={carot}
                className="d-flex justify-content-start"
                alt=""
                width={100}
                height={100}
              />
              <div>
                <label className="fav-itemname"> Fresh Carot</label>
                <br />
                <p className="fav-item-des">1kg, Price</p>
              </div>
              <div className="fav-itemname">$1.50</div>
              <button className="fav-btn w-25">Add Cart</button>
            </div>
            <hr />

            <div className="favorite-item">
              <img
                src={kiwi}
                className="d-flex justify-content-start"
                alt=""
                width={100}
                height={100}
              />
              <div>
                <label className="fav-itemname"> Fresh Kiwi</label>
                <br />
                <p className="fav-item-des">1kg, Price</p>
              </div>
              <div className="fav-itemname">$1.50</div>
              <button className="fav-btn w-25">Add Cart</button>
            </div>
            <hr />

            <div className="favorite-item">
              <img
                src={roomcleaner}
                className="d-flex justify-content-start"
                alt=""
                width={100}
                height={100}
              />
              <div>
                <label className="fav-itemname"> Room cleaner</label>
                <br />
                <p className="fav-item-des"> 1, Set</p>
              </div>
              <div className="fav-itemname">$3.50</div>
              <button className="fav-btn w-25">Add Cart</button>
            </div>
            <hr />

            <div className="favorite-item">
              <img
                src={redchilli}
                className="d-flex justify-content-start"
                alt=""
                width={100}
                height={100}
              />
              <div>
                <label className="fav-itemname"> Red chillis</label>
                <br />
                <p className="fav-item-des">1kg, Price</p>
              </div>
              <div className="fav-itemname">$2.20</div>
              <button className="fav-btn w-25">Add Cart</button>
            </div>
            <hr />
          </div>
        </div>
      </div>
      </div>
      
 
  );
};

export default Favorite;
