import React, { useState } from 'react'

const Day04Todo = () => {

    const [tasks, setTasks] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks((prev)=>([...prev, e.target.value]))
        console.log("Form Submitted")
    }
    console.log(tasks)
  return (
    <form onSubmit={handleSubmit}>
      <input value={(e) => (e.target.value)} type="text" placeholder='Add a Task'/>
      <button type='submit'>Add</button>
    </form>
  )
}

export default Day04Todo
