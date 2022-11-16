import React,{  useState } from "react";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meal";
import Cart from "./Components/Cart/Cart";
import CardProvider from "./store/CardProvider";
function App() {
  const [ShowCart,SetShowCart] = useState(false);
  const CartShowHandler = () =>{
    SetShowCart(true);
  }
  const CartHideHandler= () =>{
    SetShowCart(false);
  }
  return (
    <CardProvider>   
    {ShowCart && <Cart onCloseCart={CartHideHandler}/>}
    <Header onShowcart={CartShowHandler}></Header>
    <main>
    <Meal />
    </main>
    
    </CardProvider>
  );
}

export default App;
