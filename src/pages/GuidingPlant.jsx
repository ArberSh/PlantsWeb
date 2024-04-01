import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../pages/GuidingPlant.css";
import Sunlight from "../assests/sunlight.png"
import Watering from "../assests/water.png"
import Pruning from "../assests/Pruning.png"

function GuidingPlant() {
  const { id } = useParams();
  const [plant, setPlant] = useState([]);
  const [plantGuide, setPlantGuide] = useState([]);
  const [plantGuide1, setPlantGuide1] = useState([]);

  const NewId = id - 1;

  async function FetchPlantGuide() {
    const { data } = await axios.get(
      `https://perenual.com/api/species-care-guide-list?key=sk-LPx165a266de2b29d3764&page=2`
    );
    setPlantGuide(data.data);
    console.log(plant);
  }

  async function FetchPlantGuide1() {
    const { data } = await axios.get(
      `https://perenual.com/api/species-care-guide-list?key=sk-LPx165a266de2b29d3764&page=1`
    );
    setPlantGuide1(data.data);
  }

  async function FetchPlant(id) {
    const { data } = await axios.get(
      `https://perenual.com/api/species-list?key=sk-qcAS65a265f29c4111704`
    );
    setPlant(data.data[id]);
  }

  useEffect(() => {
    FetchPlantGuide();
  }, []);

  useEffect(() => {
    FetchPlantGuide1();
  }, []);

  useEffect(() => {
    FetchPlant(NewId);
  }, []);

  
  const filteredPlant =
  plantGuide.find((elem) => elem.species_id == id) ||
  plantGuide1.find((elem) => elem.species_id == id);
  
//   console.log(filteredPlant.section[0].description)
  return (
    <div className="GuidingPlant">
      {filteredPlant ? (
        <div className="GuidingPlantOverall">
          <div className="GuidingPlantTitle">
          <h1>HOW TO GUIDE</h1>
          <h1 className="green1">{filteredPlant.common_name}</h1>
          <img
            src={
              plant.default_image.thumbnail
                ? plant.default_image.thumbnail
                : plant.default_image.original_url
            }
            alt=""
          />
          </div>
          <div className="DescriptionGuide">
            <div className="Description greenBg">
                <div className="WateringImage">
                  <img className="Picture" src={Watering}></img>
                </div>
                <div className="WateringDescription">
                    <h3>Watering:{plant.watering}</h3>
                    <p>{filteredPlant.section[0].description}</p>
                </div>
            </div>
            <div className="Description">
                <div className="SunLightImage">
                  <img className="Picture" src={Sunlight}></img>
                </div>
                <div className="SunLightDescription">
                    <h3 className="greenColor">SunLight:{plant.sunlight}</h3>
                    <p className="greenColor">{filteredPlant.section[1].description}</p>
                </div>
            </div>
            <div className="Description greenBg">
                <div className="PruningImage">
                  <img src={Pruning}></img>
                </div>
                <div className="PruningDescription">
                    <h3>Pruning</h3>
                    <p>{filteredPlant.section[2].description}</p>
                </div>
            </div>
          </div>
          
        </div>
      ) : (
        <p>Not Working</p>
      )}
      </div>
  );
}

export default GuidingPlant;
