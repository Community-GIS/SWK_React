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

export const calMonthlyData = (data,selLane,selCategory) =>{
    const month = {'09':'Sep','10':'Oct','11':'Nov'}; 
    const colName = {'dry':'drywaste_af','wet':'wetwaste_af','rejected':'Rejected'};
    let selLaneData;
    if(selLane == 'all')
        selLaneData = data;
    else 
        selLaneData = data.filter(d => d.lane_name === selLane)
    const groupedData = selLaneData.reduce((obj,elem)=>{
        let category = elem.date.split('/')[1];
        if(!obj.hasOwnProperty(category))
            obj[category] = 0;
        
        obj[category] += elem[colName[selCategory]];
        return obj;
    },[])

    let calcLabels = [];
    let calcData = [];
    // console.log(groupedData);
    for(let key in groupedData){
        // console.log(month2[key]);
        calcLabels.push(month[key]);
        calcData.push(groupedData[key]);
    }

    // console.log(groupedData,calcData,calcLabels);
    const barData = {
        chartData:{
          labels: calcLabels,
          datasets:[
            {
              label:`${selCategory} waste`,
              data:calcData,
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