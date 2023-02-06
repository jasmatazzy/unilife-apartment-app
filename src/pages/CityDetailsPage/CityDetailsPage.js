import React from 'react'
import Banner from '../../components/Banner/Banner'
import SearchBox from '../../components/SearchBox/SearchBox'
import './CityDetailsPage.css'

const CityDetailsPage = () => {
  return (
    <div className='city-details-page-container'>
      <Banner 
      header='Search Accomodation'
      description='Whatever you’re after, we can help you find the right student accommodation for you.'
      />
      <SearchBox />
    </div>
  )
}

export default CityDetailsPage