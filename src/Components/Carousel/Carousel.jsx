import React from 'react'

import { useState } from 'react';

import './carousel.css';


import CarouselEl from './CarouselEl';

function Carousel({CarouselDetails}) {
  return (
    <>
    <h2 className='secHolder'>
      {CarouselDetails.Placeholder}
    </h2>
    <ul className="carouselWrap">
      {
        CarouselDetails.ProductList.map((x)=>{
          return <CarouselEl product={x}/>
        })
      }
    </ul>
    </>
  )
}

export default Carousel;