import { useState } from 'react'

function Task({task}) {
    console.log(task.task)
  return (
    <div>
      <li>{task.task}</li>
      <button onClick={()=>console.log("Task Completed")}>Completed</button>
      <button onClick={()=>console.log("Task Deleted")}>Delete</button>
    </div>
  )
}


const Day04Todo = () => {

    const [tasks, setTasks] = useState([])
    const [form, setForm] = useState({id:"", task:"", completed:false})

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks((prev) => ([...prev, form]))
        console.log("Form Submitted")
    }
    console.log(tasks)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={form} onChange={(e) => setForm(e.target.value)} type="text" placeholder='Add a Task' />
                <button type='submit'>Add</button>
            </form>

        <ul>
            {
                tasks.map((task, index)=>(
                    <Task key={task.id} task={task}/>
                ))
            }
        </ul>
        </>
    )
}

export default Day04Todo
