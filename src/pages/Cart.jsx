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
      const totalPrice = 15.99 * cartItems.reduce((total, item) => total + item.quantity, 0);
      setPrice(totalPrice);
      setTax(totalPrice * 0.1);  // Calculate tax based on the updated price
      setTotalPrice(price + tax + 20)
    };

    calculateTotalPrice();
  }, [cartItems]);  // Dependency array includes cartItems to re-run on changes

  return (
    <div className="Cart_Container">
      {cartItems.length === 0 ? (
        <div className="Cart-Empty-Container">
          <img src={EmptyCart} alt="Empty cart" />
          <h3 style={{ color: 'black' }}>Your cart is empty</h3>
        </div>
      ) : (
        <>
          <div className="Plant-Price_Container">
            {cartItems.map(item => (
              <div className="Plant_Container-Cart" key={item.id}>
                <div className="Plant_Image">
                  <img
                    src={item.default_image.thumbnail || item.default_image.original_url}
                    alt={item.common_name}
                  />
                </div>
                <div className="Information_Plant">
                  <button className="RemoveImage" onClick={() => removeItem(item)}>
                    <img style={{ filter: 'invert(1)' }} src={RemoveItem} alt="Remove item" />
                  </button>
                  <h1>{item.common_name}</h1>
                  <h2 style={{ color: 'rgb(95, 203, 58)' }}>Price: $15.99</h2>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => changeQuantity(item, parseInt(e.target.value))}
                    min={1}
                    max={99}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="Price-Container">
            <div>
              <h1>Price: {price.toFixed(2)}$</h1>
              <h1>Tax: {tax.toFixed(2)}$</h1>
              <h1>Shipping 20.00$</h1>
            </div>
            <br></br>
            <div>
              <h1>Total Price:{TotalPrice}</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
