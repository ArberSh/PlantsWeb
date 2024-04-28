import React from 'react';
import Nav from './pages/nav'
import Home from './pages/Home.jsx'
import './App.css';
import Contact from './pages/Contact.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop.jsx';
import PlantCare from './pages/PlantCare.jsx';
import MoreInfo from './pages/MoreInfo.jsx';
import GuidingPlant from './pages/GuidingPlant.jsx';
import Cart from './pages/Cart.jsx';

function App() {
  return (
    <Router>
      <>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/MoreInfo/:id" element={<MoreInfo />} />
    <Route path="/PlantCare/" element={<PlantCare/>}/>
    <Route path="/GuidePlant/:id" element={<GuidingPlant/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    <Contact/>
    </>
    </Router>
  );
}

export default App;
