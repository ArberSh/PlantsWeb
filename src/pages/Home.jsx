import React from 'react'
import './Home.css'
import Landing from '../components/Landing.jsx'
import AboutUs from '../components/AboutUs.jsx'
import Promo from '../components/Promo.jsx'
import Subscription from '../components/Subscription.jsx'

function Home() {
  return (
    <div>
      <Landing/>
      <AboutUs/>
      <Promo/>
      <Subscription/>
    </div>
  )
}

export default Home