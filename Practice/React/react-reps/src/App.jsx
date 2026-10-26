import { useState } from "react"
import Day01Counter from "./dailyChallenges/Day01Counter"
import Day02Theme from "./dailyChallenges/Day02Theme"
import Day03Form from "./dailyChallenges/Day03Form"


function App() {
  
  const [selected, setSelected] = useState(0)

  const challenges =
    [
      { name: "Day -01 Counter" , component: Day01Counter},
      { name: "Day -02 Theme", component: Day02Theme},
      { name: "Day -03 Form", component: Day03Form}
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
