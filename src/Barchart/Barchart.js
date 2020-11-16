import React,{} from 'react'
import {Bar} from 'react-chartjs-2';
import './Barchart.css';
import { calMonthlyData } from '../util';

function Barchart({data,selLane,selCategory}) {
    // const [state,setState] = useState();
    const barData = calMonthlyData(data,selLane,selCategory);
    let titleText = `${selCategory} Waste Monthly Distribution`;
    titleText = titleText.charAt(0).toUpperCase() + titleText.slice(1)

    return (
        <div className="barchart">
        <Bar
          data={barData.chartData}
          options={{
            title:{
              display:true,
              text:titleText,
              fontSize:15
            },
            legend:{
              display:false
              // position:
            },
            scales:{
              yAxes:[
                {
                  ticks:{
                    beginAtZero: true,
                    // stepSize:200
                  },
                  
                    scaleLabel: {
                      display: true,
                      labelString: 'total waste(Kg)'
                    },

                    gridLines: {
                      // display:false,
                      // drawOnChartArea: false
                  }
                  
                }
              ],
              xAxes:[{
                gridLines:{
                  // display:false
                  drawOnChartArea: false
                }
              }
              ]
            }

          }}
        />
        </div>
    )
}

export default Barchart
