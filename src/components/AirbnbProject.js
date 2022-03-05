import React from 'react';
import AirNav from './AirNav';
import Hero from './AirHero';
import AirList from './AirProducts'

export default function AirbnbProject() {
    return(
        <div className="containerAir">
            <AirNav/>
            <Hero/>
            <AirList/>
        </div>
    )
}