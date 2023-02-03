import React from 'react'
import './Homepage.css'
import Banner from '../../components/Banner/Banner'
import SearchBox from '../../components/SearchBox/SearchBox'
import HomepageCompareSection from '../../components/HomepageCompareSection/HomepageCompareSection'
import searchIcon from '../../assets/icon-search.png'
import compareIcon from '../../assets/icon-compare.png'
import billsIcon from '../../assets/icon-bills.png'


const Homepage = () => {
  return (
    <div className='homepage-container'>
      <Banner />
      <SearchBox />
      <div>City Cards go here <button>See all cities</button></div>
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
      <div>Static homepage data section</div>
    </div>
  )
}

export default Homepage