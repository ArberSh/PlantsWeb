import React, { useEffect, useState } from "react";
import Logo from "../assests/Logo.png"
import "./nav.css"
import LogoCart from "../assests/Cart.svg"
import axios from "axios"


    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://perenual.com/api/species-list?key=sk-Om6T64c55486c6e241704`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        
        fetchData();
    }, []);
    console.log(data)


function nav() {
  return (
    <nav>
      <div className="Nav_Top">
        <div className="Row">
        <div className="Nav_Right">
          <figure>
            <img className="Logo" src={Logo} alt="" />
          </figure>
        </div>
        <div className="Nav_Center">
          <div>
            <input className="SearchBar" type="text" placeholder="What are you looking for?" />
          </div>
        </div>
        <div>
            <img className="LogoCart" src={LogoCart} alt="" />
          </div>
        </div>
        </div>
        <div>
            <div className="Nav_Down">
                <h4>Shop</h4>
                <h4>Plant Care</h4>
                <h4>About Us</h4>
                <h4>Contact Us</h4>
            </div>
        </div>
      
    </nav>
  );
}

export default nav;
