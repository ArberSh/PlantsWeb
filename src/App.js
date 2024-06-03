import React, { useState } from 'react';
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
  const [CartItems, setCartItems] = useState([]);
  
  function incrementCartItem(plant) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === plant.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...plant, quantity: 1 }];
      }
    });
  }

  function changeQuantity(plant, quantity) {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === plant.id ? { ...item, quantity: quantity } : item
      )
    );
  }

  function removeItem(plant) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== plant.id));
  }

  return (
    <Router>
      <>
      <Nav cartItemCount={CartItems.reduce((total, item) => total + item.quantity, 0)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop incrementCartItem={incrementCartItem} />} />
          <Route path="/MoreInfo/:id" element={<MoreInfo incrementCartItem={incrementCartItem} />} />
          <Route path="/PlantCare" element={<PlantCare />} />
          <Route path="/GuidePlant/:id" element={<GuidingPlant />} />
          <Route path="/Cart" element={<Cart CartItems={CartItems} cartItems={CartItems} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Routes>
        <Contact />
      </>
    </Router>
  );
}

export default App;
