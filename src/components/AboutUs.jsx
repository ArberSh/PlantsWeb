import React from 'react'
import "./AboutUs.css"
import HoldingPlant from "../assests/Holding_Plant.png"
import leaves from "../assests/leaves.png"
import ShoppingBag from "../assests/shopping-bag.png"

function AboutUs() {
  return (
    <div className='AboutUs'>
      <div className='AboutUs_Container'>
        <div className='ShortDescription_Container'>
          <img src={leaves} alt="" />
          <h3>It has<span className='green'> 30,000+</span> plants</h3>
        </div>
        <div className='ShortDescription_Container'>
          <img style={{padding:"4%"}} src={ShoppingBag} alt="" />
          <h3>Best Plant Shop in the <span className='green'>World</span></h3>
        </div>
        <div className='ShortDescription_Container'>
          <img style={{padding:"4%"}} src={HoldingPlant} alt="" />
          <h3><span className='green'>Best</span> and <span className='green'>Easy</span> Guide</h3>
        </div>
      </div>
    </div>
  )
}

export default AboutUs