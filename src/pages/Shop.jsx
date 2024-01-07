import React from 'react'
import '../pages/Shop.css'

function Shop() {
  return (
    <div className='Shop'>
        <div className='Shop_Container'>
        <div className='Filter_Container'>
            <h1>Filter</h1>
            <div className='Filter type'>
                <h2>Type</h2>
                <div>
                <input type="radio" name="type" value="tree" />
                <span className='square'></span>
                <label>Tree</label>
                </div>
                <div>
                <input type="radio" name="type" value="flowers" />
                <span className='square'></span>
                <label>Flowers</label>
                </div>
            </div>
            <div className='Filter Caring'>
            <h2>Caring</h2>
            <div>
            <input type="radio" name="care" value="easycare" />
            <span className='square'></span>
                <label>Easy-Care</label>
                </div>
                <div>
                <input type="radio" name="care" value="mediumcare" />
                <span className='square'></span>
                <label>Medium-Care</label>
                </div>
            </div>
            <div className='Filter SunLight'>
                <h2>SunLight</h2>
                <div>
            <input type="radio" name="sunlight" value="full-sun" />
            <span className='square'></span>
                <label>Full Sun</label>
                </div>
                <div>
                <input type="radio" name="sunlight" value="low-sun" />
                <span className='square'></span>
                <label>Low Sun</label>
                </div>
            </div>
            <div className='Filter Watery'>
                <h2>Watery</h2>
                <div>
                <input type="radio" name="watery" value="Frequent" />
                <span className='square'></span>
                <label>Low Sun</label>
                </div>
                <div>
                <input type="radio" name="watery" value="Average" />
                <span className='square'></span>
                <label>Average</label>
                </div>
            </div>
            
        </div>
        <div className='Plants_Container'>

        </div>
        </div>
    </div>
  )
}

export default Shop