import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className="  flex flex-col md:flex-row justify-between items-start bg-slate-700 text-white p-10 space-y-8 md:space-y-0 mt-32 ">

      <div className="Tomato w-full md:w-1/3">
        <Link to="/" ><img src={assets.logo} alt="" className="mb-4" /></Link>
        <p className="text-sm leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          harum dolorum quibusdam numquam libero deserunt facere dolor sint
          suscipit, distinctio doloremque quam tempore eligendi illo. Quam in
          dolorem error omnis?
        </p>
        <div className="flex space-x-4 mt-4">
          <Link to="https://www.facebook.com/" ><img src={assets.facebook_icon} alt="Facebook" className="h-6 w-6" /></Link>
          <Link to="https://www.X.com/" ><img src={assets.twitter_icon} alt="Twitter" className="h-6 w-6" /></Link>
          <Link to="https://www.linkedin.com/"><img src={assets.linkedin_icon} alt="LinkedIn" className="h-6 w-6" /></Link>
        </div>
      </div>


      <div className="middle w-full md:w-1/3 text-center ">
        <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
        <Link to="/" ><p className="hover:underline cursor-pointer mb-2">Home</p></Link>
        <Link to=""><p className="hover:underline cursor-pointer mb-2">About Us</p></Link>
        <Link to=""><p className="hover:underline cursor-pointer mb-2">Delivery</p></Link>
        <Link to=""><p className="hover:underline cursor-pointer">Privacy Policy</p></Link>
      </div>


      <div className="right w-full md:w-1/3 text-center ">
        <h2 className="text-lg font-semibold mb-4">Get In Touch</h2>
        <p className="mb-2">4685699566</p>
        <Link><p>mail@mail.com</p></Link>
      </div>
    </div>
  );
};

export default Footer;
