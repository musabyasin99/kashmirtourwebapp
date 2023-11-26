import React from 'react'

import Star from "../Assets/star.png";

function CarouselEl({product}) {
  return (
    <>
        <li className="carouselEl el">
          <div className="top">
            <h1 className='name'>Gulmarg</h1>
            <p className="rating">
              <img width={20} height={20} src={Star}  alt='rate' />
              <img width={20} height={20} src={Star}  alt='rate' />
              <img width={20} height={20} src={Star}  alt='rate' />
              <img width={20} height={20} src={Star}  alt='rate' />
              <img width={20} height={20} src={Star}  alt='rate' />
            </p>
          </div>
          <img src={product.Poster} alt={product.Name} className='poster' />
          <div className="btnWrap">
            <a className='btn btn-sm p-3 btn-dark rounded' href="/#" role='button'>View More</a>
          </div>
        </li>
    </>
  )
}

export default CarouselEl