import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function GuidingPlant() {
    const { id } = useParams();
    const [plant,setPlant] = useState();
    useEffect(() => {
        async function fetchPosts(id) {
          try {
            const { data } = await axios.get(`https://perenual.com/api/species-care-guide-list?key=sk-qcAS65a265f29c4111704`);
            setPlant(data);
          } catch (error) {
            console.log("Error", error);
          }
        }
    
        fetchPosts(id);
      }, [id]);
  return (
    <div>GuidingPlant</div>
  )
}

export default GuidingPlant