import React from 'react'


import './product.css';
import { Link } from 'react-router-dom';

function Product({product,setAllState}) {
  return (
    <>
        <div className='card'>
            <img class="contentImage"  src={product.Poster} alt={product.Name} />
            <div className="desc">
              <div className='cardTop'>
                <h1 className='detail'>{product.Name}</h1>
                <p className='price'>{product.Cost}</p>
              </div>
              <p className='description'>{product.Description.slice(0,100)}<br />...</p>
              <Link onClick={setAllState} className='btn btn-sm btn-primary rounded' to='/package/:123'> View Plan</Link>
            </div>
        </div>
    </>
  )
}

export default Product