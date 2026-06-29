import React, { useState } from 'react';

function FunctionalClassComp(props) {
    const [count, setCount] = useState(0);
    const Increment = () => {
        setCount(count + 1);
    }
    const Decrement = () => {
        setCount(count - 1);
    }
    const Reset = () => {
        setCount(0);
    }
    return (
        <div>
            <p>Count: {count}</p> 
            <button onClick={Increment}>Add 1</button>
            <button onClick={Decrement}>Minus 1</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}

export default FunctionalClassComp;