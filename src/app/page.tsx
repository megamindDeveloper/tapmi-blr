import React from 'react'
import EventVenueMapSection from '../components/sections/EventVenueMapSection'
import ProgramOverviewSection from '../components/sections/ProgramOverviewSection'
import ImportantDatesSection from '../components/sections/ImportantDatesSection'
import RegistrationDetailsSection from '../components/sections/RegistrationDetailsSection'
import TrajectoriesSection from '../components/sections/TrajectoriesSection'
import ObjectivesHighlightsSection from '../components/sections/ObjectivesHighlightsSection'
import AboutEventSection from '../components/sections/AboutEventSection'
import HeroSection from '../components/sections/HeroSection'

const page = () => {
  return (
    <>
    <HeroSection/>
    <AboutEventSection/>
    
    <ObjectivesHighlightsSection/>
    {/* <div className="h-[100vh] bg-white"></div> */}
    <TrajectoriesSection/>
<RegistrationDetailsSection/>
    <ImportantDatesSection/>
    <ProgramOverviewSection/>
    <EventVenueMapSection/>
    
    </>
  )
}

export default page