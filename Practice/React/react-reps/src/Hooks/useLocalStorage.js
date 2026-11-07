import { useState } from "react"

export default function useLocalStorage() {
    const [storage, setStorage] = useState(() => 
        localStorage.getItem("storedData") ? localStorage.getItem("storedData") : ""
    )

    const setData = (data) => {
        setStorage(() => localStorage.setItem("storedData",data))
    }
  return ({storage, setData})
}
