import React, {useState} from "react";

export default function CounterHooks({initialCount}){
    const [count,setCount] = useState(initialCount);
    return (
        <>
        <button onClick={ () => setCount(prevCount => prevCount-1)}>-</button>
        <span>{count}</span>
        <button onClick={ () => setCount(prevCount => prevCount+1)}>+</button>
        </>
    );
}

