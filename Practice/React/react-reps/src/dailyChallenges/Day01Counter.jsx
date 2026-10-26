import { useState } from 'react'

const Day01Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <button onClick={() => setCount((prev) => prev > 0 ? prev - 1 : 0)}>Subtract</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Day01Counter
