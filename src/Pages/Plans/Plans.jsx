import React from 'react'
import BookingForm from '../../Components/BookingForm/BookingForm';
import PlanList from '../../Components/PlanList/PlanList';

function Plans({setFormState,setAllState}) {
  return (
    <>
      <main>
          <h1 className='secHolder'>
              Our Packages
          </h1>
          <PlanList setAllState={setAllState}/>
          <BookingForm setFormState={setFormState}/>
      </main>
    </>
  )
}

export default Plans