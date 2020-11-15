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