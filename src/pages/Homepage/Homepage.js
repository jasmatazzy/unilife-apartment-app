import React, {useState,useEffect} from 'react'
import './Homepage.css'
import Banner from '../../components/Banner/Banner'
import SearchBox from '../../components/SearchBox/SearchBox'
import HomepageCompareSection from '../../components/HomepageCompareSection/HomepageCompareSection'
import searchIcon from '../../assets/icon-search.png'
import compareIcon from '../../assets/icon-compare.png'
import billsIcon from '../../assets/icon-bills.png'
import imageofMan from '../../assets/image-manOnPhone.png'
import { BsHeart } from "react-icons/bs";
import { MdRealEstateAgent } from "react-icons/md";
import ApiGetCities from '../../utils/ApiGetCities'


const Homepage = () => {

  const arrayTest = {
    "response": [
      {
        id: 1,
        name: "jas",
        boolean: true
      },
      {
        id: 2,
        name: "marie",
        boolean: false
      },
      {
        id: 3,
        name: "callie",
        boolean: true
      }
    ]
  }

  const handleSeeAllCities = () => {
    console.log('city search handled')
    // ApiGetCities.response.map((array) => { return console.log('i  ran ' + array.name) })
    // arrayTest.response.map((array) => { return console.log('i  ran ' + array.name) })


  }
  const handleFindHomes = () => {
    console.log('home search handled')
  }
  const handleSearchAndCompare = () => {
    console.log('search&compare handled')
  }

  
  return (
    <div className='homepage-container'>
      <Banner />
      <SearchBox handleFindHomes={handleFindHomes} />
      <div>City Cards go here <button onClick={handleSeeAllCities}>See all cities</button></div>
      <div className='homepage-compare-with-header'>
        <h2>Compare all inclusive student homes.</h2>
        <div className='homepage-compare-section'>
          <HomepageCompareSection
            image={searchIcon}
            callToAction='Search'
            description='Find your dream home in the perfect area near your university.'
          />
          <HomepageCompareSection
            image={compareIcon}
            callToAction='Compare'
            description='Compare student accommodation to find the right home for you.'
          />
          <HomepageCompareSection
            image={billsIcon}
            callToAction='Bills Included'
            description='Bills are included in all rent prices. No hidden fees..'
          />
        </div>
      </div>
      <div className='static-homepage-data'>
        <div className='text-and-icons-div'>
          <div className='icons-div'>
            <span><MdRealEstateAgent size={70} /></span>
            <span><BsHeart size={70} /></span>
          </div>
          <div className='text-div'>
            <h3>Best selection</h3>
            <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
            <h3>Your favorite</h3>
            <p>Shortlist your favourite properties and send enquiries in one click.</p>
            <button onClick={handleSearchAndCompare}>search and compare</button>
          </div>
        </div>
        <img src={imageofMan} alt='man holding phone' />
      </div>
    </div>
  )
}

export default Homepage