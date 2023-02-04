import React from 'react'
import "./HomeCardComponent.css"

const HomeCardComponent = (props) => {
  const{cityName, propCount, backgroundImage}= props;
  return (
    <div className='home-card-component-container' style={{ 
      backgroundImage: `url(${backgroundImage})` 
    }}>
      <h2>{cityName}</h2>
      {propCount} properties
    </div>
  )
}

export default HomeCardComponent