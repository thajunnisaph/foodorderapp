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
      else if(itemreducer.Quantity ===1){
        alert('Are you sure? you want to remove from Cart');
        const otheritem= Items.filter((item)=>item.id !== itemreducer.id)
        SetItems(otheritem);
      }
    }
    
    const increasecartquantity =(id) =>{
      const cartitem = [...Items];
      const itemindex=cartitem.findIndex((item)=> item.id===id);
      console.log(itemindex);
      cartitem[itemindex].Quantity++;
      SetItems(cartitem);
      // const itemincrease= Items.find((item) => item.id===id);
      // itemincrease.Quantity++;
      // const newupdatedincreaseqnty=Items.map((item)=>
      // item.id ===id ? itemincrease:item);
      // SetItems(newupdatedincreaseqnty);
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
