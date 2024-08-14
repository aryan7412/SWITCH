import React from "react"
// import Design from "./HomePage/Hero"
// import Gallery from "./GallerySection/Gallery"
// import Photos from './GallerySection/Photos.json'
// import FAQ from "./HomePage/FAQ"
// import Nav from "./Nav"
// import HeroText from "./HomePage/HeroText"
// import Testimonial from "./HomePage/Testimonial"
import TeamPhotos from "./OurTeam/TeamPhotos"
import TeamPhoto from "./OurTeam/TeamPhotos.json"

function App() {

  return(
    <div>
      {/* <Clients /> */}
      {/* <Testimonial/> */}
      {/* <Nav/> */}
      {/* <HeroText /> */}
      {/* <Gallery Photos={Photos}/> */}
      <TeamPhotos TeamPhoto={TeamPhoto}/>
      <div>
        {/* <Design/> */}
        <div className="relative">
        </div>
      </div>
      <div>
        {/* <FAQ /> */}
      </div>
    </div>
  )
}

export default App
