import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.css';
import InfoBox from './InfoBox/InfoBox';
import Map from './Map/Map';
import Barchart from './Barchart/Barchart';
import "leaflet/dist/leaflet.css";

function App() {
  
  
  return (
  <div className="app">

    <div className="app__header">
      <h1>SWK Dashboard</h1>

    </div>

    

    <div className="app__info">

    <FormControl className="app__dropdown">
        <Select variant="outlined" value="all">
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="lane1">Lane 1</MenuItem>
          <MenuItem value="lane2">Lane 2</MenuItem>
          <MenuItem value="lane2">Lane 3</MenuItem>
        </Select>
    </FormControl>
      <InfoBox title={"DRY"} value={"50KG"}/>
      <InfoBox title={"WET"} value={"60KG"}/>
      <InfoBox title={"REJECTED"} value={"80KG"}/>
    </div>

    <div className="app__stat">
      <div className="app__stat__map">
        <Map/>
      </div>

      <div className="app__stat__barchart">
        <Barchart/>
      </div>
    </div>
    {/* monthly barchart */}
    <div className="app__barchart">
      <Barchart/>
      <Barchart/>
      <Barchart/>
    </div>

    {/* flowmap */}
    <Map/>

  </div>
  
  );
}

export default App;
