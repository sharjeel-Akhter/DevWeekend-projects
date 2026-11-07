import { useEffect, useState } from "react"

const useDebounce = (value, delay) => {
  const [debounced, setDebounce] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, delay)
    return () => clearTimeout(timer)
  }, [delay, value])
  
  return (debounced)

}

export default useDebounce;
