import React from 'react'
import './HomepageCompareSection.css'

const HomepageCompareSection = ({image, callToAction, description}) => {
  return (
    <div id='homepage-compare-section-container'>
      <img src={image} alt='icon'/>
      <h3>{callToAction}</h3>
      <p>{description}</p>
    </div>
  )
}

export default HomepageCompareSection