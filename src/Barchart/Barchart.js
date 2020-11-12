import React,{useState} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';
import './Barchart.css';

function Barchart() {
    const [state,setState] = useState();
    const data = {
        chartData:{
          labels: ['Lane 1', 'Lane2', 'Lane3'],
          datasets:[
            {
              label:'Dry waste',
              data:[
                317594,
                281045,
                253060
              ],
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
        <div className="barchart">
        <Bar
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

export default Barchart
