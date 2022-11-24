import classes from "./CartItem.module.css";
import React, { useContext } from "react";
import cartContext from "../../store/cart-context";
const CartItem = (props) => {
  const ctx = useContext(cartContext);
  const quantityReducerHandler = (event) => {
    ctx.decreasecartquantity(props.id);
  };
  const quantityIncreaseHandler = (event) => {
    ctx.increasecartquantity(props.id);
  };
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>{props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={quantityReducerHandler}>-</button>
        <button onClick={quantityIncreaseHandler}>+</button>
      </div>
    </li>
  );
};
export default CartItem;
