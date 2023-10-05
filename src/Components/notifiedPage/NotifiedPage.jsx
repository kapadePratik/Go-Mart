import React from "react";
import "./NotifiedPage.css";
import notifiedimg from "../images/notified-banner.webp";
const NotifiedPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <img src={notifiedimg} alt=""  className="w-100 mb-3" />
       
      </div>
    </div>
  );
};

export default NotifiedPage;
