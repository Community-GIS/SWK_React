import React from 'react'
import LineChart from './LineChart/LineChart';
import './LineCharts.css';

export default function LineCharts() {
    return (
        <div className='linecharts'>
        <LineChart/>
        <LineChart/>
        <LineChart/>
        </div>
    )
}
