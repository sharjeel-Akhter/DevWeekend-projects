import React, { useState } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'

const Day03Form = () => {
    const [form, setForm] = useLocalStorage("form",{ name: "", price: ""})

    const handleForm = (e) => {
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
        
    }
  return (
    <div className='buttonsDiv'>
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
