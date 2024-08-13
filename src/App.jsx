import React from "react"
// import Design from "./HomePage/Hero"
// import Background from './HomePage/Background'
import Gallery from "./GallerySection/Gallery"
import Photos from './GallerySection/Photos.json'
// import FAQ from "./HomePage/FAQ"
// import Nav from "./Nav"
// import Testimonial from "./HomePage/Testimonial"
// import testimonial from './HomePage/testimonial.json'
// import Clients from "./HomePage/Testimonial"
// import HeroText from "./HomePage/HeroText"

function App() {

  return(
    <div className="">
      {/* <Clients /> */}
      {/* <Nav/>
      <HeroText /> */}
      {/* <Testimonial/> */}
      {/* <Background /> */}
      <Gallery Photos={Photos}/>

      <div className="">
        {/* <Design/> */}
      </div>
      <div>
        {/* <FAQ /> */}
      </div>
    </div>
  )
}

export default App
