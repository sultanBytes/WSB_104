import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div className='card'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
  )
}

export default Card