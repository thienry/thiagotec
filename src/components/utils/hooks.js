import { useState } from 'react'

export const useForm = (initialState = {}, validate) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    if (Object.keys(validate(values)).length === 0) {
      setErrors({})
    } else {
      e.preventDefault()
      setErrors(validate(values))
    }  
  }

  return { onChange, onSubmit, errors, values }
}