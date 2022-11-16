import React,{ useContext} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import cartContext from '../../../store/cart-context';
const MealItemForm = (props) =>{
    const cntx1=useContext(cartContext);
    const addItemtoCart = (event)=>{
    event.preventDefault();
    const quantity= document.getElementById('quantity'+ props.id).value;
    cntx1.addItem({...props.item,Quantity:quantity});
    
    }
return(
<form className={classes.form}>
    <Input label='Amount' input={{
        id:'quantity'+ props.id,
        type:'number',
        min:'1',
        max: '5',
        step:'1',
        defaultValue: '1'
    }} />
    <button onClick={addItemtoCart}> + Add</button>
</form>
);
};
export default MealItemForm;