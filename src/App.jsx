import Home from "./Pages/Home";
import "./App.css";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import PlaceOrder from "./Pages/PlaceOrder";
import Profile from "./Pages/Profile";
import Footer from "./Components/Footer";
import { useState } from "react";
// import { Login } from "@mui/icons-material";
import LoginPopup from "./Components/LoginPopup";
function App() {
  const [login,setLogin] = useState(false);
  return (
    <>
    {
      login?<LoginPopup  />:<></>
    }
    <div className="app">
      <Navbar setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path="/Profile" element={<Profile />} />
        <Route  ></Route>
      </Routes>
     
    </div>
    <Footer/>
    </>
  );
}

export default App;
