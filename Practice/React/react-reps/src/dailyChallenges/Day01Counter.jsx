import { useState } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'

const Day01Counter = () => {
  const [count, setCount] = useLocalStorage("count", 0)
  return (
    <div >
      <h3>{count}</h3>
      <div className='buttonsDiv'>
        <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
        <button onClick={() => setCount((prev) => prev > 0 ? prev - 1 : 0)}>Subtract</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Day01Counter
