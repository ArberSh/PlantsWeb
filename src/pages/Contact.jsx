import React from 'react'
import '../pages/Contact.css'

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
            <div className='FollowUs'>
                <h1>Follow Us</h1>
                <div className='LinksLogo'>
                    <a href="#">
                        <img src="" alt="" />
                    </a>
                    <a href="#">
                        <img src="" alt="" />
                    </a>
                    <a href="#">
                        <img src="" alt="" />
                    </a>
                    <a href="#">
                        <img src="" alt="" />
                    </a>
                </div>
            </div>
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