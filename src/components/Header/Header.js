import React from 'react'
import { BsHeart } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import home from '../../assets/icon-multi-home.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='home-button'>
        <Link to={'/'} className='link-to-button'>
          <img src={home} alt='home' />
          Unilife
        </Link>
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