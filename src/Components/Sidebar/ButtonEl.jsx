import React from 'react'

function ButtonEl({properties}) {
  return (
    <>
    <button onClick={properties.setFormState} id={properties.Id} className='btn btn-dark rounded p-2'>
        {properties.Title}
    </button>
    </>
  )
}

export default ButtonEl