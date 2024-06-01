import React from 'react';
import  './Cart.css'

function Cart() {
  return (
    <div className='Cart_Container'>
      <div className='Price_Each_Plant'>
      <img src='Delete Plant'/>
        <div>
          <img className='ImgPlant' src={""}/>
        </div>
        <div>
          <h2>Plant Name</h2>
          <h2>Price:</h2>
        </div>
      </div>
      <div className='Price-Container'>
        <h2>Price</h2>
        <h2>Tax</h2>
        <h2>Shipping</h2>
        <br></br>
        <h2>Total Price</h2>
      </div>
    </div>
  )
}

export default Cart