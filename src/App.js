import React,{ Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meal";
import Cart from "./Components/Cart/Cart";
function App() {
  const [ShowCart,SetShowCart] = useState(false);
  const CartShowHandler = () =>{
    SetShowCart(true);
  }
  const CartHideHandler= () =>{
    SetShowCart(false);
  }
  return (
    <Fragment>   
    {ShowCart && <Cart onCloseCart={CartHideHandler}/>}
    <Header onShowcart={CartShowHandler}></Header>
    <main>
    <Meal />
    </main>
    
    </Fragment>
  );
}

export default App;
