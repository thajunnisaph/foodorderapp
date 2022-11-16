import React, {useContext}from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './CartButton.module.css';
import cartContext from "../../store/cart-context";
const CartButton = (props) =>{
   const crtcntx=useContext(cartContext);
   let quantity=0;
   crtcntx.items.forEach((item) =>{
    quantity=quantity+Number(item.Quantity);
   })
return(
    <button className={classes.button} onClick={props.onclick}>
        <span className={classes.icon}>
         <CartIcon />
        </span>
        <span >Your Cart</span>
        <span className={classes.badge}>{quantity}</span>
    </button>
)

}
export default CartButton;