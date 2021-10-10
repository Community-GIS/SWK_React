import React,{useState} from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Typography } from '@material-ui/core'


const calcSubData = (data,selLane,cases) =>{
const kitchen = {"Vegetables and Fruits Peels":"vege_fruits_wt","Cooked Food and Tea Leftovers":"cooked_tea_wt","Bones and Meat Leftovers":"bones_leftovers","Egg Shells":"egg_shells_wt","Flowers and Leaves":"flowers_leaves_wt"}
const burnable = {"Sanitary Waste":"sanitarywaste_wt","Compostable Bio-Plastics":"compostible_bioplastic_wt"};
const landfill = {"Dust, Hair, Lint":"dust_hair_lint","Ceramics":"ceramics"}
const recyclable = {"Paper and Cardboard":"paper_cardboard_wt","Plastics":"plastic_wt","Glass":"glass_wt","Metal":"metals_wt","Pressurized Cans":"pressurised_cans_wt"}
const ewaste = {"Used Batteries":"used_battery_wt","Home Appliances, Laptops and Mobile Phones":"appliances_laptop_mobile_wt","Electronic Gadgets, Wires and Electronic Toys":"gadgets_wires_toys_wt"}
const total = {"Kitchen":"total_kitchen_wt","Burnable":"total_burnable_wt","Landfill":"total_landfill_wt","Recyclable":"total_recyclable_wt","E-Waste":"total_ewaste_wt"}
let wasteCategory = {"kitchen":kitchen,"burnable":burnable,"landfill":landfill,"recyclable":recyclable,"ewaste":ewaste,
"total":total}

let reqData = (selLane === 'all')?data:data.filter(d => d.zone_id === selLane);
let temp = {};
reqData.map(d =>{
        for (const [key, val] of Object.entries(wasteCategory[cases])) {
            if(!temp.hasOwnProperty(key))
                temp[key] = 0;
            temp[key] += d[val];
            }
})
return temp;
  }


  function getRandomColor(size) {
    let arr = [];
    let letters = '0123456789ABCDEF'.split('');
    for(let j = 0;j < size; j++){
    let color = '#';
        for (let i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    arr.push(color)
    }
    
    return arr;
}

export default function SubInfoBoxes({data,population,selLane,selCategory,setSelCategory}) {
    const kitchen = {"Vegetables and Fruits Peels":"vege_fruits_wt","Cooked Food and Tea Leftovers":"cooked_tea_wt","Bones and Meat Leftovers":"bones_leftovers","Egg Shells":"egg_shells_wt","Flowers and Leaves":"flowers_leaves_wt"}
    let pallet = 
    ['#003f5c','#2f4b7c','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600']; 
    // ["#00876c","#439981","#6aaa96","#8cbcac","#aecdc2","#cfdfd9","#f1f1f1","#f1d4d4","#f0b8b8","#ec9c9d","#e67f83","#de6069","#d43d51"]
    const subData = calcSubData(data,selLane,selCategory);
    console.log(subData)
    const donut = {
        labels: Object.keys(subData),
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(subData),
            backgroundColor: pallet.slice(0,Object.keys(subData).length),
            borderWidth: 1,
          },
        ],
      };

    return (
        <>
        <Typography style={{textAlign:"center"}} color="textSecondary" varient = "overline"className="infobox__title">Waste Segregation</Typography>

        <Doughnut data={donut} />
        </>
    )
}