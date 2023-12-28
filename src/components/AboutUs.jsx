import React from 'react'
import "./AboutUs.css"
import HoldingPlant from "../assests/Holding_Plant.png"

function AboutUs() {
  return (
    <div className='AboutUs'>
      <div className='AboutUs_Container'>
        <div className='ShortDescription_Container'>
          <img src={HoldingPlant} alt="" />
          <h3>Best Shop</h3>
        </div>
        <div className='ShortDescription_Container'>
          <img src="" alt="" />
          <h3>Best Shop</h3>
        </div>
        <div className='ShortDescription_Container'>
          <img src="" alt="" />
          <h3>Best Shop</h3>
        </div>
      </div>
    </div>
  )
}

export default AboutUs