import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MoreInfo.css';

function MoreInfo() {
  const { id } = useParams();
  const [Plant, setPlant] = useState();

  useEffect(() => {
    async function fetchPosts(id) {
      try {
        const { data } = await axios.get(`https://perenual.com/api/species/details/${id}?key=sk-qcAS65a265f29c4111704`);
        setPlant(data);
      } catch (error) {
        console.log("Error", error);
      }
    }

    fetchPosts(id);
  }, [id]);

  return (
    <div className='MoreInfo'>
        <div className='Link'>
            
        </div>
      <div className='Container_MoreInfo'>
        {Plant && (
          <>
            <div className='Photo_Container'>
              <img src={Plant.default_image.thumbnail} alt="" />
            </div>
            <div className='Description_Container'>
              <h1>{Plant.common_name}</h1>
              <div className='Price'>
                <h2 className='green1'>15.99$</h2>
              </div>
              <div className='Types'>
                <ul>
                  <li className='type'><span className='Bold'>Type:</span>{Plant.type}</li>
                  <li className='cycle'><span className='Bold'>Cycle:</span>{Plant.cycle}</li>
                  <li className='sunlight'><span className='Bold'>Sunlight:</span>{Plant.sunlight}</li>
                  <li className='watering'><span className='Bold'>Watering:</span>{Plant.watering}</li>
                </ul>
              </div>
              <div className='Description'>
                <p className='black'>{Plant.description}</p>
              </div>
              <div className='Button_MoreInfo'>
                <input type="number" name="" id="" max="99" min="0" />
                <button>Add to Cart</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MoreInfo;
