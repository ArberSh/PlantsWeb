import React, { useEffect } from 'react'
import '../components/GuidePlant.css'
import { Link } from 'react-router-dom'


function GuidePlant({data}) {
  useEffect(()=>{
    console.log(data)
  },[data])
  return (
    <div className='GuidePlant'>
      <Link to={`/GuidePlant/${data.id}`}>
         <img src={data.default_image.original_url} alt="" />
         </Link>
        <h2 className='green'>{data.common_name}</h2> 
    </div>
  )
}

export default GuidePlant