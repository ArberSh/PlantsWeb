import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './pages/nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import PlantCare from './pages/PlantCare';
import MoreInfo from './pages/MoreInfo';
import GuidingPlant from './pages/GuidingPlant';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/MoreInfo/:id" element={<MoreInfo />} />
          <Route path="/PlantCare" element={<PlantCare />} />
          <Route path="/GuidePlant/:id" element={<GuidingPlant />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Contact />
      </>
    </Router>
  );
}

export default App;
