import React, { useState, useEffect } from 'react'
import './SeeAllCitiesPage.css'
import Banner from '../../components/Banner/Banner'

const SeeAllCitiesPage = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch("https://unilife-server.herokuapp.com/cities?limit=20")
      .then(res => res.json())
      .then(
        (result) => {
          setCities(result.response);
        },
      ).catch(err => console.log(err))
  }, [])
  
  function hoverColor(e) {
    e.target.style.background = '#3A5295';
    e.target.style.color = 'white';
  }
  function originalColor(e) {
    e.target.style.background = 'white';
    e.target.style.color = 'black';
  }
  return (
    <div className='see-all-cities-page-container'>
      <Banner
        header='Student Accomodation'
        description='UniLife have student accommodation available across the UK.
      Whatever you’re after, we can help you find the right student accommodation for you. '
      />
      <h1>Search by City</h1>
      <div className='city-button-container'>
        {
          cities.map(
            (city)=><button onMouseOver={hoverColor} onMouseLeave={originalColor}>{city.name}</button>
          )
        }
      </div>
    </div>
  )
}

export default SeeAllCitiesPage