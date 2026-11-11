import { useTheme } from "../contexts/useTheme"

const Day11ThemeContext = () => {
    const {toggleTheme} = useTheme()
  return (
    <div className="buttonsDiv">
      <button onClick={() => toggleTheme()}>Change Theme</button>
    </div>
  )
}

export default Day11ThemeContext
