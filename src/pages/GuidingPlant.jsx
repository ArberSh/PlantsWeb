import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../pages/GuidingPlant.css'

function GuidingPlant() {
    const { id } = useParams();
    const [plant,setPlant] = useState();
    useEffect(() => {
    if(id){
    
        async function fetchPosts(id) {
          try {
            const { data } = await axios.get(`https://perenual.com/api/species-care-guide-list?key=sk-qcAS65a265f29c4111704`);
            setPlant(data.data[id])
            console.log(plant)
          } catch (error) {
            console.log("Error", error);
          }
        }
    
        fetchPosts(id);
    }
      }, [id])
    ;
  return (
    <div className='GuidingPlant'>{plant.id}</div>
  )
}

export default GuidingPlant