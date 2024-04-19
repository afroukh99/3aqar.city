import React from 'react'
import "./estateList.scss"
import List from '../../components/list/List'
import Filter from '../../components/filter/Filter'
import Map from '../../components/map/Map'

const EstateList = () => {
  return (
    <div className='estate'>
      <section className="estate-section">
        <Filter />
        <List />
      </section>
      <section className="map-section">
        <Map/>
      </section>
    </div>
  )
}

export default EstateList