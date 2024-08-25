import propTypes from "prop-types";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
const FoodItem = ({ id, image, name, price, description, category }) => {
  let { addItems, removeItems, cartItems } = useContext(StoreContext);

  return (
    <div className="relative ">
      <div
        
        className="foodDisplayItem p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        {/* <p>{id}</p> */}
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />

        {!cartItems[id] ? (
          <img className="absolute right-4 mt-2"
            onClick={() => addItems(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="absolute flex gap-3 items-center mt-4 right-4" >
            <img 
              onClick={() => removeItems(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addItems(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}

        <div className="p-4">
          <p className="text-lg font-medium mb-2">{name}</p>
          <p className="text-gray-700 mb-4">${price}</p>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </div>
      {/* {console.log(cartItems)} */}
    </div>
  );
};

FoodItem.propTypes = {
  id: propTypes.string,
  image: propTypes.string,
  name: propTypes.string,
  price: propTypes.number,
  description: propTypes.string,
  category: propTypes.string,
};

export default FoodItem;
