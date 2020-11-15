import _ from 'lodash';

export const parseInteger = (data) =>{
    const dataColumns = ['Rejected','drywaste_af','drywaste_bf','num_houses_doing_segg','num_houses_giving_mixwaste','num_houses_reached','wetwaste_af','wetwaste_bf'];
    dataColumns.map(col =>{
        _.each(data, item => item[col] = parseInt(item[col], 10));

    })
    return data;
}
export const getDropdownLanes = (data) =>{
    const lanes = _.map(data,'lane_name')
    const uniqueLanes = [...new Set(lanes)];
    return uniqueLanes;
}

export const calcTotalWaste = (data,selLane,cases) =>{
    let totWaste,caseCol;
    if(selLane ==='all'){
        caseCol = _.map(data,cases)
       
    }else{
        let selLaneData= data.filter(d => d.lane_name === selLane)
        caseCol = _.map(selLaneData,cases)
    }
    totWaste =  _.sum(caseCol);
    return totWaste;
}

export const calMonthlyData = (data,selLanes,selCategory) =>{
    let label ;
    const barData = {
        chartData:{
          labels: ['Sep', 'Oct', 'Nov'],
          datasets:[
            {
              label:`${selCategory} waste`,
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
    return barData;
}