import React from 'react'
import InfoBox from './InfoBox/InfoBox';
import './InfoBoxes.css';

export default function InfoBoxes() {
    return (
        <div className="infoboxes">
        <InfoBox title={"DRY"} value={"50KG"}/>
        <InfoBox title={"WET"} value={"60KG"}/>
        <InfoBox title={"REJECTED"} value={"80KG"}/>
        </div>
    )
}
