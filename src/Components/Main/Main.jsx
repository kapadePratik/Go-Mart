import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Category from "../category/Category";
import Fruits from "../fruits/Fruits";
import Offers from "../Offers/Offers";
import Vegitables from "../vegitables/Vegitables";
import HouseholdProducts from "../household products/HouseholdProducts";
import NotifiedPage from "../notifiedPage/NotifiedPage";
import Footer from "../footer/Footer";
import { fetchData } from "../../utils/api";
import HashLoader from "../Loader/HashLoader";


const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      async function fetchDataFromAPI() {
        try {
          const apiData = await fetchData();
          // console.log(apiData, "hiii");
          setData(apiData);
          setLoading(false)
        } catch (error) {
          console.log(error);
          setLoading(false)
        }
      }
      fetchDataFromAPI();
    },500);
    },[])
   

   
  return (
    <>
    {loading ? (
      <HashLoader />
    ):(
     <div
      className="Main"
      style={{
        overflowX: "hidden",
      }}>
      <Navbar />
      <Banner />
      <Category />
      <Fruits />
      <Offers />
      {/* <Vegitables />
      <HouseholdProducts />
      <NotifiedPage /> */}
      {/* <Footer /> */}
    </div>
    )}
    </>
   
  );
};

export default Main;
