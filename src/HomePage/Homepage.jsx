import React from 'react'
import Design from "./Hero"
import HeroText from "./HeroText"
import TeamPhotos from "../OurTeam/TeamPhotos"
import TeamPhoto from "../OurTeam/TeamPhotos.json"
import Testimonial from './Testimonial'
import FAQ from "./FAQ"
import App from '../App'

function Homepage() {
  return (
    <App>
      <Design/>
      <HeroText />
      <TeamPhotos TeamPhoto={TeamPhoto}/>
      {/* <Testimonial/> */}
      <FAQ />
    </App>
  )
}

export default Homepage