import { useState, useEffect } from "react"

const DigitalClock = () => {

  const [dateState, setDateState] = useState(new Date().toLocaleTimeString('es-ES', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }))

  useEffect(() => {
    const interval = setInterval(() => {
      setDateState(new Date().toLocaleTimeString('es-ES', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })

  return(
    <p>
      {dateState}
    </p>
  )
}
 
export default DigitalClock;