import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GuidePlant from '../components/GuidePlant'

function PlantCare() {

  const [Plant,SetPlant] = useState("")

  useEffect(() => {
    async function DataPlant(){
      const {data} = await axios.get(`https://perenual.com/api/species-list?key=sk-qcAS65a265f29c4111704`)
      SetPlant(data.data)
    }
    DataPlant()
  })
  return (
    <>
    <div className='PlantCare_Container'>
      <h1>Plant Care Guides</h1>
      <div className='PlantsGuide_Container'>
      {Array.isArray(Plant) ? (
              Plant.filter(
                (elem) =>
                  elem.default_image !== null ||
                  elem.default_image === undefined
              ).map((elem => 
                <div
                    className="Plants_Container--Guide"
                    key={elem.id}
                  >
                    <GuidePlant data={elem} />
                  </div>
                ))):(
                <h1>not working</h1>
              )}
      </div>
    </div>
    </>
  )
}

export default PlantCare