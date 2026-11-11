import React, { useEffect, useState } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'
import { useTheme } from '../contexts/useTheme'

const Day02Theme = () => {
  // const [theme, setTheme] = useLocalStorage("bodyTheme",false)

  // useEffect(() => {
  //     window.document.documentElement.classList.toggle("dark", theme)

  //   return () => window.document.documentElement.classList.remove("dark")
  // }, [theme])

  
  const {theme, toggleTheme} = useTheme()
  console.log(theme)
  return (
    <div className='buttonsDiv'>
      <button onClick={() => toggleTheme()}>{theme != "light" ? 'Toggle to default' : 'Toggle to Dark'}</button>
    </div>
  )
}

export default Day02Theme

