import React from 'react'
import BookingForm from '../../Components/BookingForm/BookingForm'

function Plans({setFormState}) {
  return (
    <main>
        <h1>
            Plans
        </h1>
        <BookingForm setFormState={setFormState}/>
    </main>
  )
}

export default Plans