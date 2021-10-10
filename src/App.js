import React,{useState} from 'react';
import './App.css';
import ChoroplethMap from './ChoroplethMap/ChoroplethMap'; 
import Barchart from './Barchart/Barchart';
import Dropdown from './Dropdown/Dropdown';
import "leaflet/dist/leaflet.css";
import {FetchData,FetchGeom} from './useData';
import InfoBoxes from './InfoBoxes/InfoBoxes';
import SubInfoBoxes from './SubInfoBoxes/SubInfoBoxes';
import LineCharts from './LineCharts/LineCharts';
import { render } from 'react-dom';

export default function App() {
  const data = FetchData();
  const geojson = FetchGeom();

  const [selLane,setSelLane] = useState('all');
  const [selCategory,setSelCategory] = useState('kitchen');

  if(!data || !geojson){
    return(<pre>loading...</pre>)
  }


  return (
  <div className="app">

    <div className="app__header">
      <h1>Waste management</h1>
      <Dropdown data={data.track} selLane={selLane} setSelLane={setSelLane}/>
    </div>

    
    <div className="app__categories">
      <div className="app__categories_info">
        <InfoBoxes data={data.track} population={data.population} selLane={selLane} selCategory={selCategory} setSelCategory={setSelCategory}/>
      </div>

      <div className="app_categories_donut">
        <SubInfoBoxes data={data.track} population={data.population} selLane={selLane} selCategory={selCategory} setSelCategory={setSelCategory}/>
      </div>
    </div>

    <div className="app__stat">
      <div className="app__stat__map">
        {/* <ChoroplethMap geojson={geojson} data={data.track} bubblePopulationData={data.population} setSelLane={setSelLane} selCategory={selCategory}/> */}
      </div>
      <div className="app__stat__barchart">
        {/* <Barchart data={data.track} selLane={selLane} selCategory={selCategory}/> */}
      </div>

    </div>
    
      {/* <LineCharts data={data.track} selLane={selLane}/> */}

  </div>
  
  );
}

const appDiv = document.getElementById('root');
render(<App/>,appDiv)