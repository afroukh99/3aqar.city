import React from 'react'
import "./filterBar.scss";
import DropDown from './dropDown/DropDown';
import RadioBtn from './radioBtn/RadioBtn';
import CheckBox from './checkBox/CheckBox';



type PropsType = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const numbers : number [] =[1, 2, 3, 4, 5]


const FilterBar = (props: PropsType) => {
  return (
      <div className={`filter-bar ${props.open ? 'open' : ''}`}>
        <div className="container">
          <div className="top">
            <span onClick={() => props.setOpen(false)} className="exit">X</span>
            <h2 className='title'>ابحث عن عقار</h2>
            <button className='reset'>إعادة الضبط</button>
          </div>
          <hr />
          <form action="">
            <DropDown payload={{
              value: "حي المصانع ",
              label: "حي المصانع ",
            }
            }
              palceholder='dsads'
              value='عقارات'
              label='قسم العقار' />
            <DropDown payload={{
              value: " حي بدر ",
              label: " حي بدر "
            }} palceholder='dsads'
              value='عقارات'
              label='المدينة' />
            <DropDown payload={{
              value: " حي عريض",
              label: " حي عريض"
            }
            } palceholder='dsads'
              value='عقارات'
              label='الاتجاه' />
              <RadioBtn label = {"الصالات"}/>
              <RadioBtn label = {"الغرف"}/>
              <RadioBtn label = {"عدد دورات المياة"}/>
              <CheckBox label = {"مصعد"}/>
              <CheckBox label = {"مكيف"}/>
              <CheckBox label = {"مؤتثة"}/>
          </form>
        </div>
      </div>
  )
}

export default FilterBar