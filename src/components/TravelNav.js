import React from "react";
import WorldIcon from "../images/world.png";

export default function TravelNav() {
  return (
    <nav className="travel-nav">
      <img className="world-icon" src={WorldIcon} />
      <h5 className="travel-title">my travel journal.</h5>
    </nav>
  );
}
