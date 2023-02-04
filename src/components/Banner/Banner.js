import React from 'react'
import './Banner.css'

const Banner = (props) => {
  const {header, description}=props
  return (
    <div className='banner'>
      <h1>{header}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Banner