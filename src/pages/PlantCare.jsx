import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PlantCare() {

  const [Plant,SetPlant] = useState("")

  useEffect(() => {
    async function DataPlant(){
      const {data} = await axios.get(`https://perenual.com/api/species-list?key=sk-qcAS65a265f29c4111704`)
      console.log(data.data)
    }
    DataPlant()
  })
  return (
    <div>PlantCare</div>
  )
}

export default PlantCare