import React from 'react'
import BookingForm from '../../Components/BookingForm/BookingForm'
import TestIMG from '../Assets/bg2.jpg';

import './package.css';

function Package({setFormState}) {
  return (
    <>
    <section className="package">
       <main style={{'background':'black'}}>
        <section className="plan">
          <figure>
            <img src={TestIMG} alt="" className='mainPoster'/>
            <figcaption></figcaption>
          </figure>
          <div className="description">
            <div className="descTop">
              <div className='descLeft'>
                <h2 className='destName'>Pahalgam</h2>
                <h3 className='review' style={{'visibility':'hidden'}}>4.5/5</h3>
              </div>
              <div className="descRight">
              <p className='duration'>Stay Duration : 2 Days/3 Nights</p>
              <p className='cost'>Estimate Cost Per Person : 23900</p>
              <p className='cab'>Cab Services Included *</p>
            </div>
            </div>
            <div className="desBottom">
              <p className="descText">
                Pahalgam, nestled in the picturesque region of Jammu and Kashmir, India, is a breathtaking tourist destination known for its natural beauty, lush landscapes, and serene surroundings. Here's a description of Pahalgam, capturing its essence and charm:
                Pahalgam, often referred to as the "Valley of Shepherds," is a mesmerizing town situated at the confluence of the Lidder River and the Sheshnag Lake, surrounded by the majestic Himalayan mountains. This pristine destination is renowned for its idyllic meadows, dense pine forests, 
                and the tranquil Lidder River that gracefully meanders through the town.
                The allure of Pahalgam lies in its enchanting natural beauty. Snow-capped peaks, verdant meadows, and the soothing sound of the Lidder River create a postcard-perfect setting. 
                The Betaab Valley, named after the Bollywood movie "Betaab" shot there,
                is a stunning expanse of greenery with a backdrop of snow-capped mountains, making it a popular spot for nature lovers.
              </p>
            </div>
          </div>
          <div className="gallery">
            <h1 className='secHolder'> Gallery </h1>
            <div className="galWrap">
              <img src={TestIMG} alt="" className="galleryImages el" />
              <img src={TestIMG} alt="" className="galleryImages el" />
              <img src={TestIMG} alt="" className="galleryImages el" />
              <img src={TestIMG} alt="" className="galleryImages el" />
              <img src={TestIMG} alt="" className="galleryImages el" />
              <img src={TestIMG} alt="" className="galleryImages el" />
              <img src={TestIMG} alt="" className="galleryImages el" />
              <img src={TestIMG} alt="" className="galleryImages el" />
            </div>
          </div>
        </section>
       </main>
    </section>
    {<BookingForm setFormState={setFormState}/>}
    </>
  )
}

export default Package