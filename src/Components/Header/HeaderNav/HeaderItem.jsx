import React from 'react'

function HeaderItem({link}) {
  return (
    <li id={link.id} className='navItem'>
        {link.title}
    </li>
  )
}

export default HeaderItem