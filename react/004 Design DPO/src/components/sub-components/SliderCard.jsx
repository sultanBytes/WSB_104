import React from 'react'
import Img1 from './../../assests/images/1676369859_mainDD_639_650x650.jpg';

const SliderCard = ({ title, img }) => {

  return (
    <div className='slider-card'>
        <figure>
            <img src={img}></img>
        </figure>
        <div className='card-body'>
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default SliderCard