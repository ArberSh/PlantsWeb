import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GuidePlant from '../components/GuidePlant'
import '../pages/PlantCare.css'

function PlantCare() {

  const [Plant,SetPlant] = useState("")

  useEffect(() => {
    async function DataPlant(){
      try{
      const {data} = await axios.get(`https://perenual.com/api/species-list?key=sk-kC5f65ef2b98f36014519`)
    SetPlant(data.data)}
    catch (error) {
      console.log("Error:" + error )
    }
    }
    DataPlant()
  },[])
  return (
    <>
    <div className='PlantCare_Container'>
      <h1 className='green1'>Plant Care Guides</h1>
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