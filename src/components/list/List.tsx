import React from 'react'
import "./list.scss";
import Card from '../card/Card';
import { useFetch } from '../../hooks/useFetch';






const List: React.FC = () => {

const posts = useFetch("http://localhost:5000/api/post")

console.log(posts)

  return (
    <div className='list'>
      {
        posts.map(data => (
          <Card key={data.id} {...data} />
        ))
      }
    </div>
  )
}

export default List