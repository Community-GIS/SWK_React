import _ from 'lodash';

export const getDropdownLanes = (data) =>{

    const lanes = _.map(data,'lane_name')
    const uniqueLanes = [...new Set(lanes)];
    return uniqueLanes;

}