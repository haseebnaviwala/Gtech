import React from "react";
import "./mapcomponent.css";

export default function Mapcomponent(){

    return(
        <div className="mainmapview">
            <div className="mapname">
                <h1>FIND US</h1>
            </div>
            <div className="mainmap">
            <iframe width="100%" height="500" frameBorder="0" scrolling="yes" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=UNICON%20INTERNATIONAL%20PVT%20LTD%20Plot%20207,%20Mehran%20Town%20Sector%2023%20Korangi%20Industrial%20Area,%20Karachi,%20Karachi%20City,%20Sindh%2074900%20Karachi+(UNICON%20INTERNATIONAL%20PVT%20LTD)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div>
    );
}