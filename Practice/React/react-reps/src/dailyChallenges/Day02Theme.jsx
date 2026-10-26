import React, { useEffect, useState } from 'react'

const Day02Theme = () => {
  const [theme, setTheme] = useState(false)
  useEffect(() => {
      window.document.documentElement.classList.toggle("dark", theme)

    return () => window.document.documentElement.classList.remove("dark")
  }, [theme])


  return (
    <div>
      <button onClick={() => setTheme((prev) => !prev)}>Toggle Theme</button>
    </div>
  )
}

export default Day02Theme

