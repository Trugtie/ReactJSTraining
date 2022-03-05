import React from "react";
import Star from "../images/Star 1.png";

export default function AirProduct({img,spec,starNum,count,locate,description,price,type}) {

  return (
    <div className="AirProduct">
      <div className="AirImg">
        <img className="imgProduct" src={img} />
        <h4 className="ProductSpec">{spec}</h4>
      </div>
      <div className="Rating">
        <img className="starticon" src={Star} />
        <span className="RateNumber">{starNum}</span>
        <span className="Locate">({count}) - {locate}</span>
      </div>
      <h5 className="Description">{description}</h5>
      <div className="Price"><b className="PriceNumber">From ${price}</b> / {type}</div>
    </div>
  );
}
