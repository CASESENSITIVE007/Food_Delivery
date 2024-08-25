import { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom"; 
const Navbar = ({setLogin}) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="flex   justify-between  pt-10 pb-10 items-center  ">
      <div className="image">
      <img className="w-28  lg:w-32 " src={assets.logo} alt="" />
      </div>
    <div className="items hidden lg:flex text-lg font-semibold ">
    <ul className="  flex justify-center justify-between items-center m-auto md:gap-5 p-2 ">

        <Link to="/"><li className={menu === "home" ?"active cursor-pointer":"cursor-pointer"} onClick={() => setMenu("home")}>Home</li></Link>
        <a href="#menu" className={menu === "menu" ? "active cursor-pointer " : "cursor-pointer"}onClick={() => setMenu("menu")}>Menu</a>
        <a href="" className={menu === "Mobile-App" ? "active cursor-pointer" : "cursor-pointer"}onClick={() => setMenu("Mobile-App")}>Mobile App</a>
        <a href="#footer" className={menu === "Contactus" ? "active cursor-pointer" : "cursor-pointer"}onClick={() => setMenu("Contactus")}>Contact Us</a>
          </ul>
    </div>
    
      <div className="right flex gap-5 md:gap-10 items-center p-2 ">
        <img className="w-5  md:w-8" src={assets.search_icon} alt="" />
        <Link className="w-5  md:w-10" to="/Cart"><img src={assets.basket_icon} alt="" /></Link>
        <button onClick={()=>setLogin(true)} className=" bg-slate-200 border-1 w-28 hover:bg-slate-300 rounded-3xl p-2" >Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
