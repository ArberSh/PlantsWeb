import React, { useEffect, useState } from "react";
import "../pages/Shop.css";
import Plants from "../components/Plants";
import axios from "axios";

function Shop() {
  const [dataPlant, setData] = useState("");
  const [number, setNumber] = useState(0);
  const [ sunlight, setsunlight] = useState();
  const [watering, setwatering] = useState();
  const [cycle, setcycle] = useState();
  const [other, setother] = useState();
  useEffect(() => {
    async function fetchPosts(number, sunlight, watering,cycle,other) {
      try {
        let apiUrl = `https://perenual.com/api/species-list?key=sk-qcAS65a265f29c4111704&page=${number}`;
        if (watering !== undefined) {
          apiUrl += `&watering=${watering}`;
        }
        if (sunlight !== undefined) {
          apiUrl += `&sunlight=${sunlight}`;
        } 
        if(cycle !== undefined){
          apiUrl += `&cycle=${cycle}`;
        }
        if(other === 'edible'){
          apiUrl += `&edible=1`
        }
        if(other === 'indoor'){
          apiUrl += `&indoor=1`
        }
        const { data } = await axios.get(apiUrl);
        setData(data.data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    fetchPosts(number, sunlight, watering,cycle,other);
  }, [number, sunlight,watering,cycle,other]);

  function Button(e) {
    if (e.target.value === "Preview" || e.target.value === "Next") {
      if (e.target.value === "Preview") {
        console.log("Preview");
        if (number <= 0) {
        } else {
          setNumber((number) => number - 1);
        }
        console.log(number);
      } else {
        console.log("Next");
        if (number <= 4) setNumber((number) => number + 1);
        else {
        }
        console.log(number);
      }
    } else {
      setNumber(e.target.value);
      const button = document.getElementById("ButtonForChangingAPI");
      if (number == e.target.value) {
        button.style.color = "red";
        button.style.cursor = "text";
      } else {
        button.style.cursor = "pointer";
        button.style.color = "green";
      }

      console.log(number);
    }
  }
  useEffect(() => {}, [dataPlant]);

  function refreshPage() {
    window.location.reload(false);
  }

  function radioButton(e) {
    let value = e.target.value;
    console.log(value)
    switch (value) {
      case "full_shade":
        setsunlight(value);
      case "part_shade":
        setsunlight(value);
      case "sun-part_shade":
        setsunlight(value);
      case "full_sun":
        setsunlight(value);
      break;
    }
    switch(value){
        case "frequent":
        setwatering(value);
      case "average":
        setwatering(value);
      case "minimum":
        setwatering(value);
      case "none":
        setwatering(value);
      }
    switch(value){
      case "perennial":
        setcycle(value)
      case "annual":
        setcycle(value)
      case "biannual":
        setcycle(value)
      case "biennial":
        setcycle(value)
    }
    switch(value){
      case "edible":
        setother(value)
      case "indoor":
        setother(value)
    }
  }

  function filterPlants(filter) {
    let sortedData;
  
    if (filter === 'A-Z') {
      sortedData = [...dataPlant].sort((a, b) => {
        if (a.common_name < b.common_name) {
          return -1;
        } 
      });
      
    }
    if (filter === 'Z-A') {
      sortedData = [...dataPlant].sort((a, b) => {
        if (a.common_name > b.common_name) {
          return -1;
        } 
      });
    }
    if(filter === 'Featured'){
      sortedData = [...dataPlant].sort((a,b)=>{
        if (a.id < b.id){
          return -1;
        }
      });
    }
    setData(sortedData);
    return sortedData

  }
  

    useEffect(()=>{
      filter === 'Featured'
    },[filterPlants])

  return (
    <div className="Shop">
      <div className="Shop_Container">
        <div className="Filter_Container">
          <h1>Filter</h1>
          <button onClick={refreshPage} className="ClearAll">
            Clear All
          </button>
          <div className="Filter SunLight">
            <h2>SunLight</h2>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="sunlight"
                value="full_shade"
              />
              <label>Full Shade</label>
            </div>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="sunlight"
                value="part_shade"
              />
              <label>Part Shade</label>
            </div>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="sunlight"
                value="sun-part_shade"
              />
              <label>Sun , Part Shade</label>
            </div>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="sunlight"
                value="full_sun"
              />
              <label>Full Sun</label>
            </div>
          </div>
          <div className="Filter Watering">
            <h2>Watering</h2>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="watering"
                value="frequent"
              />
              <label>Frequent</label>
            </div>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="watering"
                value="average"
              />
              <label>Average</label>
            </div>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="watering"
                value="minimum"
              />
              <label>Minimum</label>
            </div>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="watering"
                value="none"
              />
              <label>None</label>
            </div>
          </div>
          <div className="Filter Cycle">
            <h2>Cycle</h2>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="cycle"
                value="perennial"
              />
              <label>Perennial</label>
            </div>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="cycle"
                value="annual"
              />
              <label>Annual</label>
            </div>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="cycle"
                value="biennial"
              />
              <label>Biennial</label>
            </div>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="cycle"
                value="biannual"
              />
              <label>Biannual</label>
            </div>
          </div>
          <div className="Filter Other">
            <h2>Other</h2>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="other"
                value="edible"
              />
              <label>Edible</label>
            </div>
            <div className="Input_Container">
              <input
                onClick={radioButton}
                type="radio"
                name="other"
                value="indoor"
              />
              <label>Indoor</label>
            </div>
          </div>
        </div>
        <div className="Plants">
          <div className="SortBy-Container">
            <h1 style={{ fontSize: "36px", marginLeft: "1rem" }}>Plants</h1>
            <div className="SortBy" style={{ marginRight: "4rem" }}>
              <label style={{ fontSize: "20px", marginRight: "1rem" }}>
                Sort By
              </label>
              <select onChange={(event)=> filterPlants(event.target.value)} id="FilterSortBy">
                <option value="Featured">Featured</option>
                <option value="A-Z">Alphabetically A-Z</option>
                <option value="Z-A">Alphabetically Z-A</option>
              </select>
            </div>
          </div>
          <div className="Plants_Container">
            {Array.isArray(dataPlant) ? (
              dataPlant
                .filter(
                  (elem) =>
                    elem.default_image !== null ||
                    elem.default_image === undefined
                )
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
        <button onClick={Button} value={"Preview"} className="green1">
          Preview{" "}
        </button>
        <button
          onClick={Button}
          value={1}
          id="ButtonForChangingAPI"
          className="green1"
        >
          1
        </button>
        <button
          onClick={Button}
          value={2}
          id="ButtonForChangingAPI"
          className="green1"
        >
          2
        </button>
        <button
          onClick={Button}
          value={3}
          id="ButtonForChangingAPI"
          className="green1"
        >
          3
        </button>
        <button
          onClick={Button}
          value={4}
          id="ButtonForChangingAPI"
          className="green1"
        >
          4
        </button>
        <button onClick={Button} value="Next" className="green1">
          Next
        </button>
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
