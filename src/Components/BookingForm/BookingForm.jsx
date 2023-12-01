import './bookingform.css'
import React from 'react'

function BookingForm({setFormState,sidebarState}) {
  return (
    <form id='bookingForm' className={setFormState === true ? 'form active' : 'form'}>
        <h1 className='form-label lbl'> Book A Call</h1>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id='name' className="form-input" required/>
        </div>
        <div className="form-group">
          <label htmlFor="Email" className="form-label">Email Address</label>
          <input type="email" id='email' className="form-input" required/>
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="text" id='phone' className="form-input" required/>
        </div>
        <input className='btn btn-md btn-dark' type='submit' value="Submit" />
    </form>
  )
}

export default BookingForm;