import React, { useState } from 'react'

const Card = (props) => {
  const [type, setType] = useState('password');
  const [btnValue, setBtnValue] = useState('show');

  const handlePassword = ()=>{
    if(btnValue === 'show'){
      setType('text');
      setBtnValue('hide');
    }
    else{
      setType('password');
      setBtnValue('show');
    }
  }

  return (
    <>
    <input type={type} className='border border-dark p-[8px_20px] w-full' />
    <button onClick={handlePassword} className='rounded block mx-auto mt-[20px] p-[10px_50px] text-[white] bg-[black] capitalize'>{btnValue}</button>
    </>
  )
}

export default Card