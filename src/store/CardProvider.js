import React,{useState} from "react";
import cartContext from "./cart-context";
const CardProvider = (props) => {
    const [Items,SetItems] = useState([]);
    const AddItemTocartHandler = (item) =>{
     
      SetItems([...Items,item]);
    }
    const RemoveItemFromCartHandler =(item) =>{
     
    }
  const cartcontext = {
    items: Items,
    totalAmount: 0,
    addItem: AddItemTocartHandler,
    removeItem: RemoveItemFromCartHandler,
  };

  return (
    <cartContext.Provider value={cartcontext}>
      {props.children}
    </cartContext.Provider>
  );
};
export default CardProvider;
