import React from "react";
import TravelNav from "./TravelNav";
import TravelList from "./TravelList"

export default function Travel(){
    return (
        <div className="containerTravel">
            <TravelNav/>
            <TravelList/>
        </div>
    )
}