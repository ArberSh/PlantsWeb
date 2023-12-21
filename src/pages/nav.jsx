import React from "react";
import Logo from "../assests/Logo.png"
import "./nav.css"
import LogoCart from "../assests/Cart.svg"

function nav() {
  return (
    <nav>
      <div className="Nav_Top">
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
