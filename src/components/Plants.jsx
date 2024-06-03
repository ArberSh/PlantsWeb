import React from "react";
import { Link } from "react-router-dom";
import "../components/Plants.css";

function Plants({ data, incrementCartItem }) {
  return (
    <div>
        <div className="Plant_Container">
          <div className="Image_Plant">
            <img
              src={data.default_image.thumbnail || data.default_image.original_url}
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
            <button onClick={() => incrementCartItem(data)} className="AddtoCart">
              Add to Cart
            </button>
          </div>
        </div>
     
    </div>
  );
}

export default Plants;
