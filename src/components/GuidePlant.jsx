import React from 'react'

function GuidePlant({data}) {
  return (
    <div className='GuidePlant'>
        <img src={data.default_image.original_url} alt="" />
        <h1>{data.common_name}</h1>
    </div>
  )
}

export default GuidePlant