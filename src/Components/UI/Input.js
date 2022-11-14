import React from 'react';
import classes from './Input.module.css';
const Input = (props) =>{
return(
<div className={classes.input }>
    <label htmlFor={props.id}>{props.label}</label>
    <input id={props.id} type={props.type} defaultValue={props.dvalue}></input>
</div>
);
};
export default Input;