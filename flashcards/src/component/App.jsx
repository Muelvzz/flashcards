import { useState } from 'react'
import Nav from "./Nav.jsx"
import Content from "./Content.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav />
        <Content />
      </div>
    </>
  )
}

export default App
