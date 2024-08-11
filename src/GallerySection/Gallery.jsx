import React from 'react'
import Card from './Card'

function Gallery({Photos}) {
  return (
    <div>
        <h3 className='text-center text-4xl font-light tracking-wider pb-2 pt-6'>Gallery</h3>
        <p className='text-center font-extralight pb-10 '>Images that tell story</p>
        <div className='grid grid-cols-4 ml-2 mr-2 gap-2 items-center overflow-hidden'>
        {Photos.map((pht)=>(
            
                <Card>
                    <div className='mx-1 mb-4 overflow-hidden'>
                        <img className='transition hover:scale-110' src={pht.image} />
                    </div>
                </Card>

        ))}
        </div>
    </div>
  )
}

export default Gallery