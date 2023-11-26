//import React, { useEffect, useState } from 'react'

// import HeaderNav from './HeaderNav/HeaderNav'

// import Logo from './Logo.png';

import './header.css';
import Sidebar from '../Sidebar/Sidebar';

function Header({btnAction}) {
  // const [showSB,setShowSB] = useState(false);

  // const handleResize = () =>{
  //   setShowSB(window.innerWidth < 744);
  // }

  // useEffect(()=>{

  //   // Attach the event listener when the component mounts
  //       window.addEventListener('resize', handleResize);

  //   // Cleanup the event listener when the component unmounts
  //       return () => {
  //         window.removeEventListener('resize', handleResize);
  //       };
  // },[]);

  // useEffect(()=>{
    // Attach the event listener when the component mounts
    // window.addEventListener('load', handleResize);

    // Cleanup the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('load', handleResize);
  //   }
  // },[]);
  return (
    <>
    <header id='mainHeader' className=''>
      <div className="logo">
        <h3 className='title'>My Kashmir.Tour</h3>
      </div>
          <Sidebar setFormState={btnAction} />
    </header>
    </>
  )
}


export default Header;