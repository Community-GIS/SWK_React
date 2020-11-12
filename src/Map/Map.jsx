import React from 'react'
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";

function Map() {
    return (
        <div className="map">
       
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
        </div>
    )
}

export default Map
