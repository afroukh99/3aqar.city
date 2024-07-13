import { ReactNode } from "react"
import "./formWrapper.scss"



type FormPropsTypes = {
  title : string,
  children : ReactNode
}


const FormWrapper = ({title , children} : FormPropsTypes) => {
  return (
    <div className='form-wrapper'>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default FormWrapper