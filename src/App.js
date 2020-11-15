import React,{useState} from 'react';
import './App.css';
import ChoroplethMap from './ChoroplethMap/ChoroplethMap';
import Barchart from './Barchart/Barchart';
import Dropdown from './Dropdown/Dropdown';
import "leaflet/dist/leaflet.css";
import {FetchData,FetchGeom} from './useData';
import InfoBoxes from './InfoBoxes/InfoBoxes';

function App() {
  const data = FetchData();
  const geojson = FetchGeom();

  const [selLane,setSelLane] = useState('all');

  if(!data || !geojson){
    return(<pre>loading...</pre>)
  }


  // console.log(lanes);
  return (
  <div className="app">

    <div className="app__header">
      <h1>SWK Dashboard</h1>
      <Dropdown data={data} selLane={selLane} setSelLane={setSelLane}/>
    </div>

    

    <div className="app__info">
       <InfoBoxes/>
    </div>

    <div className="app__stat">
      <div className="app__stat__map">
        <ChoroplethMap geojson={geojson} data={data} setSelLane={setSelLane}/>
      </div>

      <div className="app__stat__barchart">
        <Barchart/>
      </div>
    </div>
    <div className="app__barchart">
      <Barchart/>
      <Barchart/>
      <Barchart/>
    </div>

    {/* <Map /> */}

  </div>
  
  );
}

export default App;
