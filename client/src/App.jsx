import { useState } from 'react'
import './App.css'
import FlipNavWrapper from './components/FlipNav'
import Services from './components/Services'
import { ImageTrailHero } from './components/ImageTrailHero'
import AboutUsPage from './pages/AboutUsPage'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './Layouts/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path='/about' element={<AboutUsPage/>}/>
          

        <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>

    </>
  )
}

export default App
