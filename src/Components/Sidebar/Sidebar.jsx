import React from 'react'



import HeaderItem from '../Header/HeaderNav/HeaderItem';

import './sidebar.css';
import './toggle.css';
import ButtonEl from './ButtonEl';



function Sidebar({setFormState,sidebarState,setSidebarState,setAllState}) {
  return (
    <>
        <button id='toggle' onClick={setSidebarState} className={sidebarState?'active':''}>
        </button>
        <nav id='mainSidebar' className={sidebarState ? 'active' : ''}>
            <ul id='itemList'>
                <HeaderItem link={{id:'home',title:"Home",href:"/kashmirtourwebapp/"}} setAllState={setAllState} />
                <HeaderItem link={{id:'plans',title:"Plans",href:"/kashmirtourwebapp/plan"}} setAllState={setAllState}/>
                <HeaderItem link={{id:'contact',title:'Call Now',href:"#"}} setAllState={setAllState}/>
                <ButtonEl properties={{Id:"formBtn",Title:"Book a call",setFormState:setFormState}} />
            </ul>
        </nav>
    </>
  )
}

export default Sidebar;