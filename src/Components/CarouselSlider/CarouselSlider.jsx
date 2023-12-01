import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './slider.css';
import Product from '../Product/Product';
import Loader from '../Loader/Loader';
import { useState } from 'react';

const CarouselSlider = ({SliderDetails,setAllState}) => {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const [isLoading,setLoading] = useState(true);

setTimeout(()=>{
  setLoading(false);
},2000);
return(
  <>
  {
    isLoading ? 
      <Loader /> 
        : 
      (
        <>
          <h1 className='secHolder'>Explore Our Packages </h1>
          <Carousel responsive={responsive}>
            {
              SliderDetails.ProductList.map((x)=>{
                return <Product product={x}  setAllState={setAllState}/>
              })
            }
          </Carousel>
        </>
      )
  }
  
</>
);
};

export default CarouselSlider;
