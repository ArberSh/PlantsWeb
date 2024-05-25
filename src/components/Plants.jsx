import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/Plants.css";

function Plants({ data ,incrementCartItem}) {
  const [CartItem,setCartItem] = useState(0)
  

  useEffect(() =>{
    console.log(CartItem)
  },[CartItem])
  return (
    <div>
      {data.default_image.thumbnail ? (<div className="Plant_Container ">
      
        <div className="Image_Plant">
          <img
            src={
              data.default_image.thumbnail
                ? data.default_image.thumbnail
                : data.default_image.original_url
            }
            alt=""
          />
        </div>
        <div className="Text_Container">
          <h1 className="price green1">$15.99</h1>
          <h4>{data.common_name}</h4>
        </div>
        <div className="Button_Container">
        <Link to={`/MoreInfo/${data.id}`} className="ButtonLink">
          <button className="MoreInfo_Button">More Info</button>
          </Link>
          <a className="ButtonLink">
          <button onClick={incrementCartItem} className="AddtoCart">Add to Cart</button>
          </a>
        </div>
      </div>
    ) 
    : (
    <>
          <div className="plant__img--skeleton"></div>
          <div className="skeleton plant__title--skeleton"></div>
          <div className="skeleton plant__price--skeleton"></div>
      </>
      )
      }
     </div> 
  );
}

export default Plants;
