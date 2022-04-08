import React, { useState } from 'react'
import SignupForm from './SignupForm'
import Success from './Success'

function Form() {
  const [formSubmit, setFormSubmit] = useState(false)
  const submitForm = () =>{
    setFormSubmit(true)
  }

  return (
    <div>
      {!formSubmit ? <SignupForm submitForm={submitForm} /> : <Success />}
    </div>
  )
}

export default Form;