import React from 'react'
import '../pages/Contact.css'
import Twitter from '../assests/twitter.svg'
import Insta from '../assests/instagram.svg'
import Facebook from '../assests/facebook.svg'

function Contact() {
  return (
    <div className='Contact'>
        <div className='Contact_Container'>
            <div className='News'>
                <h1>Get the Scoop</h1>
                <p>Subscribe to our newsletter</p>
                <div className='miniform'>
                    <input type="email" placeholder='Email address' name="" id="" />
                    <button>Sign Up</button>
                </div>
            </div>
            <hr  width = "100%" size = "1" color='#009116'/>
            <div className='FollowUs'>
                <h1>Follow Us</h1>
                <div className='LinksLogo'>
                    <a href="#">
                        <img src={Facebook} alt="" />
                    </a>
                    <a href="#">
                        <img style={{filter:"invert(1)"}} src={Insta} alt="" />
                    </a>
                    <a href="#">
                        <img src={Twitter} alt="" />
                    </a>
                </div>
            </div>
            <hr  width = "100%" size = "1" color='#009116'/>
            <div className='EmailContact'>
                <h1 className='email'>florafolio@gmail.com</h1>
                <p>Contact Us if you have any problem and we will solve every possible problem</p>
                <p>Copyright © 2024 FloraFolio</p>
            </div>
        </div>
    </div>
  )
}

export default Contact