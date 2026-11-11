import { useState } from "react"
import useLocalStorage from "../Hooks/useLocalStorage"

const list = [
  {id: 1, question: "what is react?", answer: "react is a javascript library for building user interfaces"},
  {id: 2, question: "What is dom?", answer: "The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content."},
  {id: 3, question: "What is virtual dom?", answer: "The virtual DOM (VDOM) is a programming concept where an ideal, or 'virtual', representation of a UI is kept in memory and synced with the 'real' DOM by a library such as ReactDOM."}

]

function Accordion({ qs, onToggle, isOpen }){

  return (
    <div>
      <h2 onClick={onToggle} className="font-bold text-xl cursor-pointer">{qs.question}</h2>
      {
        isOpen && <p>{qs.answer}</p>
        
      }
    </div>
  )
}
const Day05Accord = () => {
  const [openId, setOpenId] = useLocalStorage("AccorId", null)

  const onToggle = (id) => {
    setOpenId(() => openId === id ? null : id)
  }
  return (
    <div className="flex flex-col gap-2">
      FAQ's
      {
        list.map((qs) => (
          <Accordion qs={qs} key={qs.id} isOpen={openId === qs.id} onToggle={() => onToggle(qs.id)}/>
        ))
      }
    </div>
  )
}

export default Day05Accord
