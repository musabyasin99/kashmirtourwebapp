import React from 'react'
import Logo from '../Assets/Logo.png';


import './main.css';

import BookingForm from '../BookingForm/BookingForm';

function Main({setFormState}) {
  return (
    <>
      <main className='mainWrap'>
        <section className='body'>
          <div className="top">
            <h1 className='banner title el'>My Kashmir Tour</h1>
            <h6 className='banner approval el'> J&K Govt Approved </h6>
          </div>
        </section>
        <section className='mid'>
          <div className='el details'>
            <span className='cc'>
                <h2 className='ccTop'>
                  ADVENTURE WITH US,PLAN YOUR TRIP.
                </h2>
                <h4 className='ccBottom'>
                  AND CHERISH THE SERENE BEAUTY OF EVERY SEASON OF KASHMIR WITH US.
                </h4>
            </span>
            <img style={{'objectFit':'cover','borderRadius':'50%'}} width="300" height="300" src={Logo} alt="logo" />
            <span className='cc'>
              <h2 className="ccTop">
                WE OFFER CUSTOMIZED PACKAGES WITH AFFFORDABLE PRICES TO SUIT YOUR NEEDS AND PREFERNCES.
              </h2>
              <h4 className='ccBottom'>
                OUR AIM IS TO CREATE  UNIQUE AND IMMERSIVE TRAVEL EXPERIENCES BEYOND ORDINARY.
              </h4>
            </span>
          </div>
            {<BookingForm setFormState={setFormState}/>}
        </section>
      </main>
    </>
  )
}

export default Main;