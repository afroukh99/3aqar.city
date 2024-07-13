import React from 'react';
import "./slider.scss";



interface propsType {
  coverImg: string;
  imgs: string[];
}

const Slider: React.FC<propsType> = ({ coverImg, imgs }) => {
  return (
    <div className='slider'>
      <div className="big-img">
        <img src={coverImg} alt="" />
      </div>
      <div className="small-imgs">
        {
          imgs.map((img, key) => (
            <img src={img} key={key} />
          ))
        }
      </div>

    </div>
  )
}

export default Slider