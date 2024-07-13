import React, { useState } from 'react'
import "./filter.scss"
import FilterBar from '../filterBar/FilterBar';



const cats = [
  "شقق للإيجار",
  "أراضي للبيع",
  "فلل للبيع",
  "دور للإيجار",
  "فلل للإيجار",
  "محلات للبيع",
  "شقق للبيع",
  "بيت للبيع",
  "محلات للإيجار",
  "بيت لأيجار",

]



const Filter = () => {
  const [openFilterBar, setOpenFilterBar] = useState(false);
  const [active, setActive] = useState('');

  return (
    <div className='filter'>
      <div className="wrapper">
        <button onClick={() => setOpenFilterBar(true)}
          className='search-btn'>بحت <img className='search-icon' src="./search.png" alt="" /> </button>
        <div className="categories">
          {cats.map(cat => (
            <button onClick={()=> setActive(cat)} className={`category ${active === cat && 'active'}`}>{cat}</button>
          ))}
        </div>
      </div>
      <FilterBar open={openFilterBar} setOpen={setOpenFilterBar} />
    </div>
  )
}

export default Filter