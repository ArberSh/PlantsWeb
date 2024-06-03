import React, { useEffect, useState } from "react";
import "./Cart.css";
import RemoveItem from "../assests/CloseMenu.svg";
import EmptyCart from "../assests/cart.png";

function Cart({ cartItems, changeQuantity, removeItem }) {
  const [price, setPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice =
        15.99 * cartItems.reduce((total, item) => total + item.quantity, 0);
      setPrice(totalPrice);
      setTax(totalPrice * 0.1);
      setTotalPrice(price + tax + 20);
    };

    calculateTotalPrice();
  }, [cartItems, price, tax]);

  function Alarm() {
    alert("We don't have a plan to do this :/");
  }

  return (
    <div className="Cart_Container">
      {cartItems.length === 0 ? (
        <div className="Cart-Empty-Container">
          <img src={EmptyCart} alt="Empty cart" />
          <h3 style={{ color: "black" }}>Your cart is empty</h3>
        </div>
      ) : (
        <>
          <div className="Plant-Price_Container">
            {cartItems.map((item) => (
              <div className="Plant_Container-Cart" key={item.id}>
                <div className="Plant_Image">
                  <img
                  className="Image-Photo"
                    src={
                      item.default_image.thumbnail ||
                      item.default_image.original_url
                    }
                    alt={item.common_name}
                  />
                </div>
                <div className="Information_Plant">
                  <button
                    className="RemoveImage"
                    onClick={() => removeItem(item)}
                  >
                    <img
                    
                      style={{ filter: "invert(1)" }}
                      src={RemoveItem}
                      alt="Remove item"
                    />
                  </button>
                  <h1>{item.common_name}</h1>
                  <h2 style={{ color: "rgb(95, 203, 58)" }}>Price: $15.99</h2>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      changeQuantity(item, parseInt(e.target.value))
                    }
                    min={1}
                    max={99}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="Price-Container">
            <div className="Information_Price">
              <h1>Price:</h1>
              <h1>Tax: </h1>
              <h1>Shipping:</h1>
              <h1 style={{ marginTop: "2rem" }}>Total Price:</h1>
            </div>
            <div className="Number_Price">
              <h1>{price.toFixed(2)}$</h1>
              <h1>{tax.toFixed(2)}$</h1>
              <h1>20.00$</h1>
              <h1 style={{ marginTop: "2rem" }}>{TotalPrice.toFixed(2)}$</h1>
              <button onClick={Alarm}>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
