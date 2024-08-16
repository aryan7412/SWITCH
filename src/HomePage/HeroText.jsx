import React from 'react'
import AnimatedText from './AnimatedText'

function HeroText() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center absolute top-52">
        <div>
          <img className='h-28 w-36' src="src/assets/SWITCH_LOGO.png" />
        </div>
        <div>
          <AnimatedText />
        </div>
        <div className='h-12 w-40 border border-black rounded-md text-center pt-2 hover:shadow-lg bg-white'>
          <button>
            Upcoming Events
          </button>
        </div>
      </div>
    </div>
  )
}


export default HeroText