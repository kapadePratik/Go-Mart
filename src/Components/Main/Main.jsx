import React from 'react'
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Category from '../category/Category';
import Fruits from '../fruits/Fruits';
import Offers from '../Offers/Offers';
import Vegitables from '../vegitables/Vegitables';
import HouseholdProducts from '../household products/HouseholdProducts';
import NotifiedPage from '../notifiedPage/NotifiedPage';
import Footer from '../footer/Footer';

const Main = () => {
  return (
    <div className='Main'>
        <Navbar />
         <Banner />
         <Category />
         <Fruits />
         <Offers />
         <Vegitables />
         <HouseholdProducts />
         <NotifiedPage />
         <Footer />
    
    </div>
  )
}

export default Main
