import { createContext, useState } from "react";
import propTypes from "prop-types";
import { food_list } from "../assets/assets";
import { useEffect } from "react";
export const StoreContext = createContext(null);
const StoreContextProvider = ({ children }) => {
  // const [count ,setCount] = useState(0);
  const [cartItems,setCartItems] = useState({});

  //functions start here



  const addItems=(itemId)=>{
    if(!cartItems[itemId]){
      setCartItems((prev)=>({...prev, [itemId]:1}))
    }

    else {setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }

  }
  const removeItems=(itemId)=>{ 

setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  

  }

  
  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])
  



  //fnctions end here


  const contextValue = {
  
    food_list,addItems, removeItems,cartItems ,setCartItems ,
   
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
StoreContextProvider.propTypes = {
  children: propTypes.node.isRequired
};

export default StoreContextProvider;
