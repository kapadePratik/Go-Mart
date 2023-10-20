import React from "react";
import "./CartOffers.css";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { apimethod,getCouponcode } from "../../../../utils/api";

const CartOffers = () => {

  const [validationErrors, setValidationErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apimethod("getCouponcode ", formData);
      
      const newresponse = response;

      console.log(newresponse);

      if (newresponse.status == false) {
        setValidationErrors(newresponse.errors);
      }

      if (newresponse.status == true) {
        window.alert(newresponse.message);
      }
    } catch (error) {
      console.log(error);
    }
  };







  return (
    <div className="row justify-content-center">
       <div className="cancle-icon ">
                <Link  to='/' style={{
                      textDecoration:"none",
                      outline:"none",
                     }}><MdCancel size={30} /></Link>
                
              </div>
      <div className=" col-md-8  ">
        <div className="">
          <div class="card p-4">
            <div className="container">
             

              <div className="card p-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 ">
                    <h3 className="offer-heading">New user? First Wash Free</h3>
                    <button
                      className="offers-btn"
                      style={{
                        backgroundColor: "#D7D7D7",
                        color: "white",
                      }}>
                      Apply
                    </button>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 col-lg-4">
                    <p className="offer-para">
                      Your order no.1225345 is confirm Now.Pick up guy will
                      reach at your doorstep
                    </p>
                  </li>
                </ul>
              </div>

              <div className="card p-3 mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 ">
                    <h3 className="offer-heading">
                      Upto 20% Discount on credit Card payment
                    </h3>
                    <button
                      className="  "
                      style={{
                        backgroundColor: "#D7D7D7",
                        color: "white",
                      }}>
                      Apply
                    </button>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 col-lg-4">
                    <p className="offer-para">
                      Your order no.1225345 is Ready to Dispatch Now.Kindly be
                      at place to collect the Delivery
                    </p>
                  </li>
                </ul>
              </div>

              <div className="card p-3 mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 ">
                    <h3 className="offer-heading">
                      Summer offer: Pay for Wash & get ......
                    </h3>
                    <button
                      className="  "
                      style={{
                        backgroundColor: "#D7D7D7",
                        color: "white",
                      }}>
                      Apply
                    </button>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 col-lg-4">
                    <p className="offer-para">
                      Your order no.1225345 is confirm Now.Pick up guy will
                      reach at your doorstep
                    </p>
                  </li>
                </ul>
              </div>

              <div className="card p-3 mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 ">
                    <h3 className="offer-heading">
                      Get first Dry clean and free on 2nd{" "}
                    </h3>
                    <button
                      className="  "
                      style={{
                        backgroundColor: "#D7D7D7",
                        color: "white",
                      }}>
                      Apply
                    </button>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 col-lg-4">
                    <p className="offer-para">
                      Your order no.1225345 is confirm Now.Pick up guy will
                      reach at your doorstep
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartOffers;
