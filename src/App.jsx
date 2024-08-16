import React from "react"
import Nav from "./Nav"
import Design from "./HomePage/Hero"
import HeroText from "./HomePage/HeroText"
import FAQ from "./HomePage/FAQ"
// import Gallery from "./GallerySection/Gallery"
// import Photos from './GallerySection/Photos.json'
// import TeamPhotos from "./OurTeam/TeamPhotos"
// import TeamPhoto from "./OurTeam/TeamPhotos.json"

function App() {

  return(
    <div>
      <Nav/>
      {/* <Gallery Photos={Photos}/> */}
      {/* <TeamPhotos TeamPhoto={TeamPhoto}/> */}
      <Design/>
      <HeroText />
      <FAQ />

    </div>
  )
}

export default App
