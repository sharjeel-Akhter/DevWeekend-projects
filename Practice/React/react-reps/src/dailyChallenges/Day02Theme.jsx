import React, { useState } from 'react'

const Day02Theme = () => {
  const [theme, setTheme] = useState(false)

  theme ? window.document.documentElement.classList.add("dark") : window.document.documentElement.classList.remove("dark")
  

  return (
    <div>
      <button onClick={()=>setTheme((prev) => !prev)}>{`Toggle Theme`}</button>
    </div>
  )
}

export default Day02Theme

