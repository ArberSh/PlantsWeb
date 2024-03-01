import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function MoreInfo() {

    const { id } = useParams();
    console.log(id)
    const [Plant,setPlant] = useState()
    useEffect(() => {
        async function fetchPosts(ID) {
          try {
            const { data } = await axios.get(`https://perenual.com/api/species/details/${ID}?key=sk-qcAS65a265f29c4111704`)
            setPlant(data.data)}
            catch (error) {
                console.log("Error", error);
              }
            }fetchPosts(id)});
    console.log(Plant)
  return (
    <div>MoreInfo</div>
  )
}

export default MoreInfo