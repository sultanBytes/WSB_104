import React, { useState } from 'react'

const Model = () => {
    const [modelPosition, setModelPosition] = useState('-50%');

    const handleModel = ()=>{
        if(modelPosition === '-50%'){
            setModelPosition('50%');
        }
        else{
            setModelPosition('-50%');
        }
    }
  return (
    <>
    <div className={`model w-[800px] h-[600px] bg-[lightblue] fixed top-[${modelPosition}] start-[50%] translate-x-[-50%] translate-y-[-50%] duration-300`} ></div>
    <button onClick={handleModel} className='rounded block mt-[20px] p-[10px_50px] text-[white] bg-[black] capitalize'>Click me</button>
    </>
  )
}

export default Model