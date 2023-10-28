import React from "react";
import "./OrderList.css";
import logo from "../images/gomartlogo2.png";
import { Link } from "react-router-dom";

const OrderList = () => {
  return (
    <>
      <div>
        <div class="container-fluid px-0 bg-black">
          <div class="container px-0">
            <nav class="tanga-header navbar navbar-toggleable-sm justify-content-center">
              <div class="navbar-collapse text-center">
                <a class="navbar-brand mr-4" href="#">
                  <Link to="/">
                    <img src={logo} width="" height="50" alt="" />
                  </Link>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div class="container mt-3 mt-md-5">
          <h2 class="text-charcoal hidden-sm-down">Your Orders</h2>
          <h5 class="text-charcoal hidden-md-up">Your Orders</h5>
          
           <div>
          <div>
            <div>
              <div class="row">
                <div class="col-12">
                  <div class="list-group mb-5">
                    <div
                      class="list-group-item p-3 bg-snow"
                      style={{ position: "relative" }}>
                      <div class="row w-100 no-gutters">
                        <div class="col-6 col-md">
                          <h6 class="text-charcoal mb-0 w-100">Order Number</h6>
                          <a
                            href=""
                            class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                            #A915AFLE4FO
                          </a>
                        </div>
                        <div class="col-6 col-md">
                          <h6 class="text-charcoal mb-0 w-100">Date</h6>
                          <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                            Aug 5th, 2017
                          </p>
                        </div>
                        <div class="col-6 col-md">
                          <h6 class="text-charcoal mb-0 w-100">Total</h6>
                          <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                            $19.54
                          </p>
                        </div>
                        <div class="col-6 col-md">
                          <h6 class="text-charcoal mb-0 w-100">Shipped To</h6>
                          <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                            Late M. Night
                          </p>
                        </div>
                        <div class="col-12 col-md-3 ">
                          <Link
                            to="/orderstatus"
                            style={{
                              outline: "none",
                              textDecoration: "none",
                            }}>
                            {" "}
                            <a href="" class="btn btn-primary w-100 ms-3">
                              View Order
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="list-group-item p-3 bg-white">
                      <div class="row no-gutters">
                        <div class="col-12 col-md-9 pr-0 pr-md-3">
                          <div class="alert p-2 alert-success w-100 mb-0">
                            <h6 class="text-green mb-0">
                              <b>Shipped</b>
                            </h6>
                            <p class="text-green hidden-sm-down mb-0">
                              Est. delivery between Aug 5 – Aug 9th, 2017
                            </p>
                          </div>
                        </div>
                        <div class="col-12 col-md-3 mt-3">
                          <a href="" class="btn btn-secondary w-100 mb-2">
                            Track Shipment
                          </a>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="card mt-5 orderlist-card">
                      <div class="row no-gutters mt-3">
                        <div class="col-3 col-md-1 ms-5">
                          <img
                            class="img-fluid pr-3"
                            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
                            alt=""
                          />
                        </div>
                        <div
                          class="list-group-item p-3 bg-snow"
                          style={{ position: "relative" }}>
                          <div class="row w-100 no-gutters">
                            <div class="col-6 col-md">
                              <h6 class="text-charcoal mb-0 w-100">
                                Order Number
                              </h6>
                              <a
                                href=""
                                class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                                #A915AFLE4FO
                              </a>
                            </div>
                            <div class="col-6 col-md">
                              <h6 class="text-charcoal mb-0 w-100">
                                Order Date
                              </h6>
                              <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                                Aug 5th, 2017
                              </p>
                            </div>
                            <div class="col-6 col-md">
                              <h6 class="text-charcoal mb-0 w-100">Total</h6>
                              <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                                $19.54
                              </p>
                            </div>
                            <div class="col-6 col-md">
                              <h6 class="text-charcoal mb-0 w-100">
                                Shipped Date
                              </h6>
                              <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                                Late M. Night
                              </p>
                            </div>

                            <div class="col-12 col-md-3 hidden-sm-down ">
                              <a
                                href=""
                                class="btn btn-secondary w-100 mb-2 ms-3">
                                Buy It Again
                              </a>
                              <a href="" class="btn btn-secondary w-100 ms-3">
                                Request a Return
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div class="row no-gutters mt-3">
                        <div class="col-3 col-md-1 ms-5">
                          <img
                            class="img-fluid pr-3"
                            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
                            alt=""
                          />
                        </div>
                        <div
                          class="list-group-item p-3 bg-snow"
                          style={{ position: "relative" }}>
                          <div class="row w-100 no-gutters">
                            <div class="col-6 col-md">
                              <h6 class="text-charcoal mb-0 w-100">
                                Order Number
                              </h6>
                              <a
                                href=""
                                class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                                #A915AFLE4FO
                              </a>
                            </div>
                            <div class="col-6 col-md">
                              <h6 class="text-charcoal mb-0 w-100">
                                Order Date
                              </h6>
                              <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                                Aug 5th, 2017
                              </p>
                            </div>
                            <div class="col-6 col-md">
                              <h6 class="text-charcoal mb-0 w-100">Total</h6>
                              <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                                $19.54
                              </p>
                            </div>
                            <div class="col-6 col-md">
                              <h6 class="text-charcoal mb-0 w-100">
                                Shipped Date
                              </h6>
                              <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                                Late M. Night
                              </p>
                            </div>

                            <div class="col-12 col-md-3 hidden-sm-down ">
                              <a
                                href=""
                                class="btn btn-secondary w-100 mb-2 ms-3">
                                Buy It Again
                              </a>
                              <a href="" class="btn btn-secondary w-100 ms-3">
                                Request a Return
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div class="row no-gutters mt-3">
                        <div class="col-3 col-md-1 ms-5">
                          <img
                            class="img-fluid pr-3"
                            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
                            alt=""
                          />
                        </div>
                        <div
                          class="list-group-item p-3 bg-snow"
                          style={{ position: "relative" }}>
                          <div class="row w-100 no-gutters">
                            <div class="col-6 col-md">
                              <h6 class="text-charcoal mb-0 w-100">
                                Order Number
                              </h6>
                              <a
                                href=""
                                class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                                #A915AFLE4FO
                              </a>
                            </div>
                            <div class="col-6 col-md">
                              <h6 class="text-charcoal mb-0 w-100">
                                Order Date
                              </h6>
                              <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                                Aug 5th, 2017
                              </p>
                            </div>
                            <div class="col-6 col-md">
                              <h6 class="text-charcoal mb-0 w-100">Total</h6>
                              <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                                $19.54
                              </p>
                            </div>
                            <div class="col-6 col-md">
                              <h6 class="text-charcoal mb-0 w-100">
                                Shipped Date
                              </h6>
                              <p class="text-pebble mb-0 w-100 mb-2 mb-md-0">
                                Late M. Night
                              </p>
                            </div>

                            <div class="col-12 col-md-3 hidden-sm-down ">
                              <a
                                href=""
                                class="btn btn-secondary w-100 mb-2 ms-3">
                                Buy It Again
                              </a>
                              <a href="" class="btn btn-secondary w-100 ms-3">
                                Request a Return
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-3 hidden-md-up"></div>
      <div class="mobile-nav hidden-md-up"></div>
    </>
  );
};

export default OrderList;
