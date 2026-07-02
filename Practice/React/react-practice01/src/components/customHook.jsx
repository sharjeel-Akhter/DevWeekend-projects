import { useState } from "react";

export default function useCounter(initialValue = 0){
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(c => c+10);
    const decrement = () => setCount(c => count>0 ? c-10 : setCount(initialValue));
    const resetCount = () => setCount(initialValue);

    return {count, increment, decrement, resetCount}
}