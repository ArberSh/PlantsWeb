import React from 'react'
import '../pages/Shop.css'

function Shop() {
  return (
    <div className='Shop'>
        <div className='Shop_Container'>
        {/* Example for the "Type" filter */}
<div className='Filter type'>
  <h2>Type</h2>
  <div>
    <input type="radio" id="tree" name="type" value="tree" />
    <label htmlFor="tree">
      <span className='square'></span>
      Tree
    </label>
  </div>
  <div>
    <input type="radio" id="flowers" name="type" value="flowers" />
    <label htmlFor="flowers">
      <span className='square'></span>
      Flowers
    </label>
  </div>
</div>

        </div>
    </div>
  )
}

export default Shop