import React from 'react'

const Card = ({children}) => {
  return (
    <div className='cursor-pointer object-cover duration-1000'>
        {children}
    </div>
  )
}

export default Card