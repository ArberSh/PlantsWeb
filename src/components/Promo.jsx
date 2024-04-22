import React from "react";
import "../components/Promo.css"
import Accessories from "../assests/Accessories.jpg"
import GiftPlant from "../assests/GiftPlant.jpg"
import NewArrivals from "../assests/NewArrivals.jpg"
import Seeds from "../assests/Seeds.jpg"
import Shipping from "../assests/Shipping.jpg"

function Promo() {
  return (
    <div className="Promo">
      <div className="Promo_Container">
        <div className="FirstPromo grid-col-span-2 ">
          <div className="PromoText_Container">
          <h1>House Plant Accessories</h1>
          <button>Shop Accessories</button>
          </div>
        </div>
        <div className="SecondPromo grid-col-span-4">
        <div className="PromoText_Container">
          <h1>New Arrivals</h1>
          <button>Shop Now</button>
          </div>
        </div>
        <div className="ThirdPromo grid-col-span-1 grid-row-1 forButton">
        <div className="PromoText_Container">
          <h1>Seeds Packet</h1>
          <button>Shop Seeds</button>
          </div>
        </div>
        <div className="ForthPromo grid-col-span-1 grid-row-2 forButton">
        <div className="PromoText_Container">
          <h1>Promotional Item</h1>
          <button>Shop Gift Card</button>
          </div>
        </div>
        <div className="FifthPromo grid-col-span-1 grid-row-3 forButton">
        <div className="PromoText_Container">
          <h1>Shipping Info</h1>
          <button>How we Ship Plants</button>
          </div>
        </div>
      </div>
      <div className="Promo_Container--Mobile"> 
        <div className="FirstPromo">
          <h1>House Plant Accessories</h1>
        </div>
        <div className="SecondPromo">
          <h1>New Arrivals</h1>
        </div>
        <div className="ThirdPromo">
          <h1>Seeds Packet</h1>
        </div>
        <div className="ForthPromo">
          <h1>Promotional Item</h1>
        </div>
        <div className="FifthPromo">
          <h1>Shipping Info</h1>
        </div>
      </div>
    </div>
  );
}

export default Promo;
