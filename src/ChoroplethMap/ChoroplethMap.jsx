import React from 'react'
import { Map, TileLayer , GeoJSON} from "react-leaflet";
import "./ChoroplethMap.css";

function ChoroplethMap({geojson,data,setSelLane}) {
    const purpleOptions = { color: 'purple' }
    const handleMapClick = (e) => {
        setSelLane(e.target.feature.properties.name);
    }
    const onEachLane = (lane,layer) =>{
    
    layer.on({
        click: handleMapClick,
        });
    }


    return (
        <div className="map">
    
       
        <Map center={[19.0182, 72.8168]} zoom={17} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON style={purpleOptions} data={geojson} onEachFeature={onEachLane} />

        </Map>

        </div>
    )
}

export default ChoroplethMap
