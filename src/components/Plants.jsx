import React, { useEffect } from 'react'
import '../components/Plants.css'

function Plants({data}) {
  console.log("ok")
  let Image = null
  useEffect(()=>{
    if (Array.isArray(data)){//duhet t perdor nji map per t kontrolluar 1 nga 1 
      let result = data.filter(object => {
    if (object.data.default_image.thumbnail===null){
      console.log("ka")
    }
    else {
      Image = object.data.default_image.thumbnail
      console.log("nuk ka")
    }
  })
  console.log(result)
}

 
  },[data])
    
  


  // if (data.default_image === null){
    
  // }
  // else{
  //   console.log("works")
  // }
  // // console.log(data.default_image)
  return (
    <div>
        <div className='Plant_Container '>
          <div>
            <img src={Image} alt="" />
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