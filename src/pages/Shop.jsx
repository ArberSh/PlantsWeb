import React, { useEffect, useState } from "react";
import "../pages/Shop.css";
import Plants from "../components/Plants";
import axios from "axios";

function Shop() {
  const [dataPlant, setData] = useState("");
  const [number,setNumber] = useState(0)
  useEffect(() => {
    async function fetchPosts(number) {
      try {
        const { data } = await axios.get(
          `https://perenual.com/api/species-list?key=sk-qcAS65a265f29c4111704&page=${number}`
        );
        setData(data.data);
        
        
      } catch (error) {
        console.log("Error", error);
      }
    }
    fetchPosts();
  }, [number]);

   const Button = (event) =>{
      setNumber(event.target.value);
    };
    
  useEffect(() => {
    console.log(number)
  },[number])


  useEffect(() => {}, [dataPlant]);

  return (
    <div className="Shop">
      <div className="Shop_Container">
        <div className="Filter_Container">
          <h1>Filter</h1>
          <div className="Filter type">
            <h2>Type</h2>
            <div className="Input_Container">
              <input type="radio" name="type" value="tree" />
              <label>Tree</label>
            </div>
            <div className="Input_Container">
              <input type="radio" name="type" value="flowers" />
              <label>Flowers</label>
            </div>
          </div>
          <div className="Filter Caring">
            <h2>Caring</h2>
            <div className="Input_Container">
              <input type="radio" name="care" value="easycare" />
              <label>Easy-Care</label>
            </div>
            <div className="Input_Container">
              <input type="radio" name="care" value="mediumcare" />
              <label>Medium-Care</label>
            </div>
          </div>
          <div className="Filter SunLight">
            <h2>SunLight</h2>
            <div className="Input_Container">
              <input type="radio" name="sunlight" value="full-sun" />
              <label>Full Sun</label>
            </div>
            <div className="Input_Container">
              <input type="radio" name="sunlight" value="low-sun" />
              <label>Low Sun</label>
            </div>
          </div>
          <div className="Filter Watery">
            <h2>Watery</h2>
            <div className="Input_Container">
              <input type="radio" name="watery" value="Frequent" />
              <label>Low Sun</label>
            </div>
            <div className="Input_Container">
              <input type="radio" name="watery" value="Average" />
              <label>Average</label>
            </div>
          </div>
        </div>
        <div className="Plants">
          <div className="SortBy-Container">
            <h1 style={{fontSize:"36px",marginLeft:"1rem"}}>Plants</h1>
            <div className="SortBy" style={{marginRight:"4rem"}}>
              <label style={{fontSize:"20px",marginRight:"1rem"}}>Sort By</label>
              <select id="FilterSortBy">
                <option value="Featured">Featured</option>
                <option value="A-Z">Alphabetically A-Z</option>
                <option value="Z-A">Alphabetically Z-A</option>
              </select>
            </div>
          </div>
          <div className="Plants_Container">
            {Array.isArray(dataPlant) ? (
              dataPlant
                .filter((elem) => elem.default_image !== null || elem.default_image === undefined )
                .map((filteredData) => (
                  <div
                    className="Plants_Container--ForPlants"
                    key={filteredData.id}
                  >
                    <Plants data={filteredData} />
                  </div>
                ))
            ) : (
              <p>Not Working</p>
            )}
          </div>
      </div>
        </div>
        <div className="Page_Container">
              <button onClick={Button} value="Preview" className="green1">Preview </button>
              <button onClick={Button} value="1" className="green1">1</button>
              <button onClick={Button} value="2" className="green1">2</button>
              <button onClick={Button} value="3" className="green1">3</button>
              <button onClick={Button} value="4" className="green1">4</button>
              <button onClick={Button} value="Next" className="green1">Next</button>
        </div>
    </div>
  );
}

export default Shop;

// {Array.isArray(dataPlant) ? ( //duhet t vendosesh si kusht pasi nuk afisho direkt api.
//               dataPlant.map((element) => (//ktu beje filter
//                 <div key={element.idMeal}>
//                   <Plants data={element} />
//                 </div>
//               ))
//             ) : (
//               <p>Data is not an array.</p>
//             )}
