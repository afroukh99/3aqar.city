import React, { useState } from 'react'
import "./searchSection.scss"
import { queryType } from '../../types/types'

const btnType = [
  "All",
  "Sell",
  "Rent",
]

104378
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
        <input type="text" placeholder='City' />
        <input type="number" placeholder='Min Price' min={0} max={1000000} />
        <input type="number" placeholder='Max Price' min={100} max={1000000} />
        <button><img src="../search.png" alt="" /></button>
      </form>
    </div>
  )
}

export default SearchSection