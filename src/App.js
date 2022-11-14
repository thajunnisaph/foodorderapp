import { Fragment } from "react";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meal";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <Fragment>   
    <Cart />
    <Header></Header>
    <main>
    <Meal />
    </main>
    
    </Fragment>
  );
}

export default App;
