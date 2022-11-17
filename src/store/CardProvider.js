import React,{useState} from "react";
import cartContext from "./cart-context";
const CardProvider = (props) => {
    const [Items,SetItems] = useState([]);
    const AddItemTocartHandler = (item) =>{
     const multipleitem= Items.find((cartitem)=>cartitem.id===item.id);
     if(multipleitem){
      multipleitem.Quantity += item.Quantity;
      const newupdateditem=Items.map((crtitm)=>
      crtitm.id ===item.id ? multipleitem:crtitm);
      SetItems(newupdateditem);
    
     }
     else{
      SetItems([...Items,item]);
     }
    }
    const Decreasecartquantityhandler = (id) =>{
      
      const itemreducer= Items.find((item) => item.id===id);
      if(itemreducer.Quantity>1){
      itemreducer.Quantity-=1;
      const newupdatedquantity=Items.map((item)=>
      item.id ===id ? itemreducer:item);
      SetItems(newupdatedquantity);
      }
    }
    const increasecartquantity =() =>{

    }
    const RemoveItemFromCartHandler =(item) =>{
     
    }
  const cartcontext = {
    items: Items,
    totalAmount: 0,
    addItem: AddItemTocartHandler,
    removeItem: RemoveItemFromCartHandler,
    decreasecartquantity:Decreasecartquantityhandler,
    increasecartquantity:increasecartquantity
  };

  return (
    <cartContext.Provider value={cartcontext}>
      {props.children}
    </cartContext.Provider>
  );
};
export default CardProvider;
