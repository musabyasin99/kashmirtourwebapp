import React from 'react'

import {Link} from 'react-router-dom';

function HeaderItem({link,setAllState}) {
  return (
    <li id={link.id} className='navItem'>
        <Link className='link' style={{'color':'white','textDecoration':'none'}} onClick={setAllState} to={link.href}>{link.title}</Link>
    </li>
  )
}

export default HeaderItem