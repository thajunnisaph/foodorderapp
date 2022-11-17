import classes from "./Cart.module.css";
import React,{useContext} from 'react';
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import cartContext from "../../store/cart-context";
// const cartitem =[ {
//   id: 1,
//   name: "sushi",
// }
// ];
const Cart = (props) => {
  const cartitem =useContext(cartContext);
  let totalamnt= 0;
  cartitem.items.forEach((item) =>{
    totalamnt= totalamnt+ item.Quantity*item.price;
  }) 
  totalamnt = totalamnt.toFixed(2); 
  return (
    <Modal backdropClose={props.onCloseCart}>
      <ul className={classes.cartitems}>
        {cartitem.items.map((item) => {
          return <CartItem key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.Quantity} ></CartItem>
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamnt}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
