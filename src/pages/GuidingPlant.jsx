import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../pages/GuidingPlant.css';

function GuidingPlant() {
    const { id } = useParams();
    const [plant, setPlant] = useState([]);
    const [plant1, setPlant1] = useState([]);

    const NewId = id - 1;

    async function FetchPlant() {
        const { data } = await axios.get(`https://perenual.com/api/species-care-guide-list?key=sk-LPx165a266de2b29d3764&page=2`);
        setPlant(data.data);
        console.log(plant)
    }

    async function FetchPlant1(species_id) {
        const { data } = await axios.get(`https://perenual.com/api/species-care-guide-list?key=sk-LPx165a266de2b29d3764&page=1`);
        setPlant1(data.data);
        console.log(plant1)
    }

    useEffect(() => {
        FetchPlant();
    }, []);

    useEffect(() => {
        FetchPlant1(NewId);
    }, []);

    const filteredPlant = plant.find(elem => elem.species_id == id);
    const filteredPlant1 = plant1.find(elem => elem.species_id == id);

    return (
        <div className='GuidingPlant'>
            {filteredPlant1 || filteredPlant ? (
                <h1>{filteredPlant.common_name}</h1>
            ) : (
                <p>Not Working</p> 
            )}
        </div>
    );
}

export default GuidingPlant;
