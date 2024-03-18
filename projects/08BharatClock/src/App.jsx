import { useState } from 'react'

import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClockHeading>

      </ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </>
  )
}

export default App
