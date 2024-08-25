import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";
import FoodItem from "./FoodItem";
import propTypes from "prop-types";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="container mx-auto px-4">
      <p className="text-2xl mt-10 mb-10 font-semibold text-center">
        Top Dishes Near You
      </p> 
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem 
           
              key={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                description={item.description}
                category={item.category}
                id={item._id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

FoodDisplay.propTypes = {
  category: propTypes.string,
};

export default FoodDisplay;
