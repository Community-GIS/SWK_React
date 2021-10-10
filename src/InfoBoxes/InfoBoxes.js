import React,{useState} from 'react'
import InfoBox from './InfoBox/InfoBox';
import './InfoBoxes.css';
import {calcTotalWaste} from '../util';
import _ from 'lodash';

export default function InfoBoxes({data,population,selLane,selCategory,setSelCategory}) {
    let kitchen_wt = calcTotalWaste(data,population,selLane,'total_kitchen_wt');
    let burnable_wt = calcTotalWaste(data,population,selLane,'total_burnable_wt');
    let landfill_wt = calcTotalWaste(data,population,selLane,'total_landfill_wt');
    let recyclable_wt = calcTotalWaste(data,population,selLane,'total_recyclable_wt');
    let ewaste_wt = calcTotalWaste(data,population,selLane,'total_ewaste_wt');
    // let rejected = calcTotalWaste(data,population,selLane,'rejected');
    let total = calcTotalWaste(data,population,selLane,'total');
    let kitchen_percent = _.round(_.multiply(_.divide(kitchen_wt[0],total[0]),100),3);
    let burnable_percent = _.round(_.multiply(_.divide(burnable_wt[0],total[0]),100),3);

    let landfill_percent = _.round(_.multiply(_.divide(landfill_wt[0],total[0]),100),3);
    let recyclable_percent = _.round(_.multiply(_.divide(recyclable_wt[0],total[0]),100),3);
    let ewaste_percent = _.round(_.multiply(_.divide(ewaste_wt[0],total[0]),100),3);

    // let rej_percent = _.round(_.multiply(_.divide(rejected[0],total[0]),100),3);
    let total_percent = _.round(_.multiply(_.divide(total[0],total[0]),100),3);

    let date_array = data[data.length - 1].collection_date.split('-');
    let latest_date= `${date_array[2]}-${date_array[1]}-${date_array[0]}`;

    // const [total,setTotal] = useState();
    return (
        <>
        <InfoBox active={selCategory === 'kitchen' } onClick={() => setSelCategory("kitchen")} title={`Kitchen Waste`} value={`${kitchen_wt[0]} kg`} percap={`${kitchen_wt[1]} kg per capita`} percent={`${kitchen_percent} %`} date={`till ${latest_date}`}/>
        <InfoBox active={selCategory === 'burnable' } onClick={() => setSelCategory("burnable")} title={`Burnable Waste`} value={`${burnable_wt[0]} kg`} percap={`${burnable_wt[1]} kg per capita`} percent={`${burnable_percent} %`} date={`till ${latest_date}`}/>
        
        <InfoBox active={selCategory === 'landfill' } onClick={() => setSelCategory("landfill")} title={`Landfill Waste`} value={`${landfill_wt[0]} kg`} percap={`${landfill_wt[1]} kg per capita`} percent={`${landfill_percent} %`} date={`till ${latest_date}`}/>
        <InfoBox active={selCategory === 'recyclable' } onClick={() => setSelCategory("recyclable")} title={`Recyclable Waste`} value={`${recyclable_wt[0]} kg`} percap={`${recyclable_wt[1]} kg per capita`} percent={`${recyclable_percent} %`} date={`till ${latest_date}`}/>
        <InfoBox active={selCategory === 'ewaste' } onClick={() => setSelCategory("ewaste")} title={`E-Waste`} value={`${ewaste_wt[0]} kg`} percap={`${ewaste_wt[1]} kg per capita`} percent={`${ewaste_percent} %`} date={`till ${latest_date}`}/>
        {/* <InfoBox active={selCategory === 'rejected' } onClick={() => setSelCategory("rejected")} title={`Segregated Rejected Waste`} value={`${rejected[0]} kg`} percap={`${rejected[1]} kg per capita`} percent={`${rej_percent} %`} date={`till ${latest_date}`}/> */}
        <InfoBox active={selCategory === 'total' } onClick={() => setSelCategory("total")} title={`Total Waste`} value={`${total[0]} kg`} percap={`${total[1]} kg per capita`} percent={`${total_percent} %`} date={`till ${latest_date}`}/>
    </>
    )
}