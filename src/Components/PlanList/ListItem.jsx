import React from 'react'
import { Link } from 'react-router-dom'

function ListItem({item,setAllState}) {
  return (
    <li className='listItem'>
      <img src={item.Img} alt={item.Destination}  className='itemPoster'/>
      <div className="itemDesc">
        <h1 className='subText'>{item.Destination}</h1>
        <h3 className="subText">{item.Duration}</h3>
        <h3 className="subText">{item.Cost}</h3>
        <Link to={item.Link} onClick={setAllState} style={{'alignSelf':'center'}} className='btn btn-dark px-4 py-3 rounded'>Explore</Link>
      </div>
    </li>
  )
}

export default ListItem