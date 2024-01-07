import Nav from './pages/nav'
import Home from './pages/Home.jsx'
import './App.css';
import Contact from './pages/Contact.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop.jsx';

function App() {
  return (
    <Router>
      <>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    </Routes>
    <Contact/>
    </>
    </Router>
  );
}

export default App;
