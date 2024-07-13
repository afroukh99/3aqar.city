import React, { useState } from 'react'
import "./searchSection.scss"
import { queryType } from '../../types/types'
import { Link } from 'react-router-dom'

const btnType = [
  "All",
  "Sell",
  "Rent",
]

const SearchSection = () => {



  const [query, setQuery] = useState<queryType>({
    type: "All",
    city: "",
    min: 0,
    max: 0
  })



  const switchType = (type: string) => {
    setQuery(prev => ({ ...prev, type }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setQuery(prev => ({ ...prev, [name]: value }))
  }




  return (
    <div className='search-section'>
      <div className="buttons">
        {
          btnType.map(type =>
            <button
              className={type === query.type ? 'active' : ""}
              onClick={() => switchType(type)} key={type}>{type}</button>
          )
        }
      </div>
      <form >
        <input onChange={handleChange} name='city' type="text" placeholder='City' />
        <input onChange={handleChange} name='min' type="number" placeholder='Min Price' min={0} max={1000000} />
        <input onChange={handleChange} name='max' type="number" placeholder='Max Price' min={100} max={1000000} />
        <Link className='search-button' to={`/list?city=${query.city}`}><img src="../search.png" alt="" /></Link>
      </form>
    </div>
  )
}

export default SearchSection