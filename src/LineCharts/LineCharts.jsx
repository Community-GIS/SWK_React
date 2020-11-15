import React from 'react'
import LineChart from './LineChart/LineChart';
import './LineCharts.css';
import {calcDailyData,sliceLaneData}from '../util';
export default function LineCharts({data, selLane}) {
    const selLaneData = sliceLaneData(data,selLane);
    const dryData = calcDailyData(selLaneData,'dry')
    const wetData = calcDailyData(selLaneData,'wet')
    const rejectedData = calcDailyData(selLaneData,'rejected')
    return (
        <div className='linecharts'>
        <LineChart data={dryData}/>
        <LineChart data={wetData}/>
        <LineChart data={rejectedData}/>
        </div>
    )
}