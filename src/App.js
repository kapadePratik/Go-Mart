import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Category from "./Components/category/Category";
import Fruits from "./Components/fruits/Fruits";
import Offers from "./Components/Offers/Offers";
import Vegitables from "./Components/vegitables/Vegitables";
import HouseholdProducts from "./Components/household products/HouseholdProducts";
import NotifiedPage from "./Components/notifiedPage/NotifiedPage";
import Footer from "./Components/footer/Footer";
import LoginForm from "./Components/login/LoginForm";
import Main from "./Components/Main/Main";
import Regitration from "./Components/Regitration/Regitration";
import ForgetPassword from "./Components/forgetpassword/ForgetPassword";
import OTPPage from "./Components/OTPPage/OTPPage";
import ChangePassword from "./Components/changePassword/ChangePassword";
import FruitsPage from "./Components/Products/fruitsPage/FruitsPage";
import VegitablePage from "./Components/Products/VegitablePage/VegitablePage";
import CleaningHouseholdPage from "./Components/Products/CleaningHouseholdPage/CleaningHouseholdPage";
import ItemsDescription from "./Components/itemsDescription/ItemsDescription";
import Cart from "./Components/Cart/Maincart/Cart";
import CartOffers from "./Components/Cart/Maincart/cartoffers/CartOffers";
import Address from "./Components/Payment/address/Address";
import PaymentPopup from "./Components/Payment/paymentPopup/PaymentPopup";
import UserProfile from "./Components/userProfile/UserProfile";
import Favorite from "./Components/favorite/Favorite";
import Swal from 'sweetalert2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import { useEffect,useState } from "react";

function App() 
{ 
  const [message, setMessage] = useState('')
  useEffect(() => {
  localStorage.getItem('token');
  const expirationTime = 25 *60 *1000; 
  const timeoutId = setTimeout(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('userinfo');
    Swal.fire({
      icon: 'success',
      title: 'Token Removed',
      text: 'Token removed after 25 minutes.',
    });
    
    setMessage('Token removed after 25 minutes.');
    }, expirationTime);
  

  return () => clearTimeout(timeoutId);
}, []);





  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/login" element={<LoginForm />}></Route>
          <Route exact path="/register" element={<Regitration />}></Route>
          <Route
            exact
            path="/forgetpassword"
            element={<ForgetPassword />}></Route>
          <Route exact path="/otpgenerator" element={<OTPPage />}></Route>
          <Route
            exact
            path="/changepassword"
            element={<ChangePassword />}></Route>
          <Route exact path="/fruitspage" element={<FruitsPage />}></Route>
          <Route
            exact
            path="/vegitablepage"
            element={<VegitablePage />}></Route>
          <Route
            exact
            path="/householdpage"
            element={<CleaningHouseholdPage />}></Route>
          <Route
            exact
            path="/itemsdescription"
            element={<ItemsDescription />}></Route>
          <Route exact path="/addtocart" element={<Cart />}></Route>
          <Route exact path="/cartoffers" element={<CartOffers />}></Route>
          <Route exact path="/address" element={<Address />}></Route>
          <Route exact path="/paymentpopup" element={<PaymentPopup />}></Route>
          <Route exact path="/userprofile" element={<UserProfile />}></Route>
          <Route exact path="/favorite" element={<Favorite />}></Route>
     
    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
