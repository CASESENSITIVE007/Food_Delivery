import { menu_list } from "../assets/assets";
import propTypes from "prop-types";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="menu" className="flex  justify-between ">{menu_list.map((item, index) => (
        <div key={index}onClick={() => setCategory((prev) =>prev === item.menu_name ? "All" : item.menu_name)}className="menuItem">
          <img className={category === item.menu_name? " cursor-pointer  border-red-700  border-4 rounded-full ": "cursor-pointer"}
            src={item.menu_image} alt=""/>
          <p className="flex justify-center font-serif  ">{item.menu_name}</p>
        </div>
      ))}
    </div>
  );
};

ExploreMenu.propTypes = {
  category: propTypes.string,
  // setCategory: propTypes.string,
};

export default ExploreMenu;
