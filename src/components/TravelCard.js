import React from 'react';
import LocateIcon from '../images/locate.png'
export default function TravelCard({item}){
    return (
        <div className="TravelCard">
            <div className="TravelCard__Img">
            <img className="Travel__Img" src={item.imageUrl}/>
            </div>
            <div className="TravelCard__Content">
            <div className="TravelCard__Subtitle">
            <img className="Travel-Locate-Icon" src={LocateIcon}/>   
            <h5 className="TravelCard__Locate">{item.location}</h5>
            <a className="Locate-Link" href={item.googleMapsUrl}>View on Google Maps</a>
            </div> 
            <h1 className="Travel__Tittle">{item.title}</h1>
            <div className="Travel__Time">
            {item.startDate} - {item.endDate}    
            </div>
            <p className="Travel__Description">{item.description}</p>  
            </div>
        </div>
    )
}