import React from 'react';
import './ItemsDescription.css';
import Navbar from '../Navbar/Navbar';
import apple from '../images/apple.jpg'
import background from'../images/profile.jpg';
import {MdBookmarkBorder} from 'react-icons/md';

const ItemsDescription = () => {
  return (
    <>
    <Navbar />
    <div className="container">
        <div className="item-image mt-5">
            <img
            className='main-img'
            src={apple}
            alt=''
            width={500}
            height={500}
            />

            <div className="save-icon  ">
                <span className='d-flex justify-content-center ms-5'><MdBookmarkBorder size={30}/></span>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemsDescription
