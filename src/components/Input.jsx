import React from "react";
import classes from './Input.module.css';

function Input({setValue}) {
    return (
        <div className={classes.input}>
        <input type="text"  placeholder='You emogi?'  onChange={(e) => setValue(e.target.value)} /*style={{ display: 'block', margin: '60px auto', textAlign: 'center' }}*/ />
      </div>  
    )
}
export default Input