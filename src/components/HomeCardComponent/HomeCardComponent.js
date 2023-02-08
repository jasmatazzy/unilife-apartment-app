import React from 'react'
import "./HomeCardComponent.css"

const HomeCardComponent = ({city}) => {
  // const{cityName, propCount, backgroundImage}= props;
  return (
    <div className='home-card-component-container' style={{ 
      backgroundImage: `url(${city?.image_url
      })` 
    }}>
      <h2>{city?.name}</h2>
      {city?.property_count} properties
    </div>
  )
}

export default HomeCardComponent