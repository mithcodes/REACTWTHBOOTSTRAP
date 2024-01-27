import { useState } from 'react'

import './App.css'
import Parent from './components/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <h1>React function props example</h1>
    <Parent></Parent>
  </div>
  )
}

export default App
