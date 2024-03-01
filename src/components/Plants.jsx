import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Plants.css";

function Plants({ data }) {
  
  const Navigate = useNavigate();
  
  
  function MoreInfo(){
    Navigate(`/MoreInfo/${data.id}`)
  }
  console.log(data.id)
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
          <a onClick={MoreInfo} className="ButtonLink" href="">
          <button className="MoreInfo">More Info</button>
          </a>
          <a className="ButtonLink">
          <button className="AddtoCart">Add to Cart</button>
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
