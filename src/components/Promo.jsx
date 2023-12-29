import React from "react";
import "../components/Promo.css"

function Promo() {
  return (
    <div className="Promo">
      <div className="Promo_Container">
        <div className="FirstPromo">
          <h1>House Plant Accessories</h1>
          <button>Shop Accessories</button>
        </div>
        <div className="SecondPromo">
          <h1>Promotional Item</h1>
          <button>Shop Gift Card</button>
        </div>
        <div className="ThirdPromo">
          <h1>New Arrivals</h1>
          <button>Shop Now</button>
        </div>
        <div className="ForthPromo">
          <h1>Seed Packets</h1>
          <button>Seed Seeds</button>
        </div>
        <div className="FifthPromo">
          <h1>Shipping Info</h1>
          <button>How we Ship Plants</button>
        </div>
      </div>
    </div>
  );
}

export default Promo;
