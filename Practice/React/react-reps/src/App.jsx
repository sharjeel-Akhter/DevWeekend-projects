import { useState, lazy, Suspense } from "react"

const challenges =
  [
    { name: "Day -01 Counter", component: lazy(() => import("./dailyChallenges/Day01Counter")) },
    { name: "Day -02 Theme", component: lazy(() => import("./dailyChallenges/Day02Theme")) },
    { name: "Day -03 Form", component: lazy(() => import("./dailyChallenges/Day03Form")) },
    { name: "Day -04 Todo", component: lazy(() => import("./dailyChallenges/Day04Todo")) },
    { name: "Day -05 Accord", component: lazy(() => import("./dailyChallenges/Day05Accord")) }
  ]

function App() {

  const [selected, setSelected] = useState(0)
  const SelectedComponent = challenges[selected].component

  return (
    <div>
      <nav>
        {
          challenges.map((challenge, index) => (
            <button key={index} onClick={() => setSelected(index)}>{challenge.name}</button>
          ))}
      </nav>

      <Suspense fallback={<p>Loading...</p>}>
        <SelectedComponent />
      </Suspense>

    </div>
  )
}

export default App
