import React from "react";
import './sponsors.css';
import sponsors from './images/sponsors.jpg'

export default function Sponsors(){
    return(
        <div className="sponsors">
            <div className="sponsorshead" data-aos="fade-right" data-aos-delay="0" data-aos-duration="600">
                <h1>Our Major Clients</h1>
            </div>
            <div className="sponsorimage">
                <img src={sponsors}></img>
            </div>
        </div>
    );
}