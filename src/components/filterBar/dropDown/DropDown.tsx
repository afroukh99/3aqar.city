import React, { useState } from 'react'
import "./dropDown.scss"
import { MdKeyboardArrowDown } from "react-icons/md"


interface PropsTypes {
  payload: { value: string, label: string },
  palceholder: string,
  value: string,
  label: string
}




const DropDown = ({ payload, palceholder, value, label }: PropsTypes) => {
  const [open, setOpen] = useState(false);


  return (

    <div className='drop-down'>
      <label htmlFor="input">{label}</label>
      <div onClick={() => setOpen(!open)} className="select">
        <input id='input' type="text" placeholder={palceholder} value={value} />
        <MdKeyboardArrowDown className={`arrow ${open ? 'open' : ''}`} />
      </div>
      {
        open &&
        <div className="options">
          <p className="option">
            {payload.label}
          </p>
        </div>
      }
    </div>
  )
}




export default DropDown