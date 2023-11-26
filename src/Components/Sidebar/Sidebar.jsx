import React from 'react'
import { useState } from 'react';


import HeaderItem from '../Header/HeaderNav/HeaderItem';

import './sidebar.css';
import './toggle.css';
import ButtonEl from './ButtonEl';



function Sidebar({setFormState}) {
  const [isActive,setIsActive] = useState(false);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    }
  return (
    <>
        <button id='toggle' onClick={handleButtonClick} className={isActive?'active':''}>
        </button>
        <nav id='mainSidebar' className={isActive ? 'active' : ''}>
            <ul id='itemList'>
                <HeaderItem link={{id:'home',title:"Home"}} />
                <HeaderItem link={{id:'plans',title:"Plans"}} />
                <HeaderItem link={{id:'contact',title:'Call Now'}} />
                <ButtonEl properties={{Id:"formBtn",Title:"Book a call",setFormState:setFormState}} />
            </ul>
        </nav>
    </>
  )
}

export default Sidebar;