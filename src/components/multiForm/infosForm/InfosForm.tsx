import React from 'react'
import FormWrapper from '../formWrapper/FormWrapper'

const InfosForm = () => {
  return (
    <FormWrapper title='Informations' >
      <>
        <label htmlFor="">Price</label>
        <input type="number" required placeholder='price' />
        <label htmlFor="">Surface</label>
        <input type="number" required placeholder='surface' />
        <label htmlFor="">Price</label>
        <input type="number" required placeholder='price' />

      </>
    </FormWrapper>
)
}

export default InfosForm