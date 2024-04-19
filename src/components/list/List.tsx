import React from 'react'
import "./list.scss";
import Card from '../card/Card';
import {listData} from "../../lib/data"



const List : React.FC = () => {
  return (
    <div className='list'>
      {
        listData.map(data  => (
          <Card key={data.id} {...data}/>
        ))
      }
    </div>
  )
}

export default List