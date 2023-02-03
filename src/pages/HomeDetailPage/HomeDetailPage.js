import React from 'react'
import './HomeDetailPage.css'

const HomeDetailPage = () => {
  return (
    <div className='home-detail-page-container'>
      <div className='pics-and-basics-container'>
        <div className='pics-container'>"I contain pics"</div>
        <div className='basics-container'>" I contain address and logistics"</div>
      </div>
      <div className='description-and-bedroom-pricing-container'>
        <div className='description'>
          <h2>Description</h2>
          <p>"I contain the apartment description"</p>
        </div>
        <div className='basics-container'>
          <h2>Bedroom Prices</h2>
          <p>"I contain info on price per bedroom"</p>
        </div>
      </div>
      <div className='key-features-container'>
        <h2>Key Features</h2>
        <p>"I contain info on key features"</p>
      </div>
    </div>
  )
}

export default HomeDetailPage