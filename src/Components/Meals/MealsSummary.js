import React from 'react';
import classes from './MealSummary.module.css';
const MealsSummary = () =>{
return (
    <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favourite meal from our broad section of available meals and enjoy a delicious dinner
             or lunch at home. </p>
        <p>All our meals are cooked with high-quality ingrediants and just-in-time and 
            of course by experienced chefs!  </p>
    </section>
)
}
export default MealsSummary;