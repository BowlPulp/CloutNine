import React from 'react'
import FlipNavWrapper from '../components/FlipNav'
import { ImageTrailHero } from '../components/ImageTrailHero'
import Services from '../components/Services'
import PricingTiers from '../components/PricingTiers'

const LandingPage = () => {
  return (
    <>
    <ImageTrailHero/>
    <Services/>
    <PricingTiers/>
    </>
  )
}

export default LandingPage