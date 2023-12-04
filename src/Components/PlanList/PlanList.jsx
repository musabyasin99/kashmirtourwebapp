import React from 'react';
import { useState } from 'react';
import ListItem from './ListItem';

import './planlist.css';
import TestImg from '../Assets/Logo.png';

function PlanList({item,setAllState}) {
    const [planList,setPlanList] = useState([
        {
            Destination : 'Gulmarg',
            Duration : '2 days / 3 nights',
            ExCost : 23000,
            Img : TestImg,
            Link : `/kashmirtourwebapp/package/123`
        },
        {
            Destination : 'Gulmarg',
            Duration : '2 days / 3 nights',
            ExCost : 23000,
            Img : TestImg,
            Link : `/kashmirtourwebapp/package/123`
        },
        {
            Destination : 'Gulmarg',
            Duration : '2 days / 3 nights',
            ExCost : 23000,
            Img : TestImg,
            Link : `/kashmirtourwebapp/package/123`
        },
        {
            Destination : 'Gulmarg',
            Duration : '2 days / 3 nights',
            ExCost : 23000,
            Img : TestImg,
            Link : `/kashmirtourwebapp/package/123`
        }
    ])
  return (
    <>
        <ul className='planList'>
            {
                planList.map((x) => {
                    return <ListItem item={x} setAllState={setAllState}/>
                })
            }
        </ul>
    </>
  );
}

export default PlanList;