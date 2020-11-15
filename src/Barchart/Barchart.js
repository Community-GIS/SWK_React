import React,{} from 'react'
import {Bar} from 'react-chartjs-2';
import './Barchart.css';
import { calMonthlyData } from '../util';

function Barchart({data,selLane,selCategory}) {
    // const [state,setState] = useState();
    const barData = calMonthlyData(data,selLane,selCategory);

    return (
        <div className="barchart">
        <Bar
          data={barData.chartData}
          options={{
            // title:{
            //   display:this.props.displayTitle,
            //   text:'Largest Cities In '+this.props.location,
            //   fontSize:25
            // },
            // legend:{
            //   display:this.props.displayLegend,
            //   position:this.props.legendPosition
            // }
          }}
        />
        </div>
    )
}

export default Barchart
