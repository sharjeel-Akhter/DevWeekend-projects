import { useEffect, useState } from "react"

const useDebounce = (value, delay) => {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            
        }, delay)    
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default useDebounce
