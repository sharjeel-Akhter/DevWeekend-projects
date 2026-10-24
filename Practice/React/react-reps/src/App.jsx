import { useState } from "react"
import Day01Counter from "./dailyChallenges/Day01Counter"
import Day02Counter from "./dailyChallenges/Day02Counter"


function App() {
  
  const [selected, setSelected] = useState(0)

  const challenges =
    [
      { name: "Day -01 Counter" , component: Day01Counter},
      { name: "Day -02 Counter", component: Day02Counter}
    ]

    const SelectedComponent = challenges[selected].component

  return (
    <div>
      <nav>
        {
          challenges.map( (challenge, index) => (
            <button key={index} onClick={() => setSelected(index)}>{challenge.name}</button>
          ))}
      </nav>

      <SelectedComponent />

    </div>
  )
}

export default App
