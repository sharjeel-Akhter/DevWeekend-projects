import { useState } from 'react'

function Task({ task, handleDel, toggleTask }) {


    return (
        <div>
            <li>{task.task}</li>
            <button onClick={() => toggleTask(task.id)}>{task.completed ? "Undo" : "complete"}</button>
            <button onClick={()=>handleDel(task.id)}>Delete</button>
        </div>
    )
}


const Day04Todo = () => {

    const [tasks, setTasks] = useState([])
    const [text, setText] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return

        const newTask = { id: Date.now(), task: text.trim(), completed: false };
        setTasks((prev) => ([...prev, newTask]))
        setText("")
    }

    const toggleTask = (id) => {
        setTasks((prev) => prev.map((task) => task.id === id ? {...task, completed: !task.completed} : task ))
    }

    const handleDel = (id) => {
        setTasks((prev) => prev.filter((task)=> task.id != id))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Add a Task' />
                <button type='submit'>Add</button>
            </form>

            <ul>
                {
                    tasks.map((task, index) => (
                        <Task key={task.id} task={task} handleDel={handleDel} toggleTask={toggleTask}/>
                    ))
                }
            </ul>
        </>
    )
}

export default Day04Todo
