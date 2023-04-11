import React from "react";
import classes from "./Card.module.css";
import App from "../App";

function Card({emoji,value}) {
    return (
    <div className={classes.emoji}>
            {emoji.
            filter(elem => {
              if (elem.title.toLowerCase().includes(value.split(' ').join('').toLowerCase())) {
                return true
              }
              return false
            })
            .map((elem, index) => (
              <ul className={classes.card} key={index}>
                <li className={classes.symbol}>{elem.symbol}</li>
                <li className={classes.title}>{elem.title}</li>
                <li className={classes.keywords}>{elem.keywords}</li>
              </ul>
            ))}
          
        </div>
    )
 
}

export default Card