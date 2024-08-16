import React from 'react'
import Gallery from "./Gallery"
import Photos from './Photos.json'
import App from "../App"

function Gallerypage() {
  return (
    <App>
        <Gallery Photos={Photos}/>
    </App>
  )
}

export default Gallerypage