import React, { useState } from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { MdLocationCity, MdMarkEmailRead } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { IoIosContact, IoMdContacts } from "react-icons/io";
import { FaCity,FaUserEdit } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
const UserProfile = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <section style={{ backgroundColor: "#eee;" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav
                aria-label="breadcrumb"
                className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <AiOutlineHome size={25}/>
                  &nbsp;
                  <Link className="link-tag" to="/">
                    <li class="breadcrumb-item" style={{
                      fontSize:"18px",
                      fontWeight:"700"
                    }}>
                      <a>Home</a>
                    </li>
                  </Link>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center profile-image-upload">
                  <div className="image-container">
                    <img
                      src={image} alt="" 
                      placeholder="Please Add Photo"
                      // class="rounded-circle img-fluid"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    id="image-upload"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="image-upload" className="edit-icon">
                    <FaUserEdit size={30} className=""/>
                  </label>
                  <h5 className="my-3">Saurabh Giri</h5>
                  <p className="text-muted mb-1 profile-details">Surat</p>
                  <p className="text-muted mb-4 profile-details">Pandesara, Surat</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 profile-names">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0 profile-details">Saurabh Giri</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 profile-names">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0 profile-details">Saurabhgiri@gmail.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 profile-names">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0 profile-details">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 profile-names">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0 profile-details">Pandesara , Surat</p>
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 profile-names">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0 profile-details">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="mb-4 col-md-4 mt-5 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <AiOutlineShoppingCart size={30}  className="cart1-icon"/>
                    <p className="mb-0 cart1-text">Cart</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsCartCheck size={30}  className="cart1-icon"/>
                  <Link to='/orderstatus'><p className="mb-0 cart1-text">Orders</p></Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <MdLocationCity size={30}  className="cart1-icon"/>
                    <p className="mb-0 cart1-text">Change Address</p>
                  </li>
                  
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <HiOutlineLogout size={30}  className="cart1-icon"/>
                    <p className="mb-0 cart1-text">Log Out</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-4 col-md-4 mt-5 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <AiOutlineUserAdd size={30}  className="cart1-icon"/>
                    <p className="mb-0 cart1-text">Change Name</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <MdMarkEmailRead size={30}  className="cart1-icon"/>
                    <p className="mb-0 cart1-text">Change Email</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <IoIosContact size={30}  className="cart1-icon"/>
                    <p className="mb-0 cart1-text">Change Number</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FaCity size={30}  className="cart1-icon"/>
                    <p className="mb-0 cart1-text">Change City</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-4 col-md-4 mt-5 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BiSolidOffer size={30} className="blue-bg" />
                    <p className="mb-0 cart1-text">Offers</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FcAbout size={30} className="blue-bg" />
                    <p className="mb-0 cart1-text">About us</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <IoMdContacts size={30} className="blue-bg" />
                    <p className="mb-0 cart1-text">Contact us</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

         <hr />

        <span className="copyright-span">All Rights are reserved by	&#169;GO MART</span> 
    </>
  );
};

export default UserProfile;
