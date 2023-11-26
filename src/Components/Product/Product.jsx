import React from 'react'


import './product.css';

function Product({product}) {
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
              <button className='btn btn-sm btn-primary rounded'> View Plan</button>
            </div>
        </div>
    </>
  )
}

export default Product