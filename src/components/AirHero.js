import React from "react";
import Gallery from "../images/gallery.jpg";

export default function Hero() {
  return (
    <div>
    <div className="Hero--Air">
    <img className="Gallery" src={Gallery}></img>
    </div>
      <h1 className="Hero__Title">Online Experiences</h1>
      <p className="Hero__Description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
