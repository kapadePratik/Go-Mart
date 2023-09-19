import React from "react";
import "./NotifiedPage.css";
import notifiedimg from "../images/notified-banner.webp";
const NotifiedPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <img src={notifiedimg} alt="" />
        <div class="input-group mb-3 input-content">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your email address"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
           className=""
            type="button"
            id="button-addon2">
           Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotifiedPage;
