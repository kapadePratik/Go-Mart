import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Category from './Components/category/Category';
import Fruits from './Components/fruits/Fruits';
import Offers from './Components/Offers/Offers';
import Vegitables from './Components/vegitables/Vegitables';
import HouseholdProducts from './Components/household products/HouseholdProducts';
import NotifiedPage from './Components/notifiedPage/NotifiedPage';
import Footer from './Components/footer/Footer';
import LoginForm from './Components/login/LoginForm';
import Main from './Components/Main/Main';
import Regitration from './Components/Regitration/Regitration';
import ForgetPassword from './Components/forgetpassword/ForgetPassword';
import OTPPage from './Components/OTPPage/OTPPage';
import ChangePassword from './Components/changePassword/ChangePassword';
import FruitsPage from './Components/Products/fruitsPage/FruitsPage';
import VegitablePage from './Components/Products/VegitablePage/VegitablePage';
import CleaningHouseholdPage from './Components/Products/CleaningHouseholdPage/CleaningHouseholdPage';
import ItemsDescription from './Components/itemsDescription/ItemsDescription';
import {BrowserRouter as Router, Switch, Route, Routes,Link } from "react-router-dom";


function App() {
  return (
    <div className="App">

          <Router>
         <Routes>
          <Route exact path="/" element={<Main  />}></Route>
          <Route exact path="/login" element={<LoginForm />}></Route>
          <Route exact path="/register" element={<Regitration />}></Route>
          <Route exact path="/forgetpassword" element={<ForgetPassword />}></Route>
          <Route exact path="/otpgenerator" element={< OTPPage/>}></Route>
          <Route exact path="/changepassword" element={< ChangePassword/>}></Route>
          <Route exact path="/fruitspage" element={< FruitsPage/>}></Route>
          <Route exact path="/vegitablepage" element={< VegitablePage/>}></Route>
          <Route exact path="/householdpage" element={<CleaningHouseholdPage/>}></Route>
          <Route exact path="/itemsdescription" element={< ItemsDescription/>}></Route>
          

          
        </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
