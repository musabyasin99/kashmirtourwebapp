import React from 'react'
import HeaderItem from './HeaderItem';

function HeaderNav() {
  return (
    <ul id='navList'>
      <HeaderItem link={{id:'home',title:"Home"}} />
      <HeaderItem link={{id:'plans',title:"Plans"}} />
      <HeaderItem link={{id:'contact',title:'Call Now'}} />
    </ul>
  )
}

export default HeaderNav;