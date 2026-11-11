import { useState, lazy, Suspense } from "react"
import Modal from "./components/Modal";
import ThemeProvider from "./contexts/useTheme";

const challenges =
  [
    { name: "Day -01 Counter", component: lazy(() => import("./dailyChallenges/Day01Counter")) },
    { name: "Day -02 Theme", component: lazy(() => import("./dailyChallenges/Day02Theme")) },
    { name: "Day -03 Form", component: lazy(() => import("./dailyChallenges/Day03Form")) },
    { name: "Day -04 Todo", component: lazy(() => import("./dailyChallenges/Day04Todo")) },
    { name: "Day -05 Accord", component: lazy(() => import("./dailyChallenges/Day05Accord")) },
    { name: "Day -08 Effect", component: lazy(() => import("./dailyChallenges/Day08Effect")) },
    { name: "Day -11 Theme Context", component: lazy(() => import("./dailyChallenges/Day11ThemeContext")) },
    { name: "Day -12 Cart Context", component: lazy(() => import("./dailyChallenges/Day12CartContext")) },
  ]

function App() {
  const [selected, setSelected] = useState(0)
  const SelectedComponent = challenges[selected].component
  const [isOpen, setIsOpen] = useState(false);


  return (
    <ThemeProvider>
    
    { isOpen && <Modal setIsOpen={setIsOpen}/> }
      <header>
        <p>React-Reps</p>
        <div onClick={() => setIsOpen(true)}>Open Modal</div>
        <h3>Cart-Items-Count:</h3>
      </header>
      <div>
        <nav>
          {
            challenges.map((challenge, index) => (
              <button key={index} onClick={() => setSelected(index)} className={selected === index ? "active" : ""}>{challenge.name}</button>
            ))}
        </nav>

        <Suspense fallback={<p>Loading...</p>}>
          <SelectedComponent />
        </Suspense>

      </div>
    </ThemeProvider>
  )
}

export default App
