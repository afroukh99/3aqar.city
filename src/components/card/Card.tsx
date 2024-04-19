import React, { useState } from 'react'
import "./card.scss"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import IconButton from '@mui/material/IconButton';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import { dataType } from '../../types/types';



const Card: React.FC = (props: dataType) => {

  const [bookmark, setBookmark] = useState<boolean>(false)

  return (
    <div className='card'>
      <div className="img-container">
        <img src={props.img} alt="" />
      </div>
      <div className="details">

        <h2>{props.title}</h2>
        <span className='location'><LocationOnOutlinedIcon className='icon' fontSize='large' /> {props.address}</span>
        <span className='price'>${props.price}</span>

        <div className="services">

          <div className="property-details">
            <span><BedOutlinedIcon className='icon' fontSize='large' /> {props.bedroom} <span> Bedroom</span></span>
            <span><BathtubOutlinedIcon className='icon' fontSize='large' /> {props.bathroom} <span> Bathroom</span></span>
          </div>
          <div className="amenities">
            <IconButton className='icon' onClick={() => setBookmark(!bookmark)}>
              <BookmarkBorderOutlinedIcon className={bookmark ? "bookmark active" : "bookmark"}
                fontSize='large' />
            </IconButton>
            <DirectionsBusFilledOutlinedIcon className='icon'
              fontSize='large' />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Card