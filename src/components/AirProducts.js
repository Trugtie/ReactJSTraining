import React from "react";
import AirProduct from "./AirProduct";
import data from "./data";

export default function AirList() {
  const cards = data.map((item) => {
    return (
      <AirProduct
        spec={item.spec}
        img={item.img}
        starNum={item.starNum}
        count={item.count}
        locate={item.locate}
        description={item.description}
        price={item.price}
        type={item.type}
      />
    );
  });
  return (
    <div className="AirList">
      {cards}
    </div>
  )
}
