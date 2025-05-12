import { useState } from 'react'
import './App.css'
import FlipNavWrapper from './components/FlipNav'
import Services from './components/Services'
import { ImageTrailHero } from './components/ImageTrailHero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FlipNavWrapper/>
     <ImageTrailHero/>
     <Services/>
    </>
  )
}

export default App
