import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.css';
import InfoBox from './InfoBox/InfoBox';
import Map from './Map/Map';
import Barchart from './Barchart/Barchart';

function App() {
  
  
  return (
  <div className="app">
    <div className="app__header">
      <h1>SWK Dashboard</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="all">
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="lane1">Lane 1</MenuItem>
          <MenuItem value="lane2">Lane 2</MenuItem>
          <MenuItem value="lane2">Lane 3</MenuItem>
        </Select>
    </FormControl>
    </div>

    

    <div className="app__info">
      <InfoBox title={"DRY"} value={"50KG"}/>
      <InfoBox title={"WET"} value={"60KG"}/>
      <InfoBox title={"REJECTED"} value={"80KG"}/>
    </div>

    <div className="app__stat">
      <Map/>
      <Barchart/>
    </div>
    {/* monthly barchart */}
    <div className="app__barchart">
      <Barchart/>
      <Barchart/>
      <Barchart/>
    </div>
    {/* daily barchart */}
    {/* daily barchart */}
    {/* daily barchart */}

    {/* flowmap */}
  </div>
  
  );
}

export default App;
