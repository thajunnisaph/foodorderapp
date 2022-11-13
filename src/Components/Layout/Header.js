import React, { Fragment } from "react";
import mealsimage from '../../assets/meals.jpg'
import classes from './Header.module.css';
import CartButton from "./CartButton";
const Header = () =>{
return(
<Fragment>
    <header className={classes.header}>
        <h2>React Meals</h2>
        <CartButton></CartButton>
    </header>
    <div className={classes.mainimage}>
        <img src={mealsimage} alt='all delecious food here'></img>
    </div>
</Fragment>
);
}
export default Header;