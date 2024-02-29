import React, { useState } from 'react'

function MoreInfo() {
    const [Plant,setPlant] = useState()
    useEffect(() => {
        async function fetchPosts(ID) {
          try {
            const { data } = await axios.get(`https://perenual.com/api/species/details/1?key=sk-qcAS65a265f29c4111704`)
            setPlant(data.data)}
            catch (error) {
                console.log("Error", error);
              }
            }});
  return (
    <div>MoreInfo</div>
  )
}

export default MoreInfo