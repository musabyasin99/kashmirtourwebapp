import React, { useState } from 'react'

import Main from '../Main/Main'
import Carousel from '../Carousel/Carousel'
import CarouselSlider from '../CarouselSlider/CarouselSlider'

import SliderImage from '../Assets/bg1.jpg';
import Logo from '../Assets/Logo.png';

function Home({setFormState}) {
    const [productList,setProductList] = useState([
        {
          Name:"Item 1",
          Cost:"$12",
          Poster:SliderImage,
          Description:`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, velit impedit.
          Fugiat ad, nemo blanditiis consequatur nihil doloremque soluta facilis.
          `
        },
        {
          Name:"Item 2",
          Cost:"$200",
          Poster:Logo,
          Description:`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, velit impedit.
          Fugiat ad, nemo blanditiis consequatur nihil doloremque soluta facilis.
          `
        },
        {
          Name:"Item 3",
          Cost:"$12",
          Poster:SliderImage,
          Description:`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, velit impedit.
          Fugiat ad, nemo blanditiis consequatur nihil doloremque soluta facilis.
          `
        },
        {
          Name:"Item 4",
          Cost:"$82",
          Poster:Logo,
          Description:`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, velit impedit.
          Fugiat ad, nemo blanditiis consequatur nihil doloremque soluta facilis.
          `
        },
        {
          Name:"Item 5",
          Cost:"$102",
          Poster:SliderImage,
          Description:`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, velit impedit.
          Fugiat ad, nemo blanditiis consequatur nihil doloremque soluta facilis.
          `
        },
        {
          Name:"Item 6",
          Cost:"$882",
          Poster:Logo,
          Description:`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, velit impedit.
          Fugiat ad, nemo blanditiis consequatur nihil doloremque soluta facilis.
          `
        },
      ]);
    const [slider1Data,setSlider1Data] = useState(
        {
            Placeholder:"Explore Our Packages",
            ProductList:productList
        }
    );
    const [carousel1Data,setCarousel1Data] = useState({
        Placeholder:"Most Visited Tourist Destinations",
        ProductList:productList
    });
    const [carousel2Data,setCarousel2Data] = useState({
        Placeholder:"Most Rated Tourist Packages",
        ProductList:productList
    });
  return (
    <main style={{'marginTop':'70px','width':'100%','background':'black'}}>
      <Main setFormState={setFormState}/>
      <Carousel CarouselDetails={carousel1Data}/>
      <CarouselSlider SliderDetails={slider1Data}/>
      <Carousel CarouselDetails={carousel2Data}/>
    </main>
  )
}

export default Home