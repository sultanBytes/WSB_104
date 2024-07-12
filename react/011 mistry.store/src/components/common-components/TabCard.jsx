import React from 'react'

const TabCard = ({details}) => {
  return (
    <div className='tab-card rounded-4 border px-3 py-4'>
        <img src={details.thumbanail}/>
    </div>
  )
}

export default TabCard