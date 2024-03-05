import React, { useEffect, useState } from "react";
import Logo from "../assests/Logo.png"
import "./nav.css"
import LogoCart from "../assests/Cart.svg"
import axios from "axios"
import Search from "../assests/Search.svg"
import Menu from "../assests/menu.svg"
import { Link } from "react-router-dom";

function Nav() {


const [scroll,setScroll] = useState(false)
const [data, setData] = useState("");

function openMenu(){
  setScroll(false)
}
function Scroll() {
  if (window.scrollY >= 100){
    setScroll(true)
  } 
  else{
    setScroll(false)
  }
}

window.addEventListener("scroll",Scroll)

// useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await axios.get(`https://perenual.com/api/species-list?key=sk-Om6T64c55486c6e241704`);
//                 setData(response.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         }
//         fetchData();
        
//     }, [data]);
//     console.log(data)


  return (
    <nav >
      <div className="Nav_Top">
        <div className="Row">
          <div className={scroll ? "MenuButton_Container fixed" : "MenuButton_Container"}>
        <button onClick={openMenu} className="MenuButton">
            <img src={Menu} className="MenuImg" alt="" />
          </button>
          </div> 
        <div className="Nav_Right">
         
          <figure>
            <a href="/">
            <img className="Logo" src={Logo} alt="" />
            </a>
          </figure>
        </div>
        <div className="Nav_Center">
          <div className="Search_Bar">
            <input className={scroll ? 'SearchField_fixed' : 'SearchField'} type="text" placeholder="What are you looking for?" />
            <button className="SearchButton">
                <img src={Search} alt="" />
            </button>
          </div>
        </div>
        <div>
            <img className="LogoCart" src={LogoCart} alt="" />
          </div>
        </div>
        </div>
            <div className={scroll ? 'Nav_Down_fixed active' : 'Nav_Down'}>
                <Link to={`/shop`} className="link__hover-effect">Shop</Link>
                <Link to={`/PlantCare`} className="link__hover-effect">Plant Care</Link>
                <Link to={`/`} className="link__hover-effect">Subscribe</Link>
                <Link to={`/`} className="link__hover-effect">About Us</Link>
                <Link to={`/`} className="link__hover-effect">Contact Us</Link>
            </div>
      
    </nav>
  );
}

export default Nav;
