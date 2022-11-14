import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
const MealItemForm = (props) =>{
return(
<form className={classes.form}>
    <Input type='number' id='quantity'  label='Amount' dvalue='1'  />
    <button> + Add</button>
</form>
);
};
export default MealItemForm;