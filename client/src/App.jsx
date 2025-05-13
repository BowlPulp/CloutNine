import { useState } from 'react'
import './App.css'
import AboutUsPage from './pages/AboutUsPage'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './Layouts/Layout'
import PortfolioPage from './pages/PortfolioPage'
import ContactUsPage from './pages/ContactUsPage'
import ServicesShowcase from './pages/ServicesShowcase'
import FAQPage from './pages/FaqPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path='/services' element={<ServicesShowcase/>}/>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
