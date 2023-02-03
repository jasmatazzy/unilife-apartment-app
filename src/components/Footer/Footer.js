import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='blue-div'>blue</div>
      <div className='black-div'>
        <div>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy & Cookie Policies</p>
        </div>
        <div>
          <p>2022</p>
          <p>© Unilife</p>
        </div>
      </div>
    </div>
  )
}

export default Footer