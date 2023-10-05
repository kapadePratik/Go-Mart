import React from 'react';
import './Offers.css';
import grocery1 from '../images/Grocery-Offers.jpg';
import grocery2 from '../images/grocery-offers2.jfif';
import grocery3 from '../images/grocery-offers3.png'

const Offers = () => {
  return (
    <div className="container">
        <div className="offers mt-5">
        <div class="row justify-content-center">
    <div class="col-6">

      <div className='banner'>
      <img className='img-fluid'
      src={grocery1}
      alt=''
      height={250}
      width={600}
      />
      </div>
      
    </div>
    <div class="col-6">
      <div className='banner'>
      <img
        className='img-fluid'
      src={grocery2}
      alt=''
      height={250}
      width={600}
      />
      </div>
  
    </div>
  </div>

  <div class="row">
    <div class="col-md-6  offset-md-3 mt-3">
      <div className='banner'>
      <img
    className='img-fluid'
      src={grocery3}
      alt=''
      height={250}
      width={600}
      />
      </div>
   
    </div>
  </div>
        </div>
    </div>
  )
}

export default Offers
