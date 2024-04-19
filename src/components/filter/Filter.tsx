import React, { useState } from 'react'
import "./filter.scss"
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Modal from '../modal/Dialog';
import Dialog from '../modal/Dialog';
import Map from '../map/Map';


const Filter = () => {

  
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [filtredData, setFiltredData] = useState<any>({
    address: "",
    cat: "",
    type: "",
    minPrice: null,
    maxPrice: null
  })



  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFiltredData({ ...filtredData, [name]: value })
  }




  return (
    <div className='filter'>
      <h1>Search results for <b>London</b></h1>
      <div onClick={()=>setIsOpen(!modalIsOpen)} className="map-search">
        <span>Search in map</span>
        <FmdGoodOutlinedIcon fontSize='large'/>
      </div>

       <Dialog {...{modalIsOpen , setIsOpen}}>
        <Map/>
       </Dialog>

      <form action="">

        <div className="up">

          <div className="address-input">
            <SearchIcon fontSize='large' />
            <input name='address' type="text" placeholder='Enter an address, city or ZIP code' />
          </div>

          <select name='cat'   id="estateCategory">
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="commercial">Commercial</option>
            <option value="land">Land</option>
          </select>

          <select name='type' id="estateType">
            <option value="forSale">For Sale</option>
            <option value="forRent">For Rent</option>
            <option value="all">All</option>
          </select>
        </div>
        <div className="down">

          <label form='minPrice'>Min Price:</label>
          <input type="number" id="minPrice" name="minPrice" placeholder="Minimum Price" />
          <label htmlFor="maxPrice">Max Price:</label>
          <input type="number" id="maxPrice" name="maxPrice" placeholder="Maximum Price" />
          <button><img src="../search.png" alt="" /></button>
        </div>

      </form>
    </div>
  )
}

export default Filter