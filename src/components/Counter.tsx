import * as React from 'react';
import classes from './Counter.module.scss';
import {useState} from "react";

export const Counter = ()=> {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button className={classes.btn} onClick={()=>increment()}>increment</button>
        </div>
    );
};
