import React from 'react'

const Card = (props) => {

  return (
    <>
    <div className='bg-[red]'>Card</div>
    <div>
        {props.children}
    </div>
    </>
  )
}

export default Card