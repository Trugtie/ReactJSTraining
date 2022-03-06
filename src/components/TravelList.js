import React from 'react';
import TravelCard from './TravelCard'
import data from "./traveldata"

export default function TravelList(){
    const travelList = data.map((item)=>(
        <TravelCard item={item}/>
    ))
    return (
        <section className="TravelList-Session">
            <div className="TravelList-Container">
            {travelList}
            </div>
        </section>
    )
}