import React,{useState} from 'react';
import './App.css';
import ChoroplethMap from './ChoroplethMap/ChoroplethMap';
import Barchart from './Barchart/Barchart';
import Dropdown from './Dropdown/Dropdown';
import "leaflet/dist/leaflet.css";
import {FetchData,FetchGeom} from './useData';
import InfoBoxes from './InfoBoxes/InfoBoxes';
import LineCharts from './LineCharts/LineCharts';

function App() {
  const data = FetchData();
  const geojson = FetchGeom();

  const [selLane,setSelLane] = useState('all');
  const [selCategory,setSelCategory] = useState('dry');

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
       <InfoBoxes data={data} selLane={selLane} selCategory={selCategory} setSelCategory={setSelCategory}/>
    </div>

    <div className="app__stat">
      <div className="app__stat__map">
        <ChoroplethMap geojson={geojson} data={data} setSelLane={setSelLane} selCategory={selCategory}/>
      </div>

      <div className="app__stat__barchart">
        <Barchart data={data} selLane={selLane} selCategory={selCategory}/>
      </div>
    </div>
      <LineCharts data={data} selLane={selLane}/>
    {/* <Map /> */}

  </div>
  
  );
}

export default App;
