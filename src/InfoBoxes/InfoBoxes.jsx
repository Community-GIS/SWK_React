import React,{useState} from 'react'
import InfoBox from './InfoBox/InfoBox';
import './InfoBoxes.css';
import {calcTotalWaste} from '../util';

export default function InfoBoxes({data,selLane}) {
    let dry = calcTotalWaste(data,selLane,'drywaste_af');
    let wet = calcTotalWaste(data,selLane,'wetwaste_af');
    let rejected = calcTotalWaste(data,selLane,'Rejected');

    // const [dry,setDry] = useState();
    return (
        <div className="infoboxes">
        <InfoBox title={"Dry Waste After Seggregation"} value={`${dry}Kg`}/>
        <InfoBox title={"Wet Waste After Seggregation"} value={`${wet}Kg`}/>
        <InfoBox title={"Total Rejected Waste"} value={`${rejected}Kg`}/>
        </div>
    )
}
