import React from 'react'
import './Subscription.css'

function Subscription() {
  return (
    <div className='Subscriptions'>
        <h1 className='SubscriptionTitle'>Subscription</h1>
        <div className='Subscription_Container'>
            <div className='Subscription Free'>
                <h2>Free</h2>
                <h1>0$</h1>
                <h3>/Monthly</h3>
                <br/>
                <ul>
                    <li>Access <span className='green1'>+3,000</span> plants.</li>
                    <li><span className='green1'>Basic</span> care tips.</li>
                    <li><span className='green1'>Monthly</span> gardening newsletter.</li>
                    <li className='mid-line'>5% off all plant purchases.</li>
                    <li className='mid-line'>Included rare varieties.</li>
                </ul>
                <button className='Owned'>Owned</button>
            </div>
            <div className='Subscription Basic'>
                <h2>Basic</h2>
                <h1>9,99$</h1>
                <h3>/Monthly</h3>
                <br/>
                <ul>
                    <li> <span className='green1'>+6,000</span> plants.</li>
                    <li><span className='green1'>Detailed</span> care guides.</li>
                    <li><span className='green1'>Exclusive</span> community forum.</li>
                    <li><span className='green1'>5%</span> off all plant purchases.</li>
                    <li className='mid-line'>Included rare varieties.</li>
                </ul>
                <button className='NotOwned'>Subscribe</button>
            </div>
            <div className='Subscription Premium'>
                <h2>Premium</h2>
                <h1>29,99$</h1>
                <h3>/Monthly</h3>
                <br/>
                <ul>
                    <li> <span className='green1'>+10,000</span> plants.</li>
                    <li><span className='green1'>Personalized</span> advice.</li>
                    <li><span className='green1'>Quarterly</span> live webinars.</li>
                    <li><span className='green1'>15%</span> off all plant purchases.</li>
                    <li>Included <span className='green1'>rare</span> varieties.</li>
                </ul>
                <button className='NotOwned'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Subscription