import React from 'react'
import './Homepage.css'
import Banner from '../../components/Banner/Banner'
import SearchBox from '../../components/SearchBox/SearchBox'
import HomepageCompareSection from '../../components/HomepageCompareSection/HomepageCompareSection'


const Homepage = () => {
  return (
    <div>
      <Banner />
      <SearchBox />
      <div>City Cards go here <button>See all cities</button></div>
      <div className='homepage-compare-section'>
        <HomepageCompareSection />
        <HomepageCompareSection />
        <HomepageCompareSection />
      </div>
      <div>Static homepage data section</div>
    </div>
  )
}

export default Homepage