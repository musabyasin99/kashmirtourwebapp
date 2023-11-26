import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './slider.css';
import Product from '../Product/Product';

const CarouselSlider = ({SliderDetails}) => {
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

return(
  <>
  <h1 className='secHolder'>Explore Our Packages </h1>
  <Carousel responsive={responsive}>
    {
      SliderDetails.ProductList.map((x)=>{
        return <Product product={x}  />
      })
    }
  </Carousel>
</>
);
};

export default CarouselSlider;
