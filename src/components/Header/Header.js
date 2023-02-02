import React from 'react'
import { BsHeart } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
// import home from '../../assets/icon-home.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='home-button'>
        🏠
        Unilife
      </div>
      <div className='right-side'>
        <div className='shortlist'>
          <BsHeart />
          Shortlist
        </div>
        <div className='contact-us'>
          <MdOutlineMail />
          Contact Us
        </div>
      </div>
    </div>
  )
}

export default Header