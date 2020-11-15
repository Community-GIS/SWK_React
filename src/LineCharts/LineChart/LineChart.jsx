import React,{} from 'react'
import {Line} from 'react-chartjs-2';
import './LineChart.css';

function Linechart({data}) {
    // const [state,setState] = useState();
    const barData = {
        chartData:{
          labels: [1,2,3,4,5,6],
          datasets:[
            {
              label:[1,2,3,4,5,6],
              data:[23,43,45,6,77],
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)'
              ]
            }
          ]
        }
      };
    return (
        <div className="linechart">
        <Line
          data={data.chartData}
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

export default Linechart
