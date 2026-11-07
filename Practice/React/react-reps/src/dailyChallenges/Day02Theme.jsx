import React, { useEffect, useState } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'

const Day02Theme = () => {
  const [theme, setTheme] = useLocalStorage("bodyTheme",false)
  useEffect(() => {
      window.document.documentElement.classList.toggle("dark", theme)

    return () => window.document.documentElement.classList.remove("dark")
  }, [theme])


  return (
    <div>
      <button onClick={() => setTheme((prev) => !prev)}>{theme ? 'Toggle to default' : 'Toggle to Dark'}</button>
    </div>
  )
}

export default Day02Theme

