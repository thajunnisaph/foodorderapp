import classes from "./Cart.module.css";
import React from 'react';
import Modal from "../UI/Modal";
const cartitem =[ {
  id: 1,
  name: "sushi",
}
];
const Cart = (props) => {
  return (
    <Modal>
      <ul className={classes.cartitems}>
        {cartitem.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.34</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
