import React, { useState } from 'react';
import useCounter from './customHook';

function CustomCounter() {
    const {count, increment, decrement, resetCount} = useCounter(0);
    const [fruit, setFruit] = useState("banana");
    const allFruits = ["banana", "apple", "mango", "grapes", "orange", "kiwi"];
    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen bg-cyan-800'>
            <p className='mb-5 text-5xl'>{count}</p>
            <button className='bg-amber-950 text-gray-300 py-3 px-2 rounded-sm flex flex-col w-28 hover:text-gray-400' onClick={increment}>Increment</button><br />
            <button className='bg-amber-950 text-gray-300 py-3 px-2 rounded-sm flex flex-col w-28 hover:text-gray-400' onClick={decrement}>decrement</button><br />
            <button className='bg-amber-950 text-gray-300 py-3 px-2 rounded-sm flex flex-col w-28 hover:text-gray-400' onClick={resetCount}>Reset</button><br />
        
        
        <label>Select your Fruits</label>
        <select value={fruit} onChange={e=>setFruit(e.target.value)}>
            {allFruits.map((fruit, index) => (
                <option key={index} value={fruit}>{fruit}</option>
            ))}
            
        </select>
        </div>
    );
}

export default CustomCounter;