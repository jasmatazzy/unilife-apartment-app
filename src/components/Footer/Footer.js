import React from 'react'
import './Footer.css'
import { BsFacebook } from "react-icons/bs";
import {AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='blue-div'>
        <div>
          <h2>Keep in touch</h2>
          <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
          <input type="email" placeholder='Your email' name='userEmail'/>
        </div>
        <div>
        <h2> Let's Socialize</h2>
        <p><AiFillFacebook /> Facebook</p>
        <p><AiFillTwitterCircle/> Twitter</p>
        <p><AiFillInstagram/>Instagram</p>
        </div>
      </div>
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