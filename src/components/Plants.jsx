import React, { useEffect } from 'react'
import '../components/Plants.css'

function Plants({data}) {
  return (
    <div>
        <div className='Plant_Container '>
          <div className='Image_Plant'>
            <img src={data.default_image.thumbnail} alt="" />
          </div>
          <div className='Text_Container'>
            <h1 className='price'>$15.99</h1>
            <h4>{data.common_name}</h4>
          </div>
          <div>
            <button>Quick Shop</button>
          </div>
        </div>
    </div>
  )
}

export default Plants