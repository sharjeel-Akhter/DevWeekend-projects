import React, { useState } from 'react'

const Day03Form = () => {
    const [form, setForm] = useState({ name: "", price: ""})

    const handleForm = (e) => {
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
  return (
    <div>
      <form>
        <input name='name' value={form.name} onChange={handleForm} type="text"  placeholder='Add name'/>
        <input name='price' value={form.price} onChange={handleForm} type="number" placeholder='Add price' />
      </form>
        <hr />
      <div>
        <p>Name: {form.name}</p>
        <p>Price: {form.price}</p>
      </div>

      <button onClick={() => {setForm({name:"", price:""})}}>Reset</button>
    </div>
  )
}

export default Day03Form
